import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import ApiProduct from '@product/api/ApiProduct'
import { mockProducts } from '@/tests/mocks/productMocks'

vi.mock('axios', () => {
  return {
    default: {
      get: vi.fn(),
      create: vi.fn().mockReturnThis(),
      interceptors: {
        request: {
          use: vi.fn(),
          eject: vi.fn(),
        },
        response: {
          use: vi.fn(),
          eject: vi.fn(),
        },
      },
    },
  };
});

const mockedAxiosGet = axios.get as unknown as ReturnType<typeof vi.fn>;

describe('ApiProduct', () => {
  beforeEach(() => {
    mockedAxiosGet.mockReset()
  })

  it('fetches a list of products without filters', async () => {
    mockedAxiosGet.mockResolvedValue({ data: mockProducts })

    const products = await ApiProduct.list()

    expect(products).toEqual(mockProducts)
    expect(mockedAxiosGet).toHaveBeenCalledWith('/products')
  })

  it('fetches a list of products with filters', async () => {
    const filters = [
      { key: 'category', value: 'Category 1' },
      { key: 'price', value: 100 }
    ]

    const mockResponseCategory1 = [mockProducts[0]]
    const mockResponsePrice100 = [mockProducts[0]]

    mockedAxiosGet
      .mockResolvedValueOnce({ data: mockResponseCategory1 })
      .mockResolvedValueOnce({ data: mockResponsePrice100 })

    const products = await ApiProduct.list(filters)

    expect(products).toEqual(mockResponseCategory1.concat(mockResponsePrice100))
    expect(mockedAxiosGet).toHaveBeenCalledWith('/products/category/Category 1')
    expect(mockedAxiosGet).toHaveBeenCalledWith('/products/price/100')
  })

  it('fetches a product by ID', async () => {
    const mockProduct = mockProducts[0]
    mockedAxiosGet.mockResolvedValue({ data: mockProduct })

    const product = await ApiProduct.get(1)

    expect(product).toEqual(mockProduct)
    expect(mockedAxiosGet).toHaveBeenCalledWith('/products/1')
  })

  it('handles errors when fetching products', async () => {
    const errorMessage = 'Error fetching products'
    mockedAxiosGet.mockRejectedValue(new Error(errorMessage))

    await expect(ApiProduct.list()).rejects.toThrow(errorMessage)
  })

  it('handles errors when fetching a product by ID', async () => {
    const errorMessage = `Error fetching product with ID 1`
    mockedAxiosGet.mockRejectedValue(new Error(errorMessage))

    await expect(ApiProduct.get(1)).rejects.toThrow(errorMessage)
  })
});