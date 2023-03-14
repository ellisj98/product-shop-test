<script setup lang="ts">
import currencyFormatter from '../../ts/Utilities/General/currencyFormatter';
import RawProduct from ".../Types/Product/RawProduct";
import ProductVariant from ".../Types/Product/ProductVariant";
import { PropType } from 'vue';
import useShopStore from "../stores/shop";

const shopStore = useShopStore();

const props = defineProps({
    product: {
        type: Object as PropType<RawProduct>,
        required: true
    },
});
 
const productVariantToShow: ProductVariant = props.product.variants[0];
const productVariantPrice: number = productVariantToShow.price;
const productTitle: string = productVariantToShow.title;

</script>

<template>
    <div class="u-border-t u-border-gray-300 u-py-3 u-text-sm">
        <div class="u-flex">
            <div class="u-w-3/4">
                <div v-html="product.body_html" class="u-remove-last-child-margin u-mb-2 s-content">
                </div>
                <p class="u-text-brand-primary u-mb-0">
                    {{ productTitle }}
                </p>
            </div>
            <div class="u-ml-5 u-flex-shrink-0 u-flex u-flex-col">
                <div class="u-font-semibold">
                    {{ currencyFormatter(productVariantPrice) }}
                </div>
                <div class="u-mt-auto">
                    <button class="o-button o-button--neutral u-mt-3 u-text-xs" @click="shopStore.removeProductFromBasket(product)">Remove</button>
                </div>
            </div>
        </div>
   </div>
</template>
