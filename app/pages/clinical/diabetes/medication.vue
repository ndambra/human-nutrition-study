<script lang="ts" setup>
const UP = "mdi-arrow-up-thin";
const DOWN = "mdi-arrow-down-thin";

const items = ref([
  {
    id: 1,
    medication: "Metformin",
    effect: { icon: DOWN, text: "hepatic glucose production" },
    nutrition: "GI effects; monitor vitamin B12 with long-term use",
    expanded: false,
  },
  {
    id: 2,
    medication: "Sulfonylureas",
    effect: { icon: UP, text: "insulin secretion" },
    nutrition: "Hypoglycemia; possible weight gain",
    expanded: false,
  },
  {
    id: 3,
    medication: "DPP-4 inhibitors",
    effect: { icon: "", text: "Enhance incretin activity" },
    nutrition: "Low hypoglycemia risk; weight neutral",
    expanded: false,
  },
  {
    id: 4,
    medication: "SGLT2 inhibitors",
    effect: { icon: UP, text: "urinary glucose excretion" },
    nutrition: "Hydration; genital/urinary infections; DKA awareness",
    expanded: false,
  },
  {
    id: 5,
    medication: "GLP-1 RAs / dual GIP-GLP-1 RAs",
    effect: { icon: UP, text: "glucose-dependent insulin; dec. appetite; slow gastric emptying" },
    nutrition: "GI symptoms, reduced intake, weight loss",
    info: ["Reduce appetite and energy intake", "Slow gastric emptying", "Common GI effects: nausea, vomiting, diarrhea, constipation, early satiety", "Significant weight loss may occur"],
    expanded: false,
  },
  {
    id: 6,
    medication: "Insulin",
    effect: { icon: "", text: "Replaces/supplements insulin" },
    nutrition: "Coordinate insulin with carbohydrate, activity, and glucose",
    expanded: false,
  },
]);

function toggleExpand(id: number) {
  const target = items.value.find(c => c.id === id);
  if (target) {
    target.expanded = !target.expanded;
  }
}
</script>

<template>
  <v-container>
    <h2 class="text-center text-primary">
      Diabetes Medication
    </h2>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="10"
        class="mx-auto"
      >
        <v-card rounded="lg" density="compact">
          <v-card-title class="font-weight-bold text-primary pt-4">
            {{ item.medication }}
          </v-card-title>
          <!-- Put brand names as subtitle -->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="6">
                <h4>Primary Effect</h4>
                <v-icon v-if="item.effect.icon" :icon="item.effect.icon" />{{ item.effect.text }}
              </v-col>
              <v-col cols="6">
                <h4>Key Nutrition Considerations</h4>
                {{ item.nutrition }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              :icon="item.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              size="small"
              @click="toggleExpand(item.id)"
            />
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.expanded">
              <v-divider />

              <v-card-text>
                <v-list density="compact">
                  <v-list-item v-for="(fact, i) in item.info" :key="i">
                    <v-list-item-title class="">
                      <v-icon
                        icon="mdi-circle-small"
                        size="x-large"
                        color="primary"
                      />{{ fact }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.table-header {
  font-weight: 700;
  font-size: large;
  text-align: left;
}
</style>
