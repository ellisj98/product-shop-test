<script setup lang="ts">
import { SortingOption } from '../ts/Interfaces/Product/SortingOption';
import {sortingProperties} from '../Utilities/Product/useProductSorting';
import SelectOptionSelect from "./Form/SelectOptionSelect.vue";
import { PropType } from 'vue';

const options: SortingOption[] = [
    {
        value: 1,
        fieldNameToSortBy: 'body_html',
        text: 'Title (A-Z)',
        ASC: true,
        sortingLocation: 'product',
        sortingDataType: 'alphabetical',
    },
    {
        value: 2,
        fieldNameToSortBy: 'body_html',
        text: 'Title (Z-A)',
        ASC: false,
        sortingLocation: 'product',
        sortingDataType: 'alphabetical',
    },
    {
        value: 3,
        fieldNameToSortBy: 'price',
        text: 'Lowest Price',
        ASC: true,
        sortingLocation: 'variant',
        sortingDataType: 'number',
    },
    {
        value: 4,
        fieldNameToSortBy: 'price',
        text: 'Highest Price',
        ASC: false,
        sortingLocation: 'variant',
        sortingDataType: 'number',
    },
];

const onChange = (sortingValue: number) => {
    const currentOption = options.find((option) => {
        return option.value == sortingValue;
    });
    if (currentOption) {
        sortingProperties.value = currentOption;
    }
};
</script>

<template>
    <label for="sorting" class="u-mr-3 u-mb-2 u-uppercase">Sort by</label>
    <select-option-select
        name="sorting"
        :options="options"
        @change="onChange"
    />
</template>
