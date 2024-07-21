import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@product/types/ProductType'
import type 
    { 
        CartItem, 
        CartState 
    } from '@cart/types/CartType'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),
  getters: {
    totalItems: (state) => state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(product: ProductType) {
      const existingItem = this.items.find((item: CartItem) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId: number) {
      const index = this.items.findIndex((item: CartItem) => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
