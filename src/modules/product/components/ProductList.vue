<script lang="ts" setup>
import { ref, computed, onBeforeMount } from 'vue'
import useProductData from '@product/composables/useProductListData'
import { useCartStore } from '@cart/stores/cart'
import type ProductType from '@product/types/ProductType'
import ProductFilters from '@product/components/ProductFilters.vue'

const { loading, productList, getData } = useProductData()

const cartStore = useCartStore()
const appliedFilters = ref<{ key: keyof ProductType; value: string | number; type: 'string' | 'number' }[]>([])
// const filteredProducts = ref([] as ProductType[])

const limitedDescription = (description: string) => {
  return description.length > 100 ? description.substring(0, 100) + '...' : description
}

onBeforeMount(async () => {
  await getData()
})

const viewProduct = (id: number) => {
  console.log('View Product', id)
}

const addToCart = (product: ProductType) => {
  cartStore.addToCart(product)
  console.log('Add to Cart', product)
}

const applyFilters = async (filters: { key: keyof ProductType; value: string | number; type: 'string' | 'number' }[]) => {
  console.log("Filters", filters);
  appliedFilters.value = filters

  const filterApiArray = [] as { key: string; value: string | number }[]
  filters.forEach(filter => {
    if (filter.key === 'category') {
      filterApiArray.push({ key: filter.key, value: filter.value.toString() });
    }
  });

    await getData(filterApiArray)
}


const filteredProducts = computed(() => {
  return productList.value.filter((product: ProductType) => {
    return appliedFilters.value.every(filter => {
      if (filter.key === 'category') return true
      const productValue = filter.key.split('.').reduce((o, i) => o[i], product)
      if (filter.type === 'number') {
        return productValue >= filter.value
      } else {
        return productValue.toString().toLowerCase().includes(filter.value.toString().toLowerCase())
      }
    })
  })
})
</script>

<template>
  <v-container>
    <v-card :loading class="pa-2" variant="text">
      <v-card-title>
        <v-row align="center">
          <v-col cols="4">
            <h3>Product List ({{ productList.length }})</h3>
          </v-col>
          <v-col cols="8" class="d-flex justify-end">
            <ProductFilters @filter="applyFilters" />
          </v-col>
        </v-row>
      </v-card-title>
      <v-row dense>
        <v-col v-if="loading" cols="12" sm="6" md="3" v-for="n in 8" :key="n">
          <v-skeleton-loader
            :loading
            height="400"
            type="image, list-item, chip,list-item-two-line, button "
          ></v-skeleton-loader>
        </v-col>
        <template v-else>
          <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="3">
            <v-card class="mx-auto my-4" max-width="400" variant="elevated">
              <v-img
                :src="product.image"
                class="bg-white align-end mb-2"
                height="200"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-white">{{ product.title }}</v-card-title>
              </v-img>
              <v-card-subtitle>
                <v-chip color="secondary" text-color="white">{{ product.category }}</v-chip>
              </v-card-subtitle>
              <v-card-subtitle class="pt-1 d-flex align-center">
                <v-rating
                  v-model="product.rating.rate"
                  color="primary"
                  size="19"
                  density="compact"
                  readonly
                  half-increments
                ></v-rating>
                <span class="text-caption ml-2 align-self-center"
                  >({{ product.rating.count }} reviews)</span
                >
              </v-card-subtitle>
              <v-divider class="mt-2"></v-divider>
              <v-card-text>
                <div class="text-truncate">{{ limitedDescription(product.description) }}</div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <VbtnCart color="primary" @click="addToCart(product)">Add to Cart</VbtnCart>
                <v-spacer></v-spacer>
                <div class="font-weight-bold">${{ product.price }}</div>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-card>
  </v-container>
</template>
