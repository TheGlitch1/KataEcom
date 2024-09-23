<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from '@/components/_layout/NavigationBar.vue'
import { useColorMode } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { onBeforeMount } from 'vue'

const themeMode = useColorMode()
const vuetifyTheme = useTheme()

onBeforeMount(() => {
  vuetifyTheme.global.name.value = themeMode.value
  console.log('themeMode', themeMode.value)
})
</script>

<template>
  <v-app>
    <NavigationBar />
    <v-container class="mt-12 bg-screen" fluid>
      <RouterView />
    </v-container>
  </v-app>
</template>
