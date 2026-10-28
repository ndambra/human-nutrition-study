<script lang="ts" setup>
const mouthEnzymes = [
  { name: "Salivary amylase", desc: "" },
  { name: "Lingual lipase", desc: "" },
];
const stomachEnzymes = [
  { name: "Pepsin", desc: "" },
  { name: "Gastric lipase", desc: "" },
];
const siEnzymes = [
  { name: "Pancreatic alpha-amylase", desc: "" },
  { name: "Brush border disaccharidases", desc: "" },
  { name: "Pancreatic Lipase", desc: "" },
  { name: "Colipase", desc: "" },
  { name: "Phospholipase-A2", desc: "" },
  { name: "Cholesterol esterase", desc: "" },
  { name: "Proteases", desc: "" },
  { name: "Brush Border peptidases", desc: "" },
];

const colsWidth = 6;
</script>

<template>
  <v-container>
    <h2>Mouth</h2>
    <v-row>
      <v-col
        v-for="card in mouthEnzymes"
        :key="card.name"
        :cols="colsWidth"
      >
        <v-card variant="tonal" class="fill-height">
          <v-card-title class="text-primary wrap-title">
            {{ card.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <h2>Stomach</h2>
    <v-row>
      <v-col
        v-for="card in stomachEnzymes"
        :key="card.name"
        :cols="colsWidth"
      >
        <v-card variant="tonal" class="fill-height">
          <v-card-title class="text-primary wrap-title">
            {{ card.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <h2>Small Intestines</h2>
    <v-row>
      <v-col
        v-for="card in siEnzymes"
        :key="card.name"
        :cols="colsWidth"
      >
        <v-card variant="tonal" class="fill-height">
          <v-card-title class="text-primary wrap-title">
            {{ card.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div class="d-flex justify-end">
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
    </v-data-table> -->
  </v-container>
</template>

<style scoped>
.wrap-title {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
</style>
