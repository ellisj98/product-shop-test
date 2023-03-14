<script setup lang="ts">
import useShopStore from '../stores/shop';
const shopStore = useShopStore();
const products = shopStore.getProducts();
</script>

<template>
  <h1 class="u-text-3xl u-font-bold u-underline">
    Hello world!
  </h1>
</template>