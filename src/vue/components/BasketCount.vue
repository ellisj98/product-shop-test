<script setup lang="ts">
import useShopStore from '../stores/shop';
import AppHeader from "./AppHeader.vue";
const shopStore = useShopStore();
</script>

<template>
   <span class="u-block u-ratio-1-1 u-w-10 u-rounded-full u-bg-brand-primary u-text-white u-font-semibold u-relative u-flex-shrink-0">
        <span class="u-center">{{ shopStore.amountOfProductsInBasket }}</span>
   </span>
</template>
