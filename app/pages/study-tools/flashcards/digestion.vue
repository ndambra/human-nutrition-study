<script setup lang="ts">
const cards = [
  { front: "Accessory organs", back: "Salivary glands, Liver, Gallbladder, Pancreas" },
  { front: "Gastrointestinal tract", back: "Oral cavity; Pharynx; Esophagus; Stomach; Small intestine; Large intestine" },
  { front: "Gastrointestinal tract functions", back: "Peristalsis, secretion, digestion, absorption, storage and elimination of solid waste" },
  { front: "Gastrointestinal tract layers", back: "mucosa, submuscoa, muscularis layer, adventitia (serosa)" },
  { front: "Salivary glands", back: "release a mixture of water, mucus, and enzymes" },
  { front: "Liver", back: "produces bile, an important secretion needed for lipid digestion" },
  { front: "Gallbladder", back: "stores and releases bile, needed for lipid digestion" },
  { front: "Pancreas", back: "releases pancreatic juice that neutralizes chyme and contains  enzymes needed for carbohydreate, protein, and lipid digestion" },
  { front: "Oral cavity", back: "mechanical breakdown, moistening, and mixing of food with saliva" },
  { front: "Pharynx", back: "propels  food from the back of the oral cavity into the esophagus" },
  { front: "Esophagus", back: "transports food from the pharynx  to the stomach" },
  { front: "Stomach", back: "muscular contractions mix food with acid and enzymes, causing the chemical and physical breakdown of food into chyme" },
  { front: "Small intestine", back: "major site of enzymatic digestion and nutrient absorption" },
  { front: "Large intestine", back: "receives and prepares undigested food to be eliminated from the body as feces" },
  { front: "T/F: The ingested nutrients are usually digested on microvilli and absorbed by the matured mucosal epithelium (enterocytes)", back: "True" },
  { front: "Regulatory peptides/hormones secreted by endocrine cells", back: "Gastrin, CCK, Secretin, GIP" },
  { front: "Peptic ulcer disease", back: " Ulcerations or erosions in the mucosa and submucosa layers of the stomach. Causes: Helicobacter (H.) pylori; chronic alcohol ingestion; NSAIDS" },
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
      Digestion Flashcards
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
