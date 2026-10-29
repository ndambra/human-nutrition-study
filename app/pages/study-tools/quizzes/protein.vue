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
    question: "",
    opts: [],
    answer: "",
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
