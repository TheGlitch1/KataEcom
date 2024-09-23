<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from '@/components/_layout/NavigationBar.vue'
import { useColorMode } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { onMounted, onBeforeMount } from 'vue'
import { useCartStore } from '@cart/stores/cart'
import Notification from '@notifications/components/Notification.vue'

const themeMode = useColorMode()
const vuetifyTheme = useTheme()
const cartStore = useCartStore()

onBeforeMount(() => {
  vuetifyTheme.global.name.value = themeMode.value
  console.log('themeMode', themeMode.value)
})

onMounted(() => {
  cartStore.initializeCart()
})
</script>

<template>
  <v-app>
    <NavigationBar />
    <v-container class="mt-12 bg-screen" fluid>
      <RouterView />
    </v-container>
    <Notification />
  </v-app>
</template>
