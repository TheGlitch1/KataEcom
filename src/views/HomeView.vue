<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Features from '@project/components/Features.vue'
import Summary from '@project/components/Summary.vue'
</script>

<template>
  <main>
    <v-card>
      <Summary />
      <v-divider></v-divider>
      <Features />
    </v-card>
  </main>
</template>
