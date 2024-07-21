import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type ProductType from '@product/types/ProductType'

const API_URL = {
  baseURL:  import.meta.env.VITE_VUE_APP_API_BACK
}

const axiosInstance = axios.create(API_URL)

export default class ApiProduct {
  private static endpoint = '/products'

  static async list(filter = {}): Promise<ProductType[]> {
    try {
      const response = await axiosInstance.get(this.endpoint, { params: filter })
      console.log('response', response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  static async get(id: Number): Promise<ProductType> {
    try {
      const response = await axiosInstance.get(`${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error)
      throw error
    }
  }
}
