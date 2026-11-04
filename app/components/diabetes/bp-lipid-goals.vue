<script lang="ts" setup>
const items = [
  { factor: "Blood Pressure", goal: "<130/80 mmHg if safely attainable; individualize" },
  { factor: "LDL-C", goal: "Lower based on ASCVD risk; more intensive goals for established ASCVD" },
  { factor: "Triglycerides", goal: "Address elevated levels and contributing lifestyle/medical factors" },
  { factor: "Overall Priority", goal: "Manage glycemia + BP + lipids to reduce CV risk" },
];
</script>

<template>
  <v-container>
    <v-table
      striped="odd"
      density="compact"
      class="border"
    >
      <thead class="bg-primary">
        <tr>
          <th class="text-left table-header">
            Risk Factor
          </th>
          <th class="text-right table-header">
            Clinical Goal / Priority
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>{{ item.factor }}</td>
          <td class="text-right">
            {{ item.goal }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style scoped>
.table-header {
  font-weight: 700;
  font-size: large;
}
</style>
