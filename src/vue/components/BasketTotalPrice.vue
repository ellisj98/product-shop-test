<script setup lang="ts">
import currencyFormatter from '../../ts/Utilities/General/currencyFormatter';
import useShopStore from '../stores/shop';
import AppHeader from "./AppHeader.vue";
const shopStore = useShopStore();
</script>

<template>
    <span class="u-font-semibold">
        {{ currencyFormatter(shopStore.totalCostOfBasket) }}
    </span>
</template>
