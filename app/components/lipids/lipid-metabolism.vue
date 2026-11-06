<script lang="ts" setup>
import AppCard from "../ui/app-card.vue";
import LipidAbsorption from "./lipid-absorption.vue";
import LipidDigestion from "./lipid-digestion.vue";
import LipidTransport from "./lipid-transport.vue";
</script>

<template>
  <AppCard title="Metabolism">
    <v-row>
      <v-col cols="6">
        <LipidDigestion />
      </v-col>
      <v-col cols="6">
        <LipidAbsorption />
      </v-col>
      <v-col cols="12">
        <LipidTransport />
      </v-col>
    </v-row>
  </AppCard>
</template>

<style></style>
