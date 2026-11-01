<template>
  <v-container>
    <v-data-table :items="items" hide-default-footer></v-data-table>
    <p>Must meet 1 or more of the above criteria</p>
    <p>
      Note: A1C reflects average glycemia over
      <span class="text-bold">2-3 months</span>
    </p>
  </v-container>
</template>

<script setup lang="ts">
const items = [
  { test: "A1C", prediabetes: "5.7-6.4%" },
  { test: "Fasting plasma glucose", prediabetes: "100-125 mg/dL" },
  { test: "2-hour OGTT (75g glucose)", prediabetes: "140-199 mg/dL" },
];
</script>
