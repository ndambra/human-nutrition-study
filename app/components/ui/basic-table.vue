<script lang="ts" setup>
defineProps({
  items: Array,
});
</script>

<template>
  <v-table striped="odd" density="compact">
    <thead>
      <tr>
        <th class="text-left">
          Test
        </th>
        <th class="text-left">
          Prediabetes
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr
        v-for="item in items"
        :key="item.test"
      >
        <td>{{ item.test }}</td>
        <td>{{ item.prediabetes }}</td>
      </tr> -->
    </tbody>
  </v-table>
</template>

<style>

</style>
