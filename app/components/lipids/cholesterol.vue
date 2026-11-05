<script lang="ts" setup>
const cholesterols = [
  { title: "steroid hormones" },
  { title: "bile acids" },
  { title: "Adrenocortical hormones" },
  { title: "Vitamin D" },
];
</script>

<template>
  <v-card class="my-3">
    <v-card-title class="text-primary font-weight-bold">
      Cholesterol
    </v-card-title>
    <v-card-subtitle>Simple Lipid - waxes</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined" class="fill-height">
            <v-card-title>Overview</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  - stored in cells as <strong>cholesteryl esters</strong>
                </v-list-item>
                <v-list-item>
                  - ~700 mg produced within the body
                </v-list-item>
                <v-list-item>
                  - HMG-CoA reductase is rate controlling enzyme
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card variant="outlined" class="fill-height">
            <v-card-title>Precursor for:</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item v-for="item in cholesterols" :key="item.title">
                  - <strong>{{ item.title }}</strong>
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
