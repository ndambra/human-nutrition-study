<script setup lang="ts"></script>

<template>
  <v-container>
    <v-expansion-panels
      :rounded="[20, 8]"
      gap="8"
      variant="accordion"
      static
    >
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
    </v-expansion-panels>
  </v-container>
</template>
