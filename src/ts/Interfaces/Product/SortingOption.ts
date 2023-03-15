import SelectOption from "../Form/SelectOption";

export type SortingLocation = 'product' | 'variant';

export interface SortingOption extends SelectOption {
    fieldNameToSortBy: string,
    ASC: boolean,
    sortingDataType: 'alphabetical' | 'number',
    sortingLocation: SortingLocation,
}