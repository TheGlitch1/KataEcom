import type {ProductType} from '@product/types/ProductType'

export const mockProducts: ProductType[] = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    description: "Description 1",
    category: "Category 1",
    image: "image1.jpg",
    rating: {
      rate: 4.5,
      count: 10
    }
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    description: "Description 2",
    category: "Category 2",
    image: "image2.jpg",
    rating: {
      rate: 4.0,
      count: 20
    }
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    description: "Description 3",
    category: "Category 3",
    image: "image3.jpg",
    rating: {
      rate: 3.5,
      count: 30
    }
  }
]
