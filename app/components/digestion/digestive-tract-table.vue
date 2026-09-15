<script lang="ts" setup>
const accessoryOrgans = [
  {
    name: "Salivary glands",
    desc: "Release a mixture of water, mucus, and enzymes",
  },
  {
    name: "Liver",
    desc: "Produces bile, an important secretion needed for lipid digestion",
  },
  {
    name: "Gallbladder",
    desc: "Stores and releases bile, needed for lipid digestion",
  },
  {
    name: "Pancreas",
    desc: "Releases pancreatic juice that neutralizes chyme and contains enzymes needed for carbohydrate, protein, and lipid digestion",
  },
];

const giTract = [
  {
    name: "Oral cavity",
    desc: "Mechanical breakdown, moistening, and mixing of food with saliva",
  },
  {
    name: "Esophagus",
    desc: "Transports food from the pharynx to the stomach",
  },
  {
    name: "Stomach",
    desc: "Muscular contractions mix food with acid and enzymes, causing the chemical and physical breakdown of food into chyme",
  },
  {
    name: "Small Intestine",
    desc: "major site of enzamatic digestion and nutrient absorption",
  },
  {
    name: "Large Intestine",
    desc: "receives and prepares undigested food to be eliminated from the body as feces",
  },
];
</script>

<template>
  <v-container>
    <h2>Accessory Organs</h2>
    <v-table
      striped="even"
      class="mb-8"
    >
      <thead>
        <tr>
          <th class="text-left">Organ</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="organ in accessoryOrgans"
          :key="organ.name"
        >
          <td>{{ organ.name }}</td>
          <td>{{ organ.desc }}</td>
        </tr>
      </tbody>
    </v-table>

    <h2>Gastrointestinal Tract</h2>
    <v-table striped="even">
      <thead>
        <tr>
          <th class="text-left">Organ</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="organ in giTract"
          :key="organ.name"
        >
          <td>{{ organ.name }}</td>
          <td>{{ organ.desc }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style></style>
