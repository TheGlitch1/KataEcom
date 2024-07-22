<template>

    <v-row>
      <v-col cols="12" class="mb-5">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn prepend-icon="mdi-star" variant="text" @click="showFeatures = true" :color="showFeatures ? 'primary' : ''" class="mb-2">Features</v-btn>
              <v-btn prepend-icon="mdi-cogs" variant="text" @click="showFeatures = false" :color="!showFeatures ? 'secondary' : ''">Technical Choices</v-btn>
            </v-col>
            <v-col cols="12">
              <v-row class="px-5 mb-2">
                <v-col v-for="item in currentItems" :key="item.title" cols="12" sm="6" md="4">
                  <v-card variant="text" 
                  class="mx-0 my-2 border-s-lg" 
                  :class="['text-h6', showFeatures ? 'border-primary' : 'border-secondary', 'white--text']"
                  >
                  <template v-slot:prepend>
                    <v-icon :color="showFeatures ? 'primary' : 'secondary'" 
                    :icon="showFeatures ? 'mdi-book-open-variant' : 'mdi-application-brackets-outline'"></v-icon>
                  </template>
                    <template v-slot:title>
                      <span class="font-weight-medium"> 
                        {{ item.title }}
                      </span>
                    </template>
                    <v-divider></v-divider>
                    <v-card-text>
                      <ul class="pa-0 ml-4">
                        <li v-for="point in item.points" :key="point" class="text-body-2">{{ point }}</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { keyFeatures } from '@project/constants/KeyFeatures'
import { ref, computed } from 'vue'

const showFeatures = ref(true)

const currentItems = computed(() => {
  return showFeatures.value ? keyFeatures.features : keyFeatures.technicalChoices
})
</script>
