import type { ProductType } from '@product/types/ProductType'

export interface CartItem extends ProductType {
  quantity: number
}

export interface CartState {
  items: CartItem[]
  showAlert: boolean
  alertMessage: string
}
