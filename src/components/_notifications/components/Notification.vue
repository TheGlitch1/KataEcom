<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useNotification from '@notifications/composables/useNotification'

const { isVisible, message, type, hideNotification } = useNotification()

onMounted(() => {
  console.log('Notification component mounted.')
})
</script>
<template>
  <v-slide-x-reverse-transition>
    <v-alert
      v-if="isVisible"
      variant="elevated"
      transition="scale-transition"
      border="start"
      :border-color="type"
      class="mb-4 notification-alert"
      dismissible
      @dismiss="hideNotification"
      closable
    >
      <v-alert-title class="text-xs">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}!
      </v-alert-title>
      <v-alert-text>{{ message }}</v-alert-text>
    </v-alert>
  </v-slide-x-reverse-transition>
</template>
<style scoped>
.notification-alert {
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  max-height: 100px;
}
</style>
