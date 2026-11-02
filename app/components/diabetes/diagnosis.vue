<script setup lang="ts">
const items = [
  { test: "A1C", criteria: ">= 6.5%" },
  { test: "Fasting plasma glucose (FPG)", criteria: ">= 126 mg/dL" },
  { test: "2-hour plasma glucose  during 75-g OGTT", criteria: ">= 200 mg/dL" },
  { test: "Random plasma glucose", criteria: ">= 200 mg/dL + classic symptoms of hyperglycemia" },
];

const typeTests = [
  { test: "C-peptide", one: "low/absent -> dec. endogenous insulin production", two: "Normal/high, especially early -> insulin resistance with preserved insulin production" },
  { test: "GAD antibodies", one: "Often positive -> supports autoimmune diabetes", two: "Usually negative" },
];

const testNotes = [
  { type: "subheader", title: "Important points:" },
  { title: "- Fasting = no caloric intake for >= 8 hours" },
  { title: "- Preferably have repeat testing" },
  { title: "- A1C not recommended for diagnosing acute onset Type 1" },
];

const cPeptide = [
  { title: "Released in equal amounts with endogenous insulin" },
  { title: "Helps assess remaining beta-cell function" },

];

const gadAntibodies = [
  { title: "Marker of beta-cell autoimmunity" },

];
</script>

<template>
  <v-card class="mx-3 mb-3">
    <!-- <v-card-title class="font-weight-bold">Type 1 and 2 Diagnosis</v-card-title> -->
    <v-card-text>
      <v-table
        striped="odd"
        density="compact"
        class="border"
      >
        <template #top>
          <h3>Type 1 and 2 Diagnosis</h3>
        </template>
        <thead class="bg-primary">
          <tr>
            <th class="text-left">
              Test
            </th>
            <th class="text-left">
              Diabetes Diagnostic Criterion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.test"
          >
            <td>{{ item.test }}</td>
            <td>{{ item.criteria }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-list
        lines="one"
        density="compact"
        :items="testNotes"
      />
      <v-divider thickness="3" class="my-4" />
      <v-table
        striped="odd"
        density="compact"
        class="border"
      >
        <template #top>
          <h3>Clarifying Diabetes Type</h3>
        </template>
        <thead class="bg-primary">
          <tr>
            <th class="text-left">
              Test
            </th>
            <th class="text-left">
              Type 1 Diabetes
            </th>
            <th class="text-left">
              Type 2 Diabetes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in typeTests"
            :key="item.test"
          >
            <td>{{ item.test }}</td>
            <td>{{ item.one }}</td>
            <td>{{ item.two }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-row>
        <v-col>
          <v-list density="compact" lines="two">
            <v-list-subheader>C-Peptide</v-list-subheader>
            <v-list-item v-for="(item, i) in cPeptide" :key="i">
              <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
        <v-divider vertical inset />
        <v-col>
          <v-list density="compact">
            <v-list-subheader>GAD Antibodies</v-list-subheader>
            <v-list-item v-for="(item, i) in gadAntibodies" :key="i">
              <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
