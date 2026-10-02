<script lang="ts" setup>

</script>

<template>
  <v-container fluid class="d-flex flex-column align-center ">
    <v-card class="w-75">
      <v-card-title class="text-center text-headline-medium pa-4 text-primary">
        Carbohydrates
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-expansion-panels
          :rounded="[20, 8]"
          gap="8"
          variant="accordion"
          static
          class="my-6"
        >
          <!-- Monosaccharides panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Monosaccharides
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list>
                <v-list-item lines="three" title="Glucose" />
                <v-list-item lines="three" title="Fructose" />
                <v-list-item lines="three" title="Galactose" />
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Disaccharides panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Disaccharides
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list>
                <v-list-item lines="three" title="Maltose" />
                <v-list-item lines="three" title="Sucrose" />
                <v-list-item lines="three" title="Lactose" />
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Oligosaccharides/Polysaccharides panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Oligosaccharides/Polysaccharides
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list>
                <v-list-item lines="three" title="Oligosaccharides" />
                <v-list-item lines="three" title="Polysaccharides" />
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card class="w-75 mt-3">
      <v-card-title class="text-center text-headline-medium pa-4 text-primary">
        Metabolism
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-expansion-panels
          :rounded="[20, 8]"
          gap="8"
          variant="accordion"
          static
          class="my-6"
        >
          <!-- Glycogenesis panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Glycogenesis
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Glycogenolysis panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Glycogenolysis
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Glycolysis panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Glycolysis
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Krebs cycle panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Krebs cycle
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Pentose Phosphate Pathway panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Pentose Phosphate Pathway
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Gluconeogenesis panel -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row density="comfortable">
                <v-col
                  class="d-flex justify-start"
                  cols="4"
                >
                  Gluconeogenesis
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              info here
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>

</style>
