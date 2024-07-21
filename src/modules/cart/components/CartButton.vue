<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@cart/stores/cart'

const cartStore = useCartStore()
const totalItems = computed(() => cartStore.totalItems)

const router = useRouter()
const goToCart = () => {
  router.push({ name: 'cart' })
}
</script>

<template>
  <v-btn 
    class="text-none" 
    stacked
    @click="goToCart"
  >
  
        <v-badge
        v-if="totalItems > 0"
          :content="totalItems" 
          color="primary" 
          overlap
      >
      <v-icon>mdi-cart</v-icon>
    </v-badge>
  <v-icon v-else>mdi-cart</v-icon>
  </v-btn>
</template>
