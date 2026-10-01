<script setup lang="ts">
const cards = [
  { title: "Flashcards", text: "Use flashcards to help you study! Use predefined sets or create your own to tailor your experience to your needs.", flex: 6, link: "/study-tools/flashcards" },
  { title: "Quizzes", text: "Use quizzes to help you study! Use predefined sets or create your own to tailor your experience to your needs.", flex: 6, link: "/study-tools/quizzes" },
];
</script>

<template>
  <v-container>
    <h1>Let's study!</h1>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card variant="tonal">
          <v-card-title class="text-h4 font-weight-bold text-primary">
            {{ card.title }}
          </v-card-title>
          <v-card-text>{{ card.text }}</v-card-text>
          <v-card-actions>
            <v-btn
              variant="text"
              color="primary"
              :to="card.link"
            >
              Get started
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
