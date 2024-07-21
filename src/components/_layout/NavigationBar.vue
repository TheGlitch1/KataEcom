<script lang="ts" setup>
import { computed, ref } from 'vue'
// import KataEcomLogo from '@/assets/kataecomLogo.svg'

import ToggleTheme from '@/components/_layout/ToggleTheme.vue'
import MenuList from '@/components/_layout/components/MenuList.vue'
import CartButton from '@cart/components/CartButton.vue'

const appTitle = ref(import.meta.env.VITE_VUE_APP_DOCUMENT_TITLE)
const userInitials = ref('YN')
</script>
<template>
  <v-app-bar color="black" density="compact" flat>
    <template v-slot:prepend>
      <!-- <v-img
        :src="KataEcomLogo"
        alt="Kata Ecom Logo"
        class="shrink ml-2 mr-4 pointer"
        contain
        transition="scale-transition"
        width="35"
      /> -->
      <span class="pointer text-h5 mr-4 d-none d-md-flex">{{ appTitle }}</span>
      <span class="pointer text-h5 mr-4 d-flex d-md-none d-lg-none d-xl-none">
        {{ appTitle }}
      </span>
    </template>

    <v-toolbar-items>
      <MenuList />
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <CartButton></CartButton>
    <v-menu :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ props }">
        <v-btn class="mr-6" icon v-bind="props" variant="text">
          <v-badge color="success" dot offset-y="5">
            <v-avatar color="grey-darken-2">
              <span class="text-subtitle-1">{{ userInitials }}</span>
            </v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-title> Yassine NAT </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-actions>
          <ToggleTheme ref="toggleTheme" class="ml-4" />
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
<style scoped>
.v-btn--active {
  border-bottom: 3px solid #ff7900;
  padding-top: 2px;
}
</style>
