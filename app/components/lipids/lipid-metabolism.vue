<script lang="ts" setup>
import AppCard from "../ui/app-card.vue";
import LipidAbsorption from "./lipid-absorption.vue";
import LipidDigestion from "./lipid-digestion.vue";
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
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <v-list density="compact">
              <v-list-item>
                - lipid products in <strong>micelles</strong> diffuce into enterocytes
              </v-list-item>
              <v-list-item>
                - lipids resterified after absorption
              </v-list-item>
              <v-list-item>
                - packaged in <strong>chylomicrons</strong> and travel via <strong>l</strong>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </AppCard>
</template>

<style>

</style>
