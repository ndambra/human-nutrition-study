<script setup lang="ts">
const quizzes = [
  { title: "Protein", subtitle: "Nutrition Metabolism", link: "protein" },
  { title: "Lipids", subtitle: "Nutrition Metabolism", link: "lipids" },
];

function navigate(link: string) {
  const linkTo = `/study-tools/quizzes/${link}`;
  navigateTo(linkTo);
}
</script>

<template>
  <v-container>
    <v-row class="justify-space-between align-center">
      <h1>Quizzes</h1>

      <v-btn
        prepend-icon="mdi-chevron-left"
        variant="outlined"
        color="secondary"
        to="/study-tools"
      >
        Back to Study Tools
      </v-btn>
    </v-row>
    <v-row>
      <v-col v-for="quiz in quizzes" :key="quiz.title">
        <v-card class="pa-1">
          <v-card-title>{{ quiz.title }}</v-card-title>
          <v-card-subtitle>{{ quiz.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              variant="elevated"
              rounded="xl"
              color="secondary"
              @click="navigate(quiz.link)"
            >
              Study
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
