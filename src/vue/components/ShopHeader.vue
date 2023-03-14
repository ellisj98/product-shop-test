<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import BasketTotal from "./BasketTotal.vue";
</script>

<template>
    <app-header>
        <div class="u-flex u-items-center">
            <!-- TODO make this dynamic for the actual price -->
            <span class="u-mr-4">£105</span>
            <basket-total />
        </div>
    </app-header>
</template>
