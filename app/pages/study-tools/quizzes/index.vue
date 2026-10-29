<script setup lang="ts">
const quizzes = [
  { title: "Protein", subtitle: "Nutrition Metabolism", link: "protein" },
];

function navigate(link: string) {
  const linkTo = `/study-tools/quizzes/${link}`;
  navigateTo(linkTo);
}
</script>

<template>
  <v-container>
    <h1>Quizzes</h1>
    <v-row>
      <v-col v-for="quiz in quizzes" :key="quiz.title">
        <v-card class="pa-1">
          <v-card-title>{{ quiz.title }}</v-card-title>
          <v-card-subtitle>{{ quiz.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              variant="elevated"
              rounded="xl"
              color="primary"
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
