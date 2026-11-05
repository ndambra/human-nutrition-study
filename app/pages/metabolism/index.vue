<script lang="ts" setup></script>

<template>
  <v-container class="w-75">
    <v-row>
      <h1 class="mx-auto">
        Nutrient Metabolism
      </h1>
    </v-row>
    <v-row class="d-flex justify-space-evenly">
      <v-btn
        to="/digestion"
        rounded="lg"
        size="x-large"
        height="70"
        width="240"
        color="secondary"
        class="font-weight-bold"
      >
        Digestion
      </v-btn>
      <v-btn
        to="/absorption"
        rounded="lg"
        size="x-large"
        height="70"
        width="240"
        color="secondary"
        class="font-weight-bold"
      >
        Absorption
      </v-btn>
    </v-row>
    <v-row>
      <h2 class="mx-auto">Macronutrients</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          to="/carbohydrates"
          rounded="lg"
          size="x-large"
          height="70"
          width="240"
          color="secondary"
          class="font-weight-bold"
        >
          Carbohydrates
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          to="/lipids"
          rounded="lg"
          size="x-large"
          height="70"
          width="240"
          color="secondary"
          class="font-weight-bold"
        >
          Lipids
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          to="/protein"
          rounded="lg"
          size="x-large"
          height="70"
          width="240"
          color="secondary"
          class="font-weight-bold"
        >
          Protein
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
