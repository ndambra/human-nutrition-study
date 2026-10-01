<script setup lang="ts">
const route = useRoute();

console.warn("route", route.params);
</script>

<template>
  <p>{{ $route.params.slug }}</p>
</template>
