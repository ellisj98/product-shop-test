<script setup lang="ts">
import useShopStore from '../stores/shop';
import basketTotal from './BasketTotal.vue';
const shopStore = useShopStore();
</script>

<template>
    <div class="u-bg-white u-p-6 u-border-t-[3px] u-border-t-brand-primary u-shadow-lg u-sticky u-top-6">
        <div class="u-flex u-items-center u-mb-4">
            <h4 class="u-uppercase u-mb-0 u-mr-4">Cart</h4>
            <basket-total />
        </div>
        <div v-if="shopStore.getAmountOfProductsInBasket > 0">
        </div>
        <div v-else>
            <p>You have no products in your cart.</p>
        </div>
    </div>
</template>
