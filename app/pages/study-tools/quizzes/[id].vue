<script setup lang="ts">
const route = useRoute();

const currQuestion = ref(0);
const selectOpt = ref("");

const id = computed(() => {
  const param = route.params.id;
  return Array.isArray(param) ? param[0] : param;
});
const questions = computed(() => id.value ? getQuestions(id.value) : []);
const currCard = computed(() => questions.value[currQuestion.value]);
const numQuestions = computed(() => questions.value.length);

function getBtnColor(opt: string) {
  if (!selectOpt.value || selectOpt.value === "")
    return "surface-lighten";

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
  }
  else {
    currQuestion.value = currQuestion.value - 1;
    selectOpt.value = "";
  }
}

function nextQuestion() {
  if (currQuestion.value === numQuestions.value - 1) {
    currQuestion.value = numQuestions.value - 1;
  }
  else {
    currQuestion.value = currQuestion.value + 1;
    selectOpt.value = "";
  }
}
</script>

<template>
  <v-container>
    <!-- TODO: Add go back to Quizzes page button -->
    <h2 class="text-center">
      {{ id }} Quiz
    </h2>
    <v-card class="pa-4">
      <v-card-subtitle>
        Question {{ currQuestion + 1 }} of {{ numQuestions }}
      </v-card-subtitle>
      <v-card-title class="wrap-title">
        {{ currCard?.question }}
      </v-card-title>
      <v-card-actions class="mt-5">
        <v-row>
          <v-col
            v-for="opt in currCard?.opts"
            :key="opt"
            cols="6"
          >
            <v-btn
              class="text-wrap py-3"
              block
              variant="tonal"
              :color="getBtnColor(opt)"
              size="large"
              height="auto"
              @click="checkAnswer(opt)"
            >
              {{ opt }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <div class="d-flex justify-space-between mt-3">
      <v-btn
        variant="tonal"
        color="secondary"
        @click="prevQuestion()"
      >
        Previous
      </v-btn>
      <v-btn color="secondary" @click="nextQuestion()">
        Next
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.wrap-title {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
.text-wrap :deep(.v-btn__content) {
  white-space: normal;
}
</style>
