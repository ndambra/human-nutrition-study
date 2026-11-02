<script lang="ts" setup></script>

<template>
  <v-container class="w-75">
    <div>
      <h2 class="text-center">
        Nutrient Metabolism
      </h2>
    </div>
    <div class="d-flex justify-space-evenly">
      <v-btn
        to="/digestion"
        rounded="lg"
        size="x-large"
        height="70"
        width="240"
        color="primary"
      >
        Digestion
      </v-btn>
      <v-btn
        to="/absorption"
        rounded="lg"
        size="x-large"
        height="70"
        width="240"
        color="primary"
      >
        Absorption
      </v-btn>
    </div>

    <div>
      <h2 class="text-center">
        Disease States
      </h2>
    </div>
    <div>
      <v-btn
        to="/diabetes"
        rounded="lg"
        size="x-large"
        height="70"
        width="240"
        color="primary"
      >
        Diabetes Mellitus
      </v-btn>
    </div>
  </v-container>
</template>

<style></style>
