<script setup lang="ts">
import AppCard from "../ui/app-card.vue";

const items = [
  {
    title: "Chylomicrons",
    desc: "transport exogenous dietary lipids",
    comp: "triglyceride",
  },
  { title: "VLDL", desc: "Very low density", comp: "triglyceride" },
  {
    title: "IDL",
    desc: "Intermediate density",
    comp: "triglyceride/cholesterol",
  },
  { title: "LDL", desc: 'Low density; "bad"', comp: "cholesterol" },
  { title: "HDL", desc: 'High density; "good"', comp: "protein" },
];
</script>

<template>
  <AppCard title="Transport and Storage" variant="outlined">
    <h3>All lipids transported by 5 lipoproteins:</h3>
    <v-list density="compact">
      <v-list-item v-for="(item, i) in items" :key="i">
        - <strong>{{ item.title }}</strong> - {{ item.desc }}; {{ item.comp }}
      </v-list-item>
    </v-list>
  </AppCard>
</template>
