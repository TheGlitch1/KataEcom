import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@product/types/ProductType'
import type { CartItem, CartState } from '@cart/types/CartType'
import useNotification from '@notifications/composables/useNotification'

const CART_STORAGE_KEY = 'shopping_cart'
const maxQuantity = 3
const { showNotification } = useNotification()

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    showAlert: false,
    alertMessage: ''
  }),
  getters: {
    totalItems: (state) =>
      state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
  },
  actions: {
    initializeCart() {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (storedCart) {
        this.items = JSON.parse(storedCart)
      }
    },

    saveCart() {
      showNotification('Cart updated successfully', 'success')
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items))
    },

    addToCart(product: ProductType) {
      const existingItem = this.items.find((item: CartItem) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    removeFromCart(productId: number) {
      const index = this.items.findIndex((item: CartItem) => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
      this.saveCart()
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item: CartItem) => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
      this.saveCart()
    },
    clearCart() {
      this.items = []
      localStorage.removeItem(CART_STORAGE_KEY)
    }
  }
})
