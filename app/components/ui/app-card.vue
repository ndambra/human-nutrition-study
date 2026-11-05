<script setup lang="ts">
type CardProps = {
  title: string;
  variant?: "text" | "flat" | "elevated" | "outlined" | "plain" | "tonal" | undefined;
  color?: string;
};
defineProps<CardProps>();
</script>

<template>
  <v-card
    :variant="variant ? variant : 'elevated'"
    class="my-3 fill-height"
  >
    <v-card-title class="font-weight-bold text-primary text-wrap">
      {{ title }}
    </v-card-title>
    <v-divider thickness="2" />
    <v-card-text class="mt-2">
      <slot />
    </v-card-text>
  </v-card>
</template>
