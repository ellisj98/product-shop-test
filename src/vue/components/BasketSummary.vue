<script setup lang="ts">
import useShopStore from '../stores/shop';
import BasketCount from './BasketCount.vue';
import BasketTotalPrice from './BasketTotalPrice.vue';
import BasketProduct from './BasketProduct.vue';
const shopStore = useShopStore();
</script>

<template>
    <div class="u-bg-white u-p-6 u-border-t-[3px] u-border-t-brand-primary u-shadow-lg u-sticky u-top-6">
        <div class="u-flex u-items-center u-mb-4">
            <h4 class="u-uppercase u-mb-0 u-mr-4">Cart</h4>
            <basket-count />
        </div>
        <div v-if="shopStore.amountOfProductsInBasket > 0" class="u-border-b u-border-gray-300">
            <basket-product v-for="product in shopStore.productsInBasket" :key="product.id" :product="product" />
        </div>
        <div v-else>
            <p>You have no products in your cart.</p>
        </div>
        <div class="u-mt-12 u-p-4 u-bg-gray-200 u-flex u-items-center u-justify-between u-text-sm">
            <div>
                <p class="u-mb-0 u-font-semibold">Total</p>
                <p class="u-mb-0">Inc. £0 in taxes</p>
            </div>
            <basket-total-price class="u-text-lg" />
        </div>
    </div>
</template>
