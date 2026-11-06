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
      <v-col>
        <AppCard title="Regulation" variant="outlined">
          <v-list density="compact">
            <v-list-item>
              - <strong>Acetyl-CoA carboxylase</strong> = rate limiting step in FA synthesis; activated by citrate, inhibited by palmitoyl-CoA (and other long-chain fatty acyl-CoAs)
            </v-list-item>
            <v-list-item>
              - <strong>Carnitine palmitoyl transferase I</strong> = prevents FA oxidation
            </v-list-item>
            <v-list-item>
              - Hormone sensitive lipase (HSL) - activated for <strong>lipolysis</strong> by <strong>epinephrine</strong>, <strong>adrenocorticotropic hormone</strong>, <strong>glucagon</strong> and <strong>inhibited by insulin</strong>
            </v-list-item>
          </v-list>
        </AppCard>
      </v-col>
    </v-row>
  </AppCard>
</template>

<style></style>
