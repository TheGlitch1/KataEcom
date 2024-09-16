import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VBtn from 'vuetify/components/VBtn'
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest'
import { mockProducts } from '@/tests/mocks/productMocks'
import ProductList from '@product/components/ProductList.vue'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '@cart/stores/cart'



const Vuetify = createVuetify({
  components,
  directives,
});

// Mock useFilters composable
vi.mock('@product/composables/useFiltersProduct', () => ({
  default: () => ({
    loading: false,
    filteredProducts: mockProducts,
    applyFilters: vi.fn(),
  })
}))

describe('ProductList.vue', () => {
  let wrapper: ReturnType<typeof mount>;
  let cartStore: ReturnType<typeof useCartStore>;

  beforeEach(() => {
    wrapper = mount(ProductList, {
      global: {
        plugins: [Vuetify, createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          ProductFilters: true,
          VbtnCart: {
            template: '<VBtn>Add to cart</VBtn>'
          }
        }
      }
    });
    ;

    cartStore = useCartStore();
    vi.spyOn(cartStore, 'addToCart');
  })

  it('renders product list', async () => {
    expect(wrapper.find('h3').text()).toContain('Product List (3)')
    expect(wrapper.find('.text-white').text()).toContain('Product 1')
    expect(wrapper.find('.text-truncate').text()).toContain('Description 1')
  })

  it('adds product to cart', async () => {
    // await wrapper.vm.$nextTick()
    const addButton = wrapper.findComponent({ name: 'VbtnCart', ref:"addToCartButton"})
    if (addButton) {
      await addButton.trigger('click')
      expect(cartStore.addToCart).toHaveBeenCalledTimes(1)
      console.log('addToCart called with:', cartStore.addToCart)
    } else {
      throw new Error('Add to cart button not found')
    }
  })

})
