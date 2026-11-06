<script lang="ts" setup>
import AppCard from "../ui/app-card.vue";

const albumin = [
  { title: "- 55% of total plasma proteins" },
  { title: "- nonspecific transport protein (FA, calcium, zinc)"}
];
</script>

<template>
  <AppCard
    title="Plasma Proteins"
    variant="outlined"
    subtitle="Blood plasma contains hundreds of proteins, most are synthesized as complex glycoproteins by liver"
  >
    <v-list density="compact">
      <v-list-item>
        - include <strong>transport proteins, enzyme inhibitors, clotting factors</strong> and <strong>immunoglobulins</strong>
      </v-list-item>
      <v-list-item>
        - 5 major classes: <strong>albumin, alpha1-globulins, alpha2-globulins, beta-globulins,</strong> and <strong>gamma-globulins</strong>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col cols="6">
        <AppCard title="Albumin" variant="outlined">
          <v-list>
            <v-list-item
              v-for="(a, i) in albumin"
              :key="i"
              tag="li"
            >
              <div v-html="a.title" />
            </v-list-item>
          </v-list>
        </AppCard>
      </v-col>
      <v-col cols="6" />
      <v-col cols="6" />
      <v-col cols="6" />
      <v-col cols="6" />
    </v-row>
  </AppCard>
</template>

<style>

</style>
