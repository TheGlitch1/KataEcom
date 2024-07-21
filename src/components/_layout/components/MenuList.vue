<script lang="ts" setup>
import { ref } from 'vue'
import { menuEntries, type MenuType } from '@/components/_layout/constants/MenuEntries'

const menus = ref<MenuType[]>(menuEntries)

const goToRoute = (route: string) => {
  // router.push(route)
}
</script>
<template>
  <v-menu v-for="menu in menus" :key="menu.title">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :to="menu.href ? menu.href : null"
        :selected-class="menu.href === '/' ? 'selected-class' : ''"
      >
        <v-icon v-if="menu.icon" class="mr-1">{{ menu.icon }}</v-icon>
        <span :title="menu.title" class="text-body-1">
          {{ menu.title }}
        </span>
      </v-btn>
    </template>
  </v-menu>
</template>
