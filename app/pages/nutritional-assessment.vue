<script lang="ts" setup>

</script>

<template>
  <v-container>
    <h1>Nutritional Assessment</h1>
    <v-expansion-panels
      :rounded="[20, 8]"
      gap="8"
      variant="accordion"
      static
      class="my-6"
    >
      <!-- A - anthropometric -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              (A) Anthropometric
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Dimension, composition
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- B - biochemical -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              (B) Biochemical
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          laboratory
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- C - clinical -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              (C) Clinical
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          symptoms, visuals, subjective measurements
        </v-expansion-panel-text>
      </v-expansion-panel>

      <!-- D - dietary -->
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              (D) Dietary
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          food and nutrient intake
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<style>

</style>
