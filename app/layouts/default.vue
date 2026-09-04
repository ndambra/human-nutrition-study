<script setup lang="ts">

const drawer = ref(false);
const items = [
    {
      title: 'Digestion',
      value: 'digestion',
    },
    {
      title: 'Absorption',
      value: 'absorption',
    },
  ]
</script>

<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      </template>

      <v-app-bar-title>Human Nutrition Study</v-app-bar-title>
    </v-app-bar>
     <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
      <v-main>
          <slot />
      </v-main>
  </v-app>
</template>
