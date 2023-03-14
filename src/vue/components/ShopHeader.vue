<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import CartTotal from "./CartTotal.vue";
</script>

<template>
    <app-header>
        <div class="u-flex u-items-center">
            <!-- TODO make this dynamic for the actual price -->
            <span class="u-mr-4">£105</span>
            <cart-total :total="3" />
        </div>
    </app-header>
</template>
