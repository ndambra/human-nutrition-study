<script lang="ts" setup>
import Cholesterol from "~/components/lipids/cholesterol.vue";
import FattyAcids from "~/components/lipids/fatty-acids.vue";
import LipidDigestion from "~/components/lipids/lipid-digestion.vue";
import LipidsSummary from "~/components/lipids/lipids-summary.vue";
</script>

<template>
  <v-container>
    <h1 class="text-center text-primary">Lipids</h1>
    <LipidsSummary />
    <FattyAcids />
    <Cholesterol />
    <LipidDigestion />
  </v-container>
</template>

<style></style>
