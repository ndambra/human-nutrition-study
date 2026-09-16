<script setup lang="ts">
const headers = [
  { title: "Location", value: "location" },
  { title: "Enzymes/Coenzymes", value: "enzymes" },
];
const digestiveEnzymes = [
  {
    location: "Mouth",
    enzymes: [
        {
            enzyme: "none",
            desc: "no protein digestion"
        }
    ],
  },
  {
    location: "Stomach",
    enzymes: [
        { 
            enzyme: "gastrin",
            desc: "stimulates HCl and pepsinogen secretion"
        },
        { 
            enzyme: "HCl",
            desc: "activates pepsin"
        },
        { 
            enzyme: "pepsin",
            desc: "begins digesting polypeptides"
        },
    ],
  },
  {
    location: "Pancreas",
    enzymes: [
        {
            enzyme: "proteases",
            desc: "secreted into duodenum in response to CCK"
        }
    ],
  },
  {
    location: "Small Instestine (major site of digestion)",
    enzymes: [
        {
            enzyme: "Brushborder peptidases",
            desc: "cleave polypeptides to individual amino acids or small peptides"
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