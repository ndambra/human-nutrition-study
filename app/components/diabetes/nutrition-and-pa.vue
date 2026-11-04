<script lang="ts" setup>
const items = [
  { situation: "Insulin/secretagogue use", consideration: "Increased risk for hypoglycemia" },
  { situation: "Prolonged activity", consideration: "May require additional carbohydrate and/or medication adjustment" },
  { situation: "Exercise after insulin", consideration: "Consider insulin timing, dose, meal timing, and injection site" },
  { situation: "High-intensity exercise", consideration: "May temporarily increase glucose" },
  { situation: "Marked hyperglycemia", consideration: "Assess for ketones when appropriate; avoid vigorous activity with ketosis" },
  { situation: "After excercise", consideration: "Hypoglycemia can occur hours later, including overnight" },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Carbohydrates</v-card-title>
          <v-divider thickness="2" />
          <v-card-text>Focus on quality foods: whole grains, legumes, vegetables, whole fruits, minimally processed carbs, dietary fiber</v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Protein</v-card-title>
          <v-divider thickness="2" />
          <v-card-text>
            No specific intake; protein intake can stimulate insulin secretion; does not prevent carbohydrate absorption; emphasize quality protein intake
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Dietary Fat</v-card-title>
          <v-divider thickness="2" />
          <v-card-text>No ideal percentage of calories from fat; emphasize unsaturated fats; limit sat fats; minimize trans fats; fat can delay gastric emptying</v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Alcohol</v-card-title>
          <v-divider thickness="2" />
          <v-card-text>Can increase risk of hypoglycemia</v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Micronutrients</v-card-title>
          <v-divider thickness="2" />
          <v-card-text />
        </v-card>
      </v-col>
      <v-col
        cols="6"
      >
        <v-card
          class="fill-height"
          variant="tonal"
          elevation="4"
        >
          <v-card-title>Physical Activity</v-card-title>
          <v-divider thickness="2" />
          <v-card-text>Improves insulin sensitivity; reduces CVD risk; supports weight management; improve physical funtion and well-being; >= 150 min/week moderate-to-vigorous aerobic activity - 3+ days/week; resistance exercise 2-3 times/week</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <h3>Exercise: Glucose and Safety Considerations</h3>
      <v-table
        striped="odd"
        density="compact"
        class="border"
        gridlines="all"
      >
        <thead class="bg-primary">
          <tr>
            <th class="text-left table-header">
              Situation
            </th>
            <th class="text-left table-header">
              Clinical Consideration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in items"
            :key="i"
          >
            <td>{{ item.situation }}</td>
            <td>
              {{ item.consideration }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-row>
    <v-row>
      glucose + food + medication + type/duration of activity
    </v-row>
  </v-container>
</template>

<style scoped>
.table-header {
  font-weight: 700;
  font-size: large;
}
</style>
