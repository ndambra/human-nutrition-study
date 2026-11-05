<script lang="ts" setup>
const fattyAcids = [
  { title: "Saturated Fatty Acids", text: ["palmitic acid (16:0)", "stearic acid (18:0)"] },
  { title: "Unsaturated Fatty Acids", text: ["oleic acid (18:1)", "linoleic acid (18:2)"] },
];
</script>

<template>
  <v-card class="my-3">
    <v-card-title class="text-primary font-weight-bold">
      Fatty Acids
    </v-card-title>
    <v-card-subtitle>Simple Lipid</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col
          v-for="item in fattyAcids"
          :key="item.title"
          cols="6"
        >
          <v-card variant="outlined" class="fill-height">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item v-for="(ex, i) in item.text" :key="i">
                  - {{ ex }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card variant="outlined" class="fill-height">
            <v-card-title>Essental Fatty Acids</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  - <strong>alpha-linolenic acid</strong> - Precursor to Omega-3
                </v-list-item>
                <v-list-item>
                  - <strong>linoleic acid</strong> - Precursor to Omega-6
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style>

</style>
