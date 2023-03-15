import { computed, ComputedRef, isRef, ref, Ref } from 'vue';
import { SortingLocation, SortingOption } from '../../../ts/Interfaces/Product/SortingOption';
import { cloneDeep } from 'lodash';
import RawProduct from '../../../ts/Interfaces/Product/RawProduct';
import ProductVariant from '../../../ts/Interfaces/Product/ProductVariant';

interface OrderedProductsToCompare {
    first: RawProduct,
    second: RawProduct,
}

const compareByAlphabet = (a: string, b: string): number => {
    return a.localeCompare(b);
}

const compareByNumber = (a: number, b: number): number => {
    return a - b;
};

const getOrderOfItemsByDirection = (current: RawProduct, next: RawProduct, sortingPropertiesValues: Ref<SortingOption>): OrderedProductsToCompare => {
    return {
        first: sortingPropertiesValues.value.ASC ? current : next,
        second: sortingPropertiesValues.value.ASC ? next : current,
    };
};

const getProductOrProductVariant = (sortingLocation: SortingLocation, product: RawProduct) : ProductVariant | RawProduct => {
    if (sortingLocation == 'variant') {
        return product.variants[0];
    }
    return product;
}

const getValuesToCompare = (orderedItemsToCompare: OrderedProductsToCompare, sortingPropertiesValues: Ref<SortingOption>) => {

    // Sorting location is either product or provider
    const sortingLocation: SortingLocation = sortingPropertiesValues.value.sortingLocation;

    const firstProductOrVariant = getProductOrProductVariant(sortingLocation, orderedItemsToCompare.first);
    const secondProductOrVariant = getProductOrProductVariant(sortingLocation, orderedItemsToCompare.second);

    const fieldNameToSortBy = sortingPropertiesValues.value.fieldNameToSortBy;

    return {
        a: firstProductOrVariant[fieldNameToSortBy as keyof typeof firstProductOrVariant],
        b: secondProductOrVariant[fieldNameToSortBy as keyof typeof secondProductOrVariant],
    }
}

export const sortingProperties = ref<SortingOption | null>(null);

export const getSortedProducts = (products: RawProduct[]) => {

    // Lets clone here to be safe
    const clonedProducts = cloneDeep(products);
    const sortingPropertiesValues = sortingProperties as Ref<SortingOption>;

    // Default sorting (when none is selected)
    if (sortingPropertiesValues.value == null) {
        return products;
    }

    return clonedProducts.sort((current: RawProduct, next: RawProduct) => {
        const orderedItemsToCompare = getOrderOfItemsByDirection(current, next, sortingPropertiesValues);
        const valuesToCompare = getValuesToCompare(orderedItemsToCompare, sortingPropertiesValues);

        // If current sorting properties is alphabetical, sort by this
        if (sortingProperties.value !== null && sortingProperties.value.sortingDataType == 'alphabetical') {
            return compareByAlphabet(valuesToCompare.a as string, valuesToCompare.b as string);
        }
        return compareByNumber(valuesToCompare.a as unknown as number, valuesToCompare.b as unknown as number);
    });

};