<script setup lang="ts">
const items = [
  { test: "A1C", prediabetes: "5.7-6.4%" },
  { test: "Fasting plasma glucose", prediabetes: "100-125 mg/dL" },
  { test: "2-hour OGTT (75g glucose)", prediabetes: "140-199 mg/dL" },
];
const testNotes = [
  { type: "subheader", title: "Note:" },
  { title: "- Must meet 1 or more of the above criteria" },
  { title: "- A1C reflects average glycemia over 2-3 months" },
];
</script>

<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title class="font-weight-bold">
        Identifying Prediabetes
      </v-card-title>
      <v-table striped="odd" density="compact">
        <thead>
          <tr>
            <th class="text-left">
              Test
            </th>
            <th class="text-left">
              Prediabetes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.test"
          >
            <td>{{ item.test }}</td>
            <td>{{ item.prediabetes }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-divider />
      <v-list
        lines="one"
        density="compact"
        :items="testNotes"
      />
    </v-card>
  </v-container>
</template>
