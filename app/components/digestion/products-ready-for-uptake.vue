<script setup lang="ts">
const headers = [
  { title: "Macronutrient", value: "macro" },
  { title: "Products", value: "products" },
];
const digestiveEnzymes = [
  {
    macro: "Carbohydrate",
    products: ["glucose", "galactose", "fructose"],
  },
  {
    macro: "Protein",
    products: ["peptides", "amino acids"],
  },
  {
    macro: "Lipid",
    products: ["lysolecithin", "2-monoglyceride", "fatty acid", "cholesterol"],
  },
];
</script>

<template>
    <v-container>
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
      <template #item.products="{ value }">
        <v-list>
          <v-list-item v-for="prod in value" :key="prod">
            <span class="text-primary font-weight-bold">{{ prod }}</span>
          </v-list-item>
        </v-list>
      </template>
    </v-data-table>
  </v-container>
</template>