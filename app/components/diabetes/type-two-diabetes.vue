<script setup lang="ts">
const issues = [
  { title: "Insulin resistance", text: "Body needs to work overtime to produce more insulin" },
  { title: "Insulin less effective", text: "Decreased effectiveness of the insulin that is produced" },
  { title: "Progressive beta-cell dysfunction", text: "Pancreas works overtime to produce more insulin, overtime is overworked and produces less" },
  { title: "Hyperglycemia", text: "Liver continues to produce glucose" },
];

const hgOrgans = [
  { title: "Pancreas", desc: [
    { icon: "mdi-arrow-down-thin", text: "insulin secretion" },
    { icon: "mdi-arrow-up-thin", text: "glucagon" },
  ] },
  { title: "Liver", desc: [
    { icon: "mdi-arrow-up-thin", text: "glucose production" },
  ] },
  { title: "Muscle", desc: [
    { icon: "mdi-arrow-down-thin", text: "glucose uptake" },
  ] },
  { title: "Adipose tissue", desc: [
    { icon: "mdi-arrow-up-thin", text: "lipolysis" },
  ] },
  { title: "GI/incretin system", desc: [
    { icon: "", text: "impaired incretin effect" },
  ] },
  { title: "Kidneys", desc: [
    { icon: "mdi-arrow-up-thin", text: "glucose reabsorption" },
  ] },
  { title: "Brain", desc: [
    { icon: "", text: "altered appetite/metabolic regulation" },
  ] },
];
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold">
        Overview
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="issue in issues" :key="issue.title">
            <v-card
              variant="flat"
              color="primary"
              class="pa-1"
            >
              <v-card-title class="border-b-md">
                {{ issue.title }}
              </v-card-title>
              <v-card-text class="mt-1">
                {{ issue.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title class="font-weight-bold">
        Hyperglycemia
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="organ in hgOrgans"
            :key="organ.title"
            cols="auto"
          >
            <v-card
              variant="flat"
              color="primary"
              class="pa-1"
            >
              <v-card-title class="border-b-md">
                {{ organ.title }}
              </v-card-title>
              <v-card-text>
                <v-list bg-color="primary" density="compact">
                  <v-list-item
                    v-for="(item, i) in organ.desc"
                    :key="i"
                    class="pa-0"
                  >
                    <template #prepend>
                      <v-avatar v-if="item.icon" color="primary">
                        <v-icon :icon="item.icon" />
                      </v-avatar>
                    </template>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="my-4" />
        <v-row>
          <v-col>Bottom Line</v-col>
        </v-row>
        <v-row>
          <v-col>insulin resistance + progressive beta-cell dysfunction + altered regulation by multiple organs = <span class="text-primary">Hyperglycemia</span></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
