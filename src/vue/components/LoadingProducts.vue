<script setup lang="ts">
import LoadingProduct from "./LoadingProduct.vue";
</script>

<template>
    <div class="o-grid">
        <div class="o-grid__col from-tvl:o-grid__col-4" v-for="item in 10">
            <loading-product :key="item" />
        </div>
    </div>
</template>


