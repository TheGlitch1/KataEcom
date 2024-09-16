import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type { CategoryType } from '@/services/types/CategoryType'

const API_URL = {
  baseURL:  import.meta.env.VITE_VUE_APP_API_BACK
}

const axiosInstance = axios.create(API_URL)

export default class ApiCategory {
  private static endpoint = '/products/categories'

  static async list(): Promise<CategoryType[]> {
    try {
      const response = await axiosInstance.get(this.endpoint)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }
}
