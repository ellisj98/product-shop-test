<script setup lang="ts">
import currencyFormatter from '../../ts/Utilities/General/currencyFormatter';
import RawProduct from ".../Types/Product/RawProduct";
import ProductVariant from ".../Types/Product/ProductVariant";
import { PropType } from 'vue';
const props = defineProps({
    product: {
        type: Object as PropType<RawProduct>,
        required: true
    },
});

const productVariantToShow: ProductVariant = props.product.variants[0];
const productVariantPrice: number = productVariantToShow.price;
const productImage: string = props.product.images[0].src;
const productTitle: string = productVariantToShow.title;
</script>

<template>
    <div class="u-border u-border-gray-300 u-p-3 u-bg-white u-shadow-lg u-h-full">
        <div class="u-border-[10px] u-border-gray-200 u-mb-3">
            <img :src="productImage" />
        </div>
        <div class="u-flex">
            <div v-html="product.body_html">
            </div>
            <div class="u-ml-5 u-flex-shrink-0 u-font-semibold">
                {{ currencyFormatter(productVariantPrice) }}
            </div>
        </div>
   </div>
</template>
