<script setup lang="ts">
type FlashcardSet = {
  title: string;
  flex: number;
  link: string;
};
const customCards: FlashcardSet[] = [];
const standardCards: FlashcardSet[] = [
  { title: "Digestion", flex: 6, link: "digestion" },
  { title: "Absorption", flex: 6, link: "absorption" },
  { title: "Nutritional Assessment", flex: 6, link: "nutritional-assessment" },
  { title: "The Cell", flex: 6, link: "the-cell" },
];

function navigate(link: string) {
  const linkTo = `/study-tools/flashcards/${link}`;
  navigateTo(linkTo);
}
</script>

<template>
  <v-container>
    <h2>Custom Flashcard Sets</h2>
    <v-row>
      <v-col
        v-for="card in customCards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card variant="tonal" min-height="120">
          <v-card-title class="text-h4 font-weight-bold text-primary">
            {{ card.title }}
          </v-card-title>
          <v-card-text />
          <v-card-actions>
            <v-btn
              variant="text"
              color="secondary"
              density="compact"
            >
              Study
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          variant="outlined"
          color="primary"
          class="d-flex flex-column justify-center align-center"
          min-height="120"
        >
          <v-btn
            icon="mdi-plus"
            color="secondary"
            variant="outlined"
          />
        </v-card>
      </v-col>
    </v-row>

    <h2>Flashcard Sets</h2>
    <v-row>
      <v-col
        v-for="card in standardCards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card variant="tonal" min-height="120">
          <v-card-title class="text-h4 font-weight-bold text-primary">
            {{ card.title }}
          </v-card-title>
          <v-card-text />
          <v-card-actions>
            <v-btn
              variant="text"
              color="secondary"
              density="compact"
              @click="navigate(card.link)"
            >
              Study
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
