import { ref } from 'vue'
import ApiProduct from '@product/api/ApiProduct'
import type ProductType from '@product/types/ProductType'

export default function useProductData() {
  const productList = ref([] as ProductType[])
  const loading = ref<boolean>(false)

  const getData = async (filters: { key: string; value: string | number }[] = []) => {
    loading.value = true
    try {
      productList.value = await ApiProduct.list(filters)
    } finally {
      loading.value = false
    }
  }

  return { loading, productList, getData }
}
