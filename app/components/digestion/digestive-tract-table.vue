<script lang="ts" setup>
const aoCards = [
  {
    name: "Salivary glands",
    desc: "Release a mixture of water, mucus, and enzymes.",
  },
  {
    name: "Liver",
    desc: "Produces bile, an important secretion needed for lipid digestion.",
  },
  {
    name: "Gallbladder",
    desc: "Stores and releases bile, needed for lipid digestion.",
  },
  {
    name: "Pancreas",
    desc: "Releases pancreatic juice that neutralizes chyme and contains enzymes needed for carbohydrate, protein, and lipid digestion.",
  },
];

const giTractCards = [
  {
    name: "Oral cavity",
    desc: "Mechanical breakdown, moistening, and mixing of food with saliva.",
  },
  {
    name: "Pharynx",
    desc: "Propels food from the back of the oral cavity into the esophagus.",
  },
  {
    name: "Esophagus",
    desc: "Transports food from the pharynx to the stomach.",
  },
  {
    name: "Stomach",
    desc: "Muscular contractions mix food with acid and enzymes, causing the chemical and physical breakdown of food into chyme.",
  },
  {
    name: "Small Intestine",
    desc: "Major site of enzamatic digestion and nutrient absorption.",
  },
  {
    name: "Large Intestine",
    desc: "Receives and prepares undigested food to be eliminated from the body as feces.",
  },
];
</script>

<template>
  <v-container>
    <h2>Accessory Organs</h2>
    <v-row>
      <v-col
        v-for="card in aoCards"
        :key="card.name"
        cols="4"
      >
        <v-card variant="tonal" class="fill-height">
          <v-card-title class="text-primary">
            {{ card.name }}
          </v-card-title>
          <v-card-text>{{ card.desc }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="mt-10">
      Gastrointestinal Tract
    </h2>
    <v-row>
      <v-col
        v-for="card in giTractCards"
        :key="card.name"
        cols="4"
      >
        <v-card variant="tonal" class="fill-height">
          <v-card-title class="text-primary">
            {{ card.name }}
          </v-card-title>
          <v-card-text>{{ card.desc }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-data-table
      :items="accessoryOrgans"
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
    </v-data-table>

    <h2>Gastrointestinal Tract</h2>
    <v-data-table
      :items="giTract"
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
    </v-data-table> -->
  </v-container>
</template>
