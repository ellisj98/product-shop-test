<script setup lang="ts">
import useShopStore from '../stores/shop';
import AppHeader from "./AppHeader.vue";
const basketTotal = useShopStore().getBasketTotalItems;
</script>

<template>
   <span class="u-block u-ratio-1-1 u-w-10 u-rounded-full u-bg-brand-primary u-text-white u-relative">
        <span class="u-center">{{ basketTotal }}</span>
   </span>
</template>
