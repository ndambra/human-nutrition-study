<script setup lang="ts">
const headers = [
  { title: "Location", value: "location" },
  { title: "Enzymes/Coenzymes", value: "enzymes" },
];
const digestiveEnzymes = [
  {
    location: "Pancreas",
    enzymes: [
        {
            enzyme: "Cholesterol esterase",
            desc: "secreted into duodenum in response to CCK"
        },
        {
            enzyme: "phospholipase A2",
            desc: "secreted into duodenum in response to CCK"
        }
    ],
  },
  {
    location: "Small Instestine",
    enzymes: [
        {
            enzyme: "Cholesterol esterase",
            desc: "cleaves FA from cholesterol esters"
        },
        {
            enzyme: "phospholipase A2",
            desc: "cleaves the C2 FA from phospholipids"
        }
    ],
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
      <template #item.enzymes="{ value }">
        <v-list>
          <v-list-item v-for="enz in value" :key="enz">
            <span class="text-primary font-weight-bold">{{ enz.enzyme }}</span> - {{ enz.desc }}
          </v-list-item>
        </v-list>
      </template>
    </v-data-table>
  </v-container>
</template>