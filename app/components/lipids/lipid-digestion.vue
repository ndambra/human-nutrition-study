<script setup lang="ts">
import AppCard from "../ui/app-card.vue";

const lipids = [
  "digested by lipases from mouth, stomach, and small intestine",
  "majority of digestion takes place in uppper jejunum",
  "only mono-acylglycerides aand free fatty acids are absorbed",
];
</script>

<template>
  <AppCard title="Digestion" variant="outlined">
    <v-list density="compact">
      <v-list-item v-for="(item, i) in lipids" :key="i">
        - {{ item }}
      </v-list-item>
    </v-list>
  </AppCard>
</template>
