<script setup lang="ts">
import RawProductData from ".../Types/Product/RawProductData";
import ProductTile from "./ProductTile.vue";
import { PropType } from 'vue';
const props = defineProps({
    products: {
        type: Array as PropType<RawProductData>,
        required: true
    },
});
</script>

<template>
    <div class="o-grid">
        <div class="o-grid__col from-ts:o-grid__col-6 from-tl:o-grid__col-4" v-for="product in products" :key="product.id">
            <product-tile :product="product" />
        </div>
    </div>
</template>
