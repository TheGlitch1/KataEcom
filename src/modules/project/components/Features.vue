<template>
  <v-container fluid>
    <v-row class="bg-screen2 rounded">
      <v-col cols="12" md="12" class="mb-5">
        <v-row>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <v-btn
              v-for="[key, value] in sectionOptions.entries()"
              :key="key"
              :prepend-icon="value.icon"
              variant="elevated"
              @click="showFeatures = key"
              :color="showFeatures === key ? value.color : ''"
              class="mx-2 my-2"
              >{{ value.label }}</v-btn
            >
          </v-col>
          <v-col cols="12">
            <v-row class="px-5 mb-2">
              <v-col
                v-for="(item, index) in currentItems"
                :key="item.title"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  variant="elevated"
                  class="mx-0 my-2 border-s-lg"
                  :class="[
                    'd-flex flex-column fill-height',
                    'text-h6',
                    `border-${sectionOptions.get(showFeatures)!.color}`,
                    'elevation-3',
                    'rounded-lg'
                  ]"
                >
                  <template v-slot:prepend>
                    <v-icon
                      :color="sectionOptions.get(showFeatures)!.color"
                      :icon="item.icon ?? sectionOptions.get(showFeatures)!.contentIcon"
                    ></v-icon>
                  </template>
                  <template v-slot:title>
                    <span class="font-weight-medium">
                      {{ item.title }}
                    </span>
                  </template>
                  <v-divider></v-divider>
                  <v-card-text>
                    <ul class="pa-0 ml-4 text-justify">
                      <li v-for="point in item.points" :key="point" class="text-body-2">
                        {{ point }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { keyFeatures } from '@project/constants/KeyFeatures'
import { ref, computed } from 'vue'
import { sectionOptions } from '@project/helpers/sectionHelper'

const showFeatures = ref<string>(sectionOptions.keys().next().value)

const currentItems = computed(() => {
  return keyFeatures[showFeatures.value]
})
</script>
