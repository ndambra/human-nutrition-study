<script lang="ts" setup>
import AppCard from "../ui/app-card.vue";

const hormones = [
  { title: "Steroids (androgens, estrogens, etc)" },
  { title: "Proteinss (insulin, growth hormone, etc)" },
  { title: "Amino acids (thyroid, etc)" },
];
const growthHormone = [
  { title: "- synthesized and secreted by somatotrophs in the anterior pituitary" },
  { title: "- secretion decreases with age" },
];
const thyroidHormones = [
  { title: "- Tyrosine; Thyroxine (T4); Triiodothyronine (T3)" },
];
</script>

<template>
  <AppCard
    title="Hormones"
    variant="outlined"
    subtitle="chemical messengers that synthesized and secreted by endocrine glands and transported in the blood to target tissue"
  >
    <v-list>
      <v-list-item v-for="(hormone, i) in hormones" :key="i">
        - {{ hormone.title }}
      </v-list-item>
    </v-list>
    <v-row class="mb-4">
      <v-col>
        <AppCard title="Growth Hormone" variant="outlined">
          <v-list density="compact">
            <v-list-item
              v-for="(info, i) in growthHormone"
              :key="i"
              tag="li"
            >
              <div v-html="info.title" />
            </v-list-item>
          </v-list>
        </AppCard>
      </v-col>
      <v-col>
        <AppCard title="Thyroid Hormones" variant="outlined">
          <v-list density="compact">
            <v-list-item
              v-for="(info, i) in thyroidHormones"
              :key="i"
              tag="li"
            >
              <div v-html="info.title" />
            </v-list-item>
          </v-list>
        </AppCard>
      </v-col>
    </v-row>
  </AppCard>
</template>

<style>

</style>
