<template>
  <v-row class="px-10 py-5">
    <v-card variant="text">
      <h2 class="">Summary</h2>
      <v-card-text>
        <v-row justify="space-between">
          <v-col>
            <p class="pa-2 ma-2">
              This project showcases a scalable and maintainable approach to building a complex frontend application using
              Vue 3, Vuetify, and TypeScript. The modular structure, dynamic filtering system, and reusable composables
              demonstrate best practices for developing robust and flexible applications.
              <br />
              This project exemplifies problem-solving and optimal design choices, making it a strong foundation for any
              large-scale frontend application.
            </p>
            
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <p class="pa-2 ma-2">
              Key highlights include:
            <ul class="ml-5">
              <li>Modular architecture for maintainability and scalability.</li>
              <li>Dynamic filtering system with composables for reusable logic.</li>
              <li>Vuetify integration for consistent UI design and theming.</li>
              <li>ypeScript for type safety and improved code quality.</li>
              <li>Alias configuration for simplified imports and code organization.</li>
            </ul>
                </p>
            </v-col>
        </v-row>
        <strong>I look forward to discussing how these principles and techniques can contribute to your team’s success.</strong>
      </v-card-text>
      <v-card-actions>
              <v-spacer></v-spacer>
              <template v-for="link in links">
              <v-btn
                class="mx-4"
                variant="tonal"
                color="plink"
                :prepend-icon="link.icon"
                size="small"
                :href="link.url" 
                target="_blank"
              >
              {{ link.title }}
            </v-btn>
              <v-divider vertical></v-divider>
            </template>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script lang="ts" setup>
import {links} from '@project/constants/links'
</script>