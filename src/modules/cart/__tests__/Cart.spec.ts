import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest'
import { useCartStore } from '@cart/stores/cart'
import { mount } from '@vue/test-utils'
import Cart from '@cart/components/Cart.vue'
import { mockProducts } from '@/tests/mocks/productMocks'
import ts from 'typescript'

const MAX_PRODUCT_QUANTITY = 3
const MAX_CART_QUANTITY = 10
const product = mockProducts[0]

describe('Cart Store and Component', () => {
  let cartStore: ReturnType<typeof useCartStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    cartStore = useCartStore()
    cartStore.clearCart()
    localStorage.clear()
  })

  it('should initialize cart from localStorage', () => {
    const storedCart = [product]
    localStorage.setItem('shopping_cart', JSON.stringify(storedCart))

    cartStore.initializeCart()

    expect(cartStore.items.length).toBe(1)
    expect(cartStore.items[0].title).toBe(product.title)
  })

  it('should add products to the cart', () => {
    cartStore.addToCart(product)
    expect(cartStore.items.length).toBe(1)
    expect(cartStore.items[0].title).toBe(product.title)
  })

  it('should prevent adding more than the max product quantity', () => {
    for (let i = 0; i < MAX_PRODUCT_QUANTITY; i++) {
      cartStore.addToCart(product)
    }
    expect(cartStore.items[0].quantity).toBe(MAX_PRODUCT_QUANTITY)
    cartStore.addToCart(product)
    expect(cartStore.items[0].quantity).toBe(MAX_PRODUCT_QUANTITY)
  })

  it('should prevent exceeding max cart quantity', () => {
    let anotherProduct = mockProducts[0]
    for (let i = 0; i < MAX_CART_QUANTITY; i++) {
      anotherProduct = { ...product, id: i + 1, title: 'Another Product' }
      cartStore.addToCart(anotherProduct)
    }
    expect(cartStore.totalItems).toBe(MAX_CART_QUANTITY)

    cartStore.addToCart(anotherProduct)
    expect(cartStore.totalItems).toBe(MAX_CART_QUANTITY)
  })

  it('should remove products from the cart', () => {
    cartStore.addToCart(product)
    expect(cartStore.items.length).toBe(1)

    cartStore.removeFromCart(product.id)
    expect(cartStore.items.length).toBe(0)
  })

  it('should clear the cart', () => {
    cartStore.addToCart(product)
    expect(cartStore.items.length).toBe(1)

    cartStore.clearCart()
    expect(cartStore.items.length).toBe(0)
  })

  it('should show the clear cart confirmation modal', async () => {
    const wrapper = mount(Cart)
    const clearButton = wrapper.find('.clearCart')

    await clearButton.trigger('click')
    //@ts-ignore
    expect(wrapper.vm.clearCartDialog).toBe(true)
  })

  it('should show the checkout modal', async () => {
    const wrapper = mount(Cart)
    const checkoutButton = wrapper.find('.checkout')

    await checkoutButton.trigger('click')
    //@ts-ignore
    expect(wrapper.vm.checkoutDialog).toBe(true)
  })
})
