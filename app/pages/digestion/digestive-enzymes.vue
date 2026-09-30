<script setup lang="ts">
const headers = [
  { title: "Hormone/Enzyme", key: "enzyme" },
  { title: "Main Production Sites", key: "sites" },
  { title: "Selected Functions", key: "functions" },
];
const enzymes = [
    {enzyme: "Gastrin", sites: ["Stomach", "Small intestine"], functions: ["Stimulates gastric acid secretion", "Stimulates pepsinogen secretion"], details:  {info: "more info"}}
];
</script>

<template>
  <v-container>
    <h1>Digestive Enzymes</h1>
    <v-data-table
      :headers="headers"
      :items="enzymes"
      expand-strategy="single"
      item-value="enzyme"
      hide-default-footer
        show-expand
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
      <template #item.sites="{ value }">
        <v-list>
          <v-list-item v-for="site in value" :key="site">
            - {{ site }}
          </v-list-item>
        </v-list>
      </template>
      <template #item.functions="{ value }">
        <v-list>
          <v-list-item v-for="func in value" :key="func">
            - {{ func }}
          </v-list-item>
        </v-list>
      </template>
      
      <template v-slot:expanded="{ item }">
        <v-sheet class="ma-2" rounded="lg" border>
            {{ item.details.info }}
        </v-sheet>
      </template>
    </v-data-table>
  </v-container>
</template>
