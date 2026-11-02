<script setup lang="ts">
const criterias = [
  { title: "Adults with overweight or obesity (BMI >= 25 kg/m2) who have one or more risk factors:", factors: [
    { text: "First-degree relative with diabetes" },
    { text: "High-risk race, ethnicity, and ancestry", hover: "e.g. African American, Latino, Native American, Asian American" },
    { text: "History of Cardiovascular disease" },
    { text: "Hypertension", hover: ">= 130/80 mmHg" },
    { text: "HDL cholesterol level < 35 mg/dL and/or triglyceride level > 250 mg/dL" },
    { text: "Individuals with polycystic ovary syndrome" },
    { text: "Pysical inactivity" },
    { text: "Other clinical conditions associated with insulin resistance", hover: "e.g. severe obesity, acanthosis nigricans, metabolic dysfunction-associated steatotic liver disease" },
  ] },
  { title: "People with prediabetes (A1C >= 5.7%, IGT, or IFG) should be tested yearly" },
  { title: "People who were diagnosed with GDM should have testing at least every 1-3 years" },
  { title: "For all other people, testing should begin at age 35 years" },
  { title: "If results are normal, testing should be repeated at a minimum of 3-year intervals, with consideration of more frequent testing depending on initial results and risk status" },
  { title: "Individuals in other high risk groups should also be closely monitored", factors: [
    { text: "people with HIV, exposure to high-risk medicines, evidence of periodontal disease, history of pancreatitis" },
  ] },
];
</script>

<template>
  <v-card class="mx-3">
    <v-card-title class="font-weight-bold">
      Criteria for screening (asymptomatic adults)
    </v-card-title>
    <v-card-text>
      <v-card
        v-for="criteria in criterias"
        :key="criteria.title"
        variant="flat"
        color="primary"
        class="my-3"
      >
        <v-card-title class="border-b-md text-wrap">
          {{ criteria.title }}
        </v-card-title>
        <v-card-text class="mt-2">
          <v-card
            v-for="factor in criteria.factors"
            :key="factor.text"
            variant="text"
          >
            <v-card-text>
              - {{ factor.text }}
              <v-tooltip v-if="factor.hover" location="top">
                <template #activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-information-slab-circle-outline" />
                </template>
                <span>{{ factor.hover }}</span>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
