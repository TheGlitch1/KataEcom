import { ref, computed } from 'vue'
import type ProductType from '@/types/ProductType'
import useProductData from '@product/composables/useProductListData'

const appliedFilters = ref<{ key: keyof ProductType; value: string | number; type: 'string' | 'number' }[]>([])

export default function useFilters() {
  const { loading ,productList, getData } = useProductData()

  const applyFilters = async (filters: { key: keyof ProductType; value: string | number; type: 'string' | 'number' }[] = []) => {
    appliedFilters.value = filters

    const filterArray = filters
      .filter(filter => filter.key === 'category')
      .map(filter => ({ key: filter.key, value: filter.value.toString() }))

      await getData(filterArray)
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

  return {
    loading,
    appliedFilters,
    applyFilters,
    filteredProducts
  }
}
