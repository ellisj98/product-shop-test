<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
const props = defineProps({
    total: Number
})
</script>

<template>
   <span class="u-block u-p-2 u-px-3.5 u-rounded-full u-bg-brand-primary u-text-white">
        {{ total }}
   </span>
</template>
