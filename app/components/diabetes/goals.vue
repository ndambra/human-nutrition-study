<script setup lang="ts">
const items = [
  { measure: "A1C", goal: "<7%" },
  { measure: "Premeal glucose", goal: "80-130 mg/dL" },
  { measure: "Peak postmeal glucose", goal: "<180 mg/dL" },
  { measure: "TIR: 70-180 mg/dL", goal: ">70%" },
  { measure: "TAR: >180 mg/dL", goal: "<25%" },
  { measure: "TAR: >250 mg/dL", goal: "<5%" },
  { measure: "TBR: <70 mg/dL", goal: "<4%" },
  { measure: "TBR: <54 mg/dL", goal: "<1%" },
];
</script>

<template>
  <v-container>
    <v-table
      striped="odd"
      density="compact"
      class="border"
      gridlines="all"
    >
      <thead class="bg-primary">
        <tr>
          <th class="text-left table-header">
            Measure
          </th>
          <th class="text-right table-header">
            General Goal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>{{ item.measure }}</td>
          <td class="text-right">
            {{ item.goal }}
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex justify-space-between">
      <p>TIR = Time in Range</p>
      <p>TAR = Time Above Range</p>
      <p>TBR = Time Below Range</p>
    </div>
  </v-container>
</template>

<style scoped>
.table-header {
  font-weight: 700;
  font-size: large;
}
</style>
