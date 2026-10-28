<script setup lang="ts">
const cards = [
  { front: "", back: "" },
  { front: "", back: "" },
  { front: "", back: "" },
  { front: "", back: "" },
  { front: "", back: "" },

];
const currCard = ref(0);
const showFront = ref(true);
const numCards = computed(() => {
  return cards.length;
});

function prevCard() {
  if (currCard.value === 0) {
    currCard.value = 0;
  }
  else {
    currCard.value = currCard.value - 1;
    showFront.value = true;
  }
}

function nextCard() {
  if (currCard.value === numCards.value - 1) {
    currCard.value = numCards.value - 1;
  }
  else {
    currCard.value = currCard.value + 1;
    showFront.value = true;
  }
}
</script>

<template>
  <v-container>
    <h2 class="text-center">
      Protein Flashcards
    </h2>
    <v-card
      class="mx-auto pl-3 pr-3 d-flex justify-center align-center cursor-pointer flex-wrap"
      max-width="90%"
      min-height="300"
      @click="showFront = !showFront"
    >
      <div v-if="showFront" class="text-headline-large font-weight-black text-wrap">
        {{ cards[currCard]?.front }}
      </div>
      <div v-else class="text-headline-large text-center">
        {{ cards[currCard]?.back }}
      </div>
    </v-card>

    <div class="d-flex ma-1 justify-center align-center ga-3">
      <v-btn
        icon="mdi-chevron-left"
        size="small"
        @click="prevCard"
      />
      <p>{{ currCard + 1 }}/{{ numCards }}</p>
      <v-btn
        icon="mdi-chevron-right"
        size="small"
        @click="nextCard"
      />
    </div>
    <div>
      <v-btn
        to="/study-tools/flashcards"
        color="primary"
        variant="tonal"
      >
        Back to Flashcards
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.flip-enter-active {
  transition: all 0.5s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
