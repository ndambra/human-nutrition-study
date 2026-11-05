<script lang="ts" setup>
const summaryItems = [
  { title: "Simple Lipids", text: ["Fatty acids", "Tri-, di-, and mono-acylglycerols", "Waxes"] },
  { title: "Compounds Lipids", text: ["Phospholipids", "Glycolipids", "Lipoproteins"] },
  { title: "Derived Lipids", text: ["Hydrolysis of lipids in Groups 1-2"] },
  { title: "Ethyl Alcohol", text: ["Not a lipid", "Similar as lipid metabolism"] },
];
</script>

<template>
  <v-card>
    <v-card-title class="text-primary font-weight-bold">
      Summary
    </v-card-title>
    <v-card-subtitle>Substances are generally insoluble in water, but soluble in organic solvents</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col
          v-for="item in summaryItems"
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
            <v-card-title>Metabolism</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  - Beta-Oxidation (FA breakdown) <v-icon icon="mdi-arrow-right-thick" /> <strong>Acetyl-CoA</strong>
                </v-list-item>
                <v-list-item>
                  - FA Synthesis (FA production) <v-icon icon="mdi-arrow-right-thick" /> <strong>palmitate (16:0)</strong>
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
