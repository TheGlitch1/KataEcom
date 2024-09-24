import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@product/types/ProductType'
import type { CartItem, CartState } from '@cart/types/CartType'
import useNotification from '@notifications/composables/useNotification'

const { showNotification } = useNotification()

const CART_STORAGE_KEY = 'shopping_cart'
const MAX_PRODUCT_QUANTITY = 3
const MAX_CART_QUANTITY = 10

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
      state.items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0),
    isCartFull: (state) =>
      state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0) >=
      MAX_CART_QUANTITY,
    isProductMaxed: () => (quantity: number) => quantity >= MAX_PRODUCT_QUANTITY,
    maxProductQuantity: () => MAX_PRODUCT_QUANTITY
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

    canAddToCart() {
      if (this.totalItems + 1 > MAX_CART_QUANTITY) {
        showNotification(
          `You can only have up to ${MAX_CART_QUANTITY} items in your cart`,
          'warning'
        )
        return false
      }
      return true
    },

    addToCart(product: ProductType) {
      const existingItem = this.items.find((item: CartItem) => item.id === product.id)
      if (!this.canAddToCart()) return

      if (existingItem) {
        if (existingItem.quantity < MAX_PRODUCT_QUANTITY) {
          existingItem.quantity++
        } else {
          showNotification(
            `You can only add up to ${MAX_PRODUCT_QUANTITY} of this product`,
            'warning'
          )
          return
        }
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
      if (!this.canAddToCart()) return

      if (item) {
        if (quantity <= MAX_PRODUCT_QUANTITY) {
          item.quantity = quantity
          this.saveCart()
        } else {
          showNotification(
            `You can only add up to ${MAX_PRODUCT_QUANTITY} of this product`,
            'warning'
          )
        }
      }
    },
    clearCart() {
      this.items = []
      localStorage.removeItem(CART_STORAGE_KEY)
      showNotification('Your cart has been cleared', 'success')
    }
  }
})
