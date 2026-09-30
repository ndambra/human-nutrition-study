<script setup lang="ts">
import { createCssTransition } from "vuetify/util/transitions";

const FlipTransition = createCssTransition("flip");

const cards = [
  { front: "The Cell", back: "Basic unit of living life" },
  { front: "% of components in lean men", back: "Water=62%; Fat=16%; Protein=16%; Minerals=6%; Carbohydrate=<1%" },
  { front: "% of components in lean women", back: "Water=59%; Fat=22%; Protein=14%; Minerals=5%; Carbohydrate=<1%" },
  { front: "Major element of the human  body", back: "Oxygen" },
  { front: "Integumentary System", back: "Skin, hair, nails, sense receptors, oil glands" },
  { front: "Skeletal System", back: "Bones and Joints" },
  { front: "Muscular System", back: "Muscles" },
  { front: "Nervous System", back: "Brain, spinal cord, nerves" },
  { front: "Circulatory System", back: "Heart, blood vessels" },
  { front: "Lymphatic System", back: "Lympth nodes, lymph vessels, thymus, spleen, tonsils" },
  { front: "Respiratory System", back: "Nose, pharynx, larynx, trachea, bronchi, lungs" },
  { front: "Digestive System", back: "Mouth, teeth, salivary glands, tongue, pharynx, esophagus, stomach, small instestine, large instestine, rectum,  anal canal, liver, gallbladder,  pancreas" },
  { front: "Urinary System", back: "Kidneys, ureters, urinary bladder, urethra" },
  { front: "Reproductive System (male)", back: "Testes, ductus deferens, urethra, prostate, penis, scrotum" },
  { front: "Reproductive System (female)", back: "Ovaries, uterus, uterine (fallopian), tubes, vagina, vulva, breasts" },
  { front: "Eukaryote", back: "cells of multicellular organisms" },
  { front: "Mitosis", back: "cell division" },
  { front: "cell growth", back: "growth in cell size or cell populations" },
  { front: "Proliferation", back: "DNA synthesis" },
  { front: "Differentiation", back: "cells acquire specific 'type'" },
  { front: "Apoptosis", back: "programmed cell death" },
  { front: "P53", back: "almost 90%  of cancers have  P53 mutation" },
  { front: "Lysosome", back: "The organelle that serves as the digestive system in the cell" },
  { front: "Plasma Membrane", back: "Sheet-like structures composed primarily of phospholipids and protein; forming a lipid bilayer to prevent passage of water soluble components" },
  { front: "Nucleus", back: "contains the DNA of the cell" },
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
      The Cell Flashcards
    </h2>
    <FlipTransition>
      <v-card
        class="mx-auto d-flex justify-center align-center cursor-pointer"
        max-width="90%"
        min-height="300"
        @click="showFront = !showFront"
      >
        <v-card-title v-if="showFront" class="text-headline-large font-weight-black">
          {{ cards[currCard]?.front }}
        </v-card-title>
        <v-card-text v-else class="text-headline-large text-center">
          {{ cards[currCard]?.back }}
        </v-card-text>
      </v-card>
    </FlipTransition>

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
