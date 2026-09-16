<script setup lang="ts">
const headers = [
  { title: "Location", value: "location" },
  { title: "Enzymes/Coenzymes/Activty", value: "enzymes" },
];
const digestiveEnzymes = [
  {
    location: "Mouth",
    enzymes: [
        {
            enzyme: "lingual lipase",
            desc: "released",
        }
    ],
  },
  {
    location: "Stomach",
    enzymes: [
        { 
            enzyme: "lingual lipase",
            desc: "minor digestion"
        },
        { 
            enzyme: "gastric lipase",
            desc: "release stimulated by gastrin; cleaves sn-3 FAs"
        },
    ],
  },
  {
    location: "Liver",
    enzymes: [
        {
            enzyme: "bile",
            desc: "produced and sent to gallbladder in response to secretin"
        }
    ]
  },
  {
    location: "Gallbladder",
    enzymes: [
        {
            enzyme: "bile",
            desc: "stimulated by CCK and released into duodenum"
        }
    ]
  },
  {
    location: "Pancreas",
    enzymes: [
        {
            enzyme: "Pancreatic lipase",
            desc: "secreted into duodenum in response to CCK"
        },
        {
            enzyme: "procolipase",
            desc: "secreted into duodenum in response to CCK"
        }
    ],
  },
  {
    location: "Small Instestine (major site of digestion)",
    enzymes: [
        {
            enzyme: "Pancreatic lipase",
            desc: "cleaves sn-1 and sn-3 FAs"
        },
        {
            enzyme: "procolipase",
            desc: "cleaved by trypsin to form colipase"
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