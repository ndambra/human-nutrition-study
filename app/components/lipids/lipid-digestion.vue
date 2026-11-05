<script setup lang="ts">
const lipids = [
  {
    title: "Triacylglyceride",
    text: [
      "digested by lipases from mouth, stomach, and small intestine",
      "majority of digestion takes place in uppper jejunum",
      "only mono-acylglycerides aand free fatty acids are absorbed",
    ],
  },
];
</script>

<template>
  <v-card>
    <v-card-title>Digestion</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="lipid in lipids" :key="lipid.title">
          <v-card variant="outlined">
            <v-card-title>{{ lipid.title }}</v-card-title>
            <v-divider thickness="2" />
            <v-card-text>
              <v-list density="compact">
                <v-list-item v-for="(item, i) in lipid.text" :key="i">
                  - {{ item }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
