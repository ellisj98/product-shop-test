<script setup lang="ts">
import currencyFormatter from '../../ts/Utilities/General/currencyFormatter';
import RawProduct from ".../Types/Product/RawProduct";
import ProductVariant from ".../Types/Product/ProductVariant";
import { PropType, ComputedRef, computed } from 'vue';
import useShopStore from "../stores/shop";

const shopStore = useShopStore();

const props = defineProps({
    product: {
        type: Object as PropType<RawProduct>,
        required: true
    },
});

const productVariantToShow: ProductVariant = props.product.variants[0];
const productVariantPrice: number = productVariantToShow.price;
const productImage: string = props.product.images[0].src;
const productTitle: string = productVariantToShow.title;

const productAddedToBasket: ComputedRef<boolean> = computed(() : boolean => {
    return shopStore.productsInBasket.includes(props.product);
});

</script>

<template>
    <div class="u-border u-border-gray-300 u-p-3 u-bg-white u-shadow-lg u-h-full u-flex u-flex-col">
        <div class="u-border-[10px] u-border-gray-200 u-mb-3">
            <img :src="productImage" />
        </div>
        <div class="u-flex u-mb-3">
            <div v-html="product.body_html" class="s-content u-remove-last-child-margin">
            </div>
            <div class="u-ml-5 u-flex-shrink-0 u-font-semibold">
                {{ currencyFormatter(productVariantPrice) }}
            </div>
        </div>
        <div class="u-mt-auto u-flex">
            <button class="o-button u-w-1/2" @click="shopStore.pushProductToBasket(product)" v-if="!productAddedToBasket">Add to cart</button>
            <button class="o-button u-w-1/2" v-else disabled>Added</button>
            <button class="o-button o-button--neutral u-w-1/2">Quick view</button>
        </div>
   </div>
</template>
