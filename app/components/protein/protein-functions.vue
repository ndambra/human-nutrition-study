<script lang="ts" setup>
import AppCard from "../ui/app-card.vue";
import Hormones from "./hormones.vue";
import PlasmaProteins from "./plasma-proteins.vue";

const enzymes = [
  { title: "- most are proteins" },
  { title: "- increase rate of chemical reactions by lowering the transition energy" },
  { title: "- Highly specific" },
  { title: "- Reaction rates can be changed by 1) <strong>competitive inhibition</strong> 2) <strong>non-competitive inhibition (allosteric modulation)</strong>" },
];
const structuralProteins = [
  { title: "- Contractile proteins (actin and myosin)" },
  { title: "- Fibrous proteins (collagen, elastin, and keratin)" },
];
const collagen = [
  { title: "- major connective tissue protein" },
  { title: "- made up of <strong>tropocollagen</strong>" },
  { title: "- tropocollagen consists of 3 peptide chains that are cross-linked triple helix" },
  { title: "- consists of large amounts of glycine and proline" },
  { title: "consists of hydroxylysine and hydroxyproline (unique to collagen)" },
];
</script>

<template>
  <AppCard title="Functions">
    <AppCard title="Enzymes" variant="outlined">
      <v-list density="compact">
        <v-list-item
          v-for="(enzyme, i) in enzymes"
          :key="i"
          tag="li"
        >
          <div v-html="enzyme.title" />
        </v-list-item>
      </v-list>
    </AppCard>
    <Hormones />
    <AppCard title="Structural Proteins" variant="outlined">
      <v-list density="compact">
        <v-list-item
          v-for="(structure, i) in structuralProteins"
          :key="i"
          tag="li"
        >
          <div v-html="structure.title" />
        </v-list-item>
      </v-list>
      <AppCard title="Collagen" variant="outlined">
        <v-list density="compact">
          <v-list-item
            v-for="(info, i) in collagen"
            :key="i"
            tag="li"
          >
            <div v-html="info.title" />
          </v-list-item>
        </v-list>
      </AppCard>
    </AppCard>
    <PlasmaProteins />
  </AppCard>
</template>

<style>

</style>
