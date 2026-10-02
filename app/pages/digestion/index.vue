<script setup lang="ts">
import CarbohydrateDigestionPanel from "~/components/digestion/carbohydrate-digestion-panel.vue";
import CholesterolEsterPhospholipidDigestion from "~/components/digestion/cholesterol-ester-phospholipid-digestion.vue";
import ProductsReadyForUptake from "~/components/digestion/products-ready-for-uptake.vue";
import ProteinDigestionPanel from "~/components/digestion/protein-digestion-panel.vue";
import TriglycerideDigestionPanel from "~/components/digestion/triglyceride-digestion-panel.vue";
</script>

<template>
  <v-container class="w-75">
    <h1>Summary</h1>
    <v-expansion-panels
      :rounded="[20, 8]"
      gap="8"
      variant="accordion"
      static
      class="my-6"
    >
      <!-- Digestive Tract panel -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Digestive Tract
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <DigestionDigestiveTractTable />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Digestive Enzymes -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Digestive Enzymes
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <DigestionDigestiveEnzymesTable />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Carbohydrates -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Carbohydrate Digestion
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <CarbohydrateDigestionPanel />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Protein -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Protein Digestion
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ProteinDigestionPanel />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Triglycerides -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Triglyceride Digestion
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <TriglycerideDigestionPanel />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Cholesterol Ester and Phospholipid -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Cholesterol Ester and Phospholipid Digestion
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <CholesterolEsterPhospholipidDigestion />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Final products -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Products Ready for Uptake
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ProductsReadyForUptake />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- Digestion drawing -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Digestion Summary Drawing
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-img
            :aspect-ratio="1"
            class="bg-surface elevation-3"
            src="~/assets/digestion-Summary.png"
            width="fit-content"
          />
          <v-img
            :aspect-ratio="1"
            class="bg-surface elevation-3"
            src="~/assets/digestion-sumary-pt2.png"
            width="fit-content"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider />

    <v-card class="mt-4 pl-2 pr-2">
      <v-card-title>Explore More</v-card-title>
      <v-divider />
      <v-card-text class="d-flex justify-space-between">
        <v-btn
          size="x-large"
          variant="text"
          color="primary"
          to="/carbohydrates"
        >
          Carbohydrates
        </v-btn>
        <v-btn
          size="x-large"
          variant="text"
          color="primary"
        >
          Protein
        </v-btn>
        <v-btn
          size="x-large"
          variant="text"
          color="primary"
          class="mr-1"
        >
          Lipids
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
