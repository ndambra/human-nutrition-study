<script lang="ts" setup>
const items = [
  { title: "Diabetes Mellitus", link: "/clinical/diabetes" },
];
</script>

<template>
  <v-container>
    <v-card
      variant="tonal"
      color="primary"
      class="pa-8"
    >
      <v-card-title class="text-center">Clinical Nutrition</v-card-title>
      <v-card-text>
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          color="secondary"
          size="x-large"
          class="font-weight-bold"
        >
          {{ item.title }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>

</style>
