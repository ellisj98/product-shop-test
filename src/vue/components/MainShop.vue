<script setup lang="ts">
import { getSortedProducts } from '../Utilities/Product/useProductSorting';
import { ComputedRef, computed } from 'vue';
import useShopStore from "../stores/shop";
import LoadingProducts from "./LoadingProducts.vue";
import BasketSummary from "./BasketSummary.vue";
import ProductGrid from "./ProductGrid.vue";
import ProductSorting from "./ProductSorting.vue";
const shopStore = useShopStore();
// Make call to get products.
shopStore.getProducts();


const sortedProducts: ComputedRef<RawProduct[]> = computed(() => {

    // Return sorted products if products are fetched
    if (shopStore.productsFetched && shopStore.products) {
        return getSortedProducts(shopStore.products);
    }
    // Return empty array if products not fetched yet
    return [];
});

</script>

<template>
    <div class="u-py-10">
        <div class="o-wrapper">
            <div class="o-grid">
                <div class="o-grid__col from-ds:o-grid__col-9">
                    <loading-products v-if="!shopStore.productsFetched" />
                    <template v-else>
                        <div class="u-mb-8 u-inline-block">
                            <product-sorting />
                        </div>
                        <product-grid :products="sortedProducts" />
                    </template>
                </div>
                <div class="o-grid__col from-ds:o-grid__col-3">
                    <basket-summary />
                </div>
            </div>
        </div>
    </div>
</template>
