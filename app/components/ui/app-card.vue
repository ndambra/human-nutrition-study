<script setup lang="ts">
type CardProps = {
  title: string;
  subtitle?: string;
  variant?: "text" | "flat" | "elevated" | "outlined" | "plain" | "tonal" | undefined;
  color?: string;
};
defineProps<CardProps>();
</script>

<template>
  <v-card
    :variant="variant ? variant : 'elevated'"
    class="my-3 fill-height pb-3"
  >
    <v-card-title class="font-weight-bold text-primary text-wrap">
      {{ title }}
    </v-card-title>
    <v-card-subtitle v-if="subtitle" class="text-wrap">
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider thickness="2" />
    <v-card-text class="py-0">
      <slot />
    </v-card-text>
  </v-card>
</template>
