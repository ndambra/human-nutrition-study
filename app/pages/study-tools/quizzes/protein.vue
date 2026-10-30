<script setup lang="ts">
const questions = [
  {
    question:
      "About _____ of the dry weight of a typical human cell is protein.",
    opts: ["one-tenth", "one-fifth", "one-third", "one-half"],
    answer: "one-half",
  },
  {
    question: "Enzymes",
    opts: [
      "decrease the free energy change of a reaction",
      "increase the activation energy of a reaction",
      "decrease transition energy",
      "increase the equilibrium constant of a reaction",
      "None of the above",
    ],
    answer: "decrease transition energy",
  },
  {
    question: "Which of the following statements concerning collagen is not true?",
    opts: [
      "Collagen is a major connective tissue protein",
      "Collagen is made up of tropocollagen",
      "Tropocollagen consists of three peptide chains that are cross-linked  triple helix",
      "Collagen has a large amount of glycine and proline",
      "Collagen contains unique hydroxyglycine and hydroxyproline"
    ],
    answer: "Collagen contains unique hydroxyglycine and hydroxyproline",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Nonspecific transport protein for fatty acids",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "Albumin",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Inhibitor of elastase to protect against smoke-induced obstructive lung disease",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "alpha1-globulins",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Antibodies",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "gamma-globulins",
  },
  {
    question: "For the following function, select the most closely related plasma proteins: Major transport protein for copper",
    opts: ["Albumin", "alpha1-globulins", "alpha2-globulins", "beta-globulins", "gamma-globulins"],
    answer: "alpha2-globulins",
  },
  {
    question: "A deficiency in which of the following amino acids will result in Kwashiorkor, even though the diet may contain a large amount of protein.",
    opts: ["Serine", "Glutamate", "Tryptophan", "Alanine", "Asparagine"],
    answer: "Tryptophan",
  },
  {
    question: "Which of the following immunity functions is associated with a significant uptake of intact protein occurred in small intestine?",
    opts: [
      "Passive immunity during infancy",
      "IgG protects against infectionn in uteri during neonatal period",
      "IgA secrets in milk",
      "IgM responds first to a new antigen",
      "IgE is responsible for allergy"
    ],
    answer: "IgE is responsible for allergy",
  },
  {
    question: "A patient  came to the emergency room complaining of severe abdominal pain. Laboratory analysis revealed high concentrations of dibasic amino acids in the urine. The patient's pain subsided a few hours later after he passed a kidney stone. The most likely diagnosis for this patient is:",
    opts: [
      "Hartnup", "Cystinuria", "Kwashiorkor", "Hyperammonemia", "Scurvy"
    ],
    answer: "Cystinuria",
  },
  {
    question: "What percent of the circulating amino acids is contributed to protein synthesis?",
    opts: ["9", "10-25", "30-40", "45-55", "75"],
    answer: "75",
  },
  {
    question: "",
    opts: [],
    answer: "",
  },
];
const currQuestion = ref(0);
const selectOpt = ref("");

const currCard = computed(() => questions[currQuestion.value]);
const numQuestions = computed(() => questions.length);
function getBtnColor(opt: string) {
  if (!selectOpt.value || selectOpt.value === "") return "surface-lighten";

  if (selectOpt.value === opt) {
    return opt === currCard.value?.answer ? "success" : "error";
  }
  return "surface-lighten";
}

function checkAnswer(userPick: string) {
  selectOpt.value = userPick;
}

function prevQuestion() {
  if (currQuestion.value === 0) {
    currQuestion.value = 0;
  } else {
    currQuestion.value = currQuestion.value - 1;
  }
}

function nextQuestion() {
  if (currQuestion.value === numQuestions.value - 1) {
    currQuestion.value = numQuestions.value - 1;
  } else {
    currQuestion.value = currQuestion.value + 1;
  }
}
</script>

<template>
  <v-container>
    <h2 class="text-center">Protein Quiz</h2>
    <v-card class="pa-4">
      <v-card-subtitle
        >Question {{ currQuestion + 1 }} of {{ numQuestions }}</v-card-subtitle
      >
      <v-card-title class="wrap-title">{{ currCard?.question }}</v-card-title>
      <v-card-actions class="mt-5">
        <v-row>
          <v-col cols="6" v-for="opt in currCard?.opts" :key="opt">
            <v-btn
              class="text-wrap py-3"
              block
              variant="tonal"
              :color="getBtnColor(opt)"
              size="large"
              height="auto"
              @click="checkAnswer(opt)"
              >{{ opt }}</v-btn
            >
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <div class="d-flex justify-space-between mt-3">
      <v-btn variant="tonal" color="primary" @click="prevQuestion()"
        >Previous</v-btn
      >
      <v-btn color="primary" @click="nextQuestion()">Next</v-btn>
    </div>
  </v-container>
</template>
<style scoped>
.wrap-title {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
</style>
