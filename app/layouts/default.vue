<script setup lang="ts">
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
];
</script>

<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>

      <v-app-bar-title>Human Nutrition Study</v-app-bar-title>
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
