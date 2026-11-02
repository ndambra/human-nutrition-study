<template>
  <v-container>
    <v-row>
      <h2 class="mx-auto">
        The Science of Nutrition
      </h2>
    </v-row>
    <v-card class="pa-2">
      <v-card-text>
        A simple site to learn and study about the science behind human
        nutrition, as well as other concepts learned while studying for a
        Dietetics degree.
      </v-card-text>
      <v-row class="my-4 mx-2">
        <v-col>
          <v-btn
            variant="elevated"
            color="primary"
            to="/study-tools"
          >
            Study Tools
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            variant="elevated"
            color="primary"
            to="/metabolism"
          >
            Nutrient Metabolism
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            variant="elevated"
            color="primary"
            to="nutritional-assessment"
          >
            Nutritional Assessment
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
