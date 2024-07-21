<script lang="ts" setup>
import { ref, computed, onBeforeMount } from 'vue'
import useProductData from '@product/composables/useProductListData'

const { loading, productList, getData } = useProductData()
const currency = ref<string>('USD')

onBeforeMount(async () => {
  await getData()
})

const viewProduct = (id: number) => {
  console.log('View Product', id)
}

const addToCart = (product: any) => {
  console.log('Add to Cart', product)
}
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Product List</v-card-title>
    </v-card>
    <v-row>
      <v-col v-for="product in productList" :key="product.id" cols="12" sm="6" md="3">
        <v-card class="mx-auto my-4" max-width="400">
    <v-img :src="product.image" class="bg-white align-end" height="200">
    </v-img>
    <v-card-title>{{ product.title }}</v-card-title>
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
      <span class="text-caption ml-2 align-self-center">({{ product.rating.count }} reviews)</span>
    </v-card-subtitle>
    <v-divider class="mt-2"></v-divider>
    <v-card-text>
      <div class="product-description">{{ product.description }}</div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
      <v-spacer></v-spacer>
      <div class="price">${{ product.price }}</div>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
