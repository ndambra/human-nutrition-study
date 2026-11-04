<script setup lang="ts">
import BpLipidGoals from "~/components/diabetes/bp-lipid-goals.vue";
import Diagnosis from "~/components/diabetes/diagnosis.vue";
import GestationalDiabetes from "~/components/diabetes/gestational-diabetes.vue";
import GlycemicIndex from "~/components/diabetes/glycemic-index.vue";
import Goals from "~/components/diabetes/goals.vue";
import NutritionAndPa from "~/components/diabetes/nutrition-and-pa.vue";
import PrediabetesInfo from "~/components/diabetes/prediabetes-info.vue";
import Screening from "~/components/diabetes/screening.vue";
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

<template>
  <v-container>
    <h1 class="text-center" color="primary">
      Diabetes
    </h1>
    <v-tabs
      v-model="tab"
      color="primary"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item.id"
        :text="item.label"
        :value="item.id"
      />
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        <component :is="item.component" />
      </v-window-item>
    </v-window>
    <v-divider thickness="3" class="mb-5" />

    <v-expansion-panels
      :rounded="[20, 8]"
      gap="8"
      variant="accordion"
      static
      class="my-6"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Diagnosing and Testing for Diabetes
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <Diagnosis />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Criteria for Screening
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <Screening />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Glycemic Goals for Non-Pregnant Adults
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <Goals />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Cardiovascular Risk: BP and Lipid Goals
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <BpLipidGoals />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Glycemic Index
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <GlycemicIndex />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row density="comfortable">
            <v-col
              class="d-flex justify-start"
              cols="4"
            >
              Nutritional and Physical Activity Considerations
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <NutritionAndPa />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider thickness="3" />
    <v-btn
      block
      color="secondary"
      variant="elevated"
      size="large"
      class="font-weight-bold mt-5"
      rounded="lg"
      to="/clinical/diabetes/medication"
    >
      Diabetes Medication
    </v-btn>
  </v-container>
</template>
