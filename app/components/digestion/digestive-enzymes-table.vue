<script lang="ts" setup>
const headers = [
  { title: "Location", value: "location" },
  { title: "Enzymes/Coenzymes", value: "enzymes" },
];
const digestiveEnzymes = [
  {
    location: "Mouth",
    enzymes: ["Salivary amylase", "Lingual lipase"],
  },
  {
    location: "Stomach",
    enzymes: ["Pepsin", "Gastric lipase"],
  },
  {
    location: "Small Instestine",
    enzymes: ["Pancreatic alpha-amylase", "Brush border disaccharidases", "Pancreatic Lipase", "Colipase", "Phospholipase-A2", "Cholesterol esterase", "Proteases", "Brush Border peptidases"],
  },
];
</script>

<template>
  <v-container>
    <div class="d-flex justify-end">
      <v-btn
        color="primary"
        variant="tonal"
        to="/digestion/digestive-enzymes"
      >
        Learn More
      </v-btn>
    </div>
    <v-data-table
      :items="digestiveEnzymes"
      :headers="headers"
      hide-default-footer
    >
      <template #headers="{ columns }">
        <tr>
          <template v-for="column in columns" :key="column.title">
            <th>
              <span class="text-primary font-weight-bold text-uppercase">
                {{ column.title }}
              </span>
            </th>
          </template>
        </tr>
      </template>
      <template #item.enzymes="{ value }">
        <v-list>
          <v-list-item v-for="enz in value" :key="enz">
            {{ enz }}
          </v-list-item>
        </v-list>
      </template>
    </v-data-table>
  </v-container>
</template>
