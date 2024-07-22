import type { ProductType } from '@product/types/ProductType'

export interface FilterConfig {
  key: keyof ProductType;
  label: string;
  type: any;
}

export const filterConfig: FilterConfig[] = [
  { key: 'title', label: 'Title', type: 'string' },
  { key: 'price', label: 'Price', type: 'number' },
  { key: 'description', label: 'Description', type: 'string' },
  { key: 'category', label: 'Category', type: 'array' },
  { key: 'rating.rate', label: 'Rating', type: 'number' },
  { key: 'rating.count', label: 'Review Count', type: 'number' }
]