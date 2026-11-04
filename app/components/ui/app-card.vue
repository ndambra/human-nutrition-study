<script setup lang="ts">
type CardProps = {
  title: string;
  text?: string;
  variant?: "text" | "flat" | "elevated" | "outlined" | "plain" | "tonal" | undefined;
  color?: string;
};
defineProps<CardProps>();
</script>

<template>
  <v-card :color="color" :variant="variant">
    <v-card-title class="font-weight-bold border-b-md text-wrap">
      {{ title }}
    </v-card-title>
    <v-card-text class="mt-2">
      {{ text }}
    </v-card-text>
  </v-card>
</template>
