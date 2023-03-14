<script setup lang="ts">
import { Skeletor } from 'vue-skeletor';
</script>

<template>
    <div class="u-border u-border-gray-300 u-p-4 u-bg-white">
        <skeletor height="120" />
        <div class="u-flex u-mt-4 u-justify-between">
            <skeletor height="20" class="u-flex-grow u-mr-3" />
            <skeletor height="20" class="u-flex-grow" />
        </div>
    </div>
</template>
