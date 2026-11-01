<template>
  <v-container>
    <h1 class="text-center">Diabetes</h1>
    <v-tabs v-model="tab" color="primary" grow>
      <v-tab
        v-for="item in items"
        :key="item.id"
        :text="item.label"
        :value="item.id"
      ></v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item.id" :value="item.id">
        <component :is="item.component" />
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import GestationalDiabetes from "~/components/diabetes/gestational-diabetes.vue";
import PrediabetesInfo from "~/components/diabetes/prediabetes-info.vue";
import TypeOneDiabetes from "~/components/diabetes/type-one-diabetes.vue";
import TypeTwoDiabetes from "~/components/diabetes/type-two-diabetes.vue";

const tab = ref("Prediabetes");

const items = [
  {
    id: "prediabetes",
    label: "Prediabetes",
    component: PrediabetesInfo,
  },
  { id: "type1", label: "Type 1 Diabetes", component: TypeOneDiabetes },
  { id: "type2", label: "Type 2 Diabetes", component: TypeTwoDiabetes },
  { id: "gdm", label: "Gestational Diabetes", component: GestationalDiabetes },
];
</script>
