<script lang="ts" setup>
const digestiveEnzymes = [
  {
    location: "Mouth",
    enzymes: "Salivary amylase; Lingual lipase",
  },
];
</script>

<template>
  <v-container>
    <v-table
      striped="even"
      class="mb-8"
    >
      <thead>
        <tr>
          <th class="text-left">Location</th>
          <th class="text-left">Enzyme/Coenzyme</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="enzyme in digestiveEnzymes"
          :key="enzyme.location"
        >
          <td>{{ enzyme.location }}</td>
          <td>{{ enzyme.enzymes }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style>

</style>
