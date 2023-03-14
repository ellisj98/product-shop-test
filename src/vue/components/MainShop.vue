<script setup lang="ts">
import useShopStore from "../stores/shop";
import LoadingProducts from "./LoadingProducts.vue";
import BasketSummary from "./BasketSummary.vue";
import ProductGrid from "./ProductGrid.vue";
const shopStore = useShopStore();
// Make call to get products.
shopStore.getProducts();
</script>

<template>
    <div class="u-py-10">
        <div class="o-wrapper">
            <div class="o-grid">
                <div class="o-grid__col from-tvl:o-grid__col-8">
                    <loading-products v-if="!shopStore.productsFetched" />
                    <product-grid :products="shopStore.products" v-else />
                </div>
                <div class="o-grid__col from-tvl:o-grid__col-4">
                    <basket-summary />
                </div>
            </div>
        </div>
    </div>
</template>
