<script setup lang="ts">
import asset from '../../ts/Utilities/General/asset';
const image = asset('bg.jpg');
</script>

<template>
    <div class="u-ratio-page-header u-relative">
        <img :src="image" alt="Page graphic image" class="u-cover" />
    </div>
</template>