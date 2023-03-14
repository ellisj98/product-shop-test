<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import BasketCount from "./BasketCount.vue";
import useShopStore from '../stores/shop';
import BasketTotalPrice from './BasketTotalPrice.vue';
const shopStore = useShopStore();
</script>

<template>
    <app-header>
        <div class="u-flex u-items-center">
            <basket-total-price class="u-mr-4" />
            <basket-count />
        </div>
    </app-header>
</template>
