<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const drawer = ref(false);
const items = [
  {
    title: "Home",
    value: "home",
    link: "/",
  },
  {
    title: "Digestion",
    value: "digestion",
    link: "/digestion",
  },
  {
    title: "Absorption",
    value: "absorption",
    link: "/absorption",
  },
  {
    title: "Nutritional Assessment",
    value: "nutritional-assessment",
    link: "/nutritional-assessment",
  },
  {
    title: "Study Tools",
    value: "study-tools",
    link: "/study-tools",
  },
];

const toggleIcon = computed(() => {
  return theme.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
});

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "customLight" : "customDark";
}
</script>

<template>
  <v-app>
    <v-app-bar class="pe-3">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>

      <v-app-bar-title>Human Nutrition Study</v-app-bar-title>

      <template #append>
        <v-btn
          :icon="toggleIcon"
          variant="tonal"
          size="small"
          @click="toggleTheme"
        />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          @click="navigateTo(item.link)"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
