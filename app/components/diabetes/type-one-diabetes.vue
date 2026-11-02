<script setup lang="ts">
const types = [
  // majority of diagnosis, body attacks self
  { name: "Immune mediated", desc: "Beta cells destroyed by autoimmune process" },
  { name: "Idiopathic", desc: "Cause of beta cell function loss unknown" },
];
const symptoms = [
  { name: "Hyperglycemia", desc: "High blood sugar levels", link: "https://www.ncbi.nlm.nih.gov/books/NBK430900/" },
  { name: "Polyuria", desc: "Excessive urination", link: "https://en.wikipedia.org/wiki/Polyuria" },
  { name: "Polydipsia", desc: "Excessive thirst", link: "https://en.wikipedia.org/wiki/Polydipsia" },
  { name: "Polyphagia", desc: "Excessive hunger", link: "https://en.wikipedia.org/wiki/Polyphagia" },
  { name: "Weight loss", desc: "Unintentional weight loss", link: "https://diabetes.org/health-wellness/weight-management" },
  { name: "Dehydration", desc: "Loss of too much fluid from the body", link: "https://medlineplus.gov/dehydration.html" },
  { name: "Electrolyte disturbance", desc: "Too much or not enough minerals in the body", link: "https://my.clevelandclinic.org/health/symptoms/24019-electrolyte-imbalance" },
  // Body breaks down fat stores and produces free fatty acids and ketones
  { name: "Ketoacidosis", desc: "Elevated serum and urine concentrations of ketone bodies", link: "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html" },
];
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold">
        Absolute insulin deficiency
      </v-card-title>
      <v-card-subtitle>Two forms:</v-card-subtitle>
      <v-card-text class="pt-1">
        <v-row>
          <v-col v-for="type in types" :key="type.name">
            <v-card variant="flat" color="primary">
              <v-card-title>{{ type.name }}</v-card-title>
              <v-card-text>{{ type.desc }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-4" />
        <h3>Symptoms</h3>
        <v-row>
          <v-col
            v-for="symptom in symptoms"
            :key="symptom.name"
            cols="4"
          >
            <v-card variant="flat" color="primary">
              <v-card-title>{{ symptom.name }}</v-card-title>
              <v-card-text>{{ symptom.desc }}</v-card-text>
              <v-card-actions>
                <v-btn
                  :href="symptom.link"
                  rel="noopener noreferrer"
                  target="_blank"
                  color="secondary"
                  size="small"
                  variant="flat"
                  density="comfortable"
                  rounded="lg"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-4" />
        <h3>Risk Factors</h3>
        <v-row>
          <v-col>Genetic</v-col>
          <v-col>Autoimmune</v-col>
          <v-col>Environment</v-col>
        </v-row>
        <v-divider class="mt-4" />
        <h3>Facts</h3>
        <v-row>
          <v-list density="compact">
            <v-list-item>- acute onset</v-list-item>
            <v-list-item>- 5-10% of all dm diagnoses</v-list-item>
          </v-list>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
