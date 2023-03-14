<script setup lang="ts">
import asset from '../../ts/Utilities/General/asset';
const image = asset('bg.jpg');
</script>

<template>
    <img :src="image" alt="Page graphic image" class="u-w-full" />
</template>