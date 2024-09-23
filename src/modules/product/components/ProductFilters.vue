<script lang="ts" setup>
import { ref, computed, onBeforeMount, watch, defineEmits } from 'vue'
import ApiCategory from '@/services/api/ApiCategory'
import { filterConfig, type FilterConfig } from '@product/helpers/filterProductHelper'
import type { ProductType } from '@product/types/ProductType'
import type { CategoryType } from '@/services/types/CategoryType'

const availableFilters = ref<FilterConfig[]>(filterConfig)
const selectedFilter = ref<keyof ProductType | null>(null)
const filterValue = ref<string | number | null>(null)
const activeFilters = ref<
  { key: string; label: string; value: string | number; type: 'string' | 'number' }[]
>([])
const categories = ref([] as CategoryType[])
const loading = ref(false)

const emit = defineEmits(['filter'])

const selectedFilterType = computed(() => {
  const filter = filterConfig.find((f) => f.key === selectedFilter.value)
  return filter ? filter.type : 'string'
})

const selectedFilterLabel = computed(() => {
  const filter = filterConfig.find((f) => f.key === selectedFilter.value)
  return filter ? filter.label : ''
})

const addFilter = () => {
  if (selectedFilter.value && filterValue.value !== null) {
    const filter = filterConfig.find((f) => f.key === selectedFilter.value)
    if (filter) {
      activeFilters.value.push({
        key: filter.key,
        label: filter.label,
        value: filterValue.value,
        type: filter.type
      })
      filterValue.value = null
      selectedFilter.value = null
    }
  }
}

onBeforeMount(() => {
  getCategories()
})

const removeFilter = (index: number) => {
  if (index >= 0 && index < activeFilters.value.length) {
    activeFilters.value.splice(index, 1)
  }
}

const getCategories = async () => {
  loading.value = true
  try {
    categories.value = await ApiCategory.list()
  } finally {
    loading.value = false
  }
}

const ProcessedCategories = computed(() => {
  return categories.value.map((category) => {
    const isSelected = activeFilters.value.some(
      (item) =>
        typeof item.value === 'string' && typeof category === 'string' && item.value === category
    )
    return {
      label: category,
      value: category,
      props: { disabled: isSelected }
    }
  })
})

watch(
  activeFilters,
  (newFilters) => {
    emit('filter', newFilters)
  },
  { deep: true }
)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="selectedFilter"
        :items="availableFilters"
        label="Select a filter for example (category, title, etc)"
        item-title="label"
        item-value="key"
        clearable
        variant="outlined"
        density="compact"
        class="text-capitalize"
      ></v-select>
    </v-col>
  </v-row>
  <v-row v-if="selectedFilter">
    <v-col cols="12" md="6">
      <v-autocomplete
        v-if="selectedFilterType === 'array'"
        :loading
        v-model="filterValue"
        :items="ProcessedCategories"
        item-value="value"
        item-title="label"
        item-props="props"
        label="Select Category"
        variant="underlined"
        density="compact"
        class="text-capitalize"
      />
      <v-text-field
        v-else-if="selectedFilterType === 'number'"
        v-model.number="filterValue"
        :label="selectedFilterLabel"
        type="number"
        clearable
        variant="underlined"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-else
        v-model="filterValue"
        :label="selectedFilterLabel"
        clearable
        variant="underlined"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-btn icon="mdi-plus" variant="tonal" color="secondary" size="small" @click="addFilter">
      </v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-chip-group v-model="activeFilters" column>
        <v-chip
          class="text-accent text-capitalize"
          v-for="(filter, index) in activeFilters"
          :key="index"
        >
          <template #close>
            <v-icon icon="mdi-close-circle" @click="removeFilter(index)" />
          </template>
          {{ filter.label }}: {{ filter.value }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>
