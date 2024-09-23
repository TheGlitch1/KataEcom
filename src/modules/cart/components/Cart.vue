<script lang="ts" setup>
import { useCartStore } from '@cart/stores/cart'
import { ref, computed } from 'vue'
import type { CartItem } from '@cart/types/CartType'

const cartStore = useCartStore()
const items = computed(() => cartStore.items)
const totalItems = computed(() => cartStore.totalItems)
const totalPrice = computed(() => cartStore.totalPrice)

const clearCartDialog = ref(false)
const checkoutDialog = ref(false)

const groupedItems = computed(() => {
  return items.value.reduce((groups: Record<string, CartItem[]>, item: CartItem) => {
    const category = item.category || 'Uncategorized'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {})
})

const removeFromCart = (id: number) => {
  cartStore.removeFromCart(id)
}

const updateQuantity = (id: number, quantity: number) => {
  cartStore.updateQuantity(id, quantity)
}

const confirmClearCart = () => {
  clearCartDialog.value = false
  clearCart()
}

const clearCart = () => {
  cartStore.clearCart()
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title> Shopping Cart </v-card-title>
          <v-card-subtitle>
            <v-row>
              <v-col cols="6" class="d-flex align-center">
                <v-icon class="mr-2" color="primary">mdi-cart-outline</v-icon>
                <div>
                  Total Items: <strong>{{ totalItems }}</strong>
                </div>
              </v-col>
              <v-col cols="6" class="d-flex align-center justify-end">
                <v-icon class="mr-2" color="primary">mdi-currency-usd</v-icon>
                <div>
                  Total Price: <strong>${{ totalPrice.toFixed(2) }}</strong>
                </div>
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <template v-for="(items, category) in groupedItems" :key="category">
                <v-alert border="start" color="menu" variant="tonal" class="my-2">
                  <p class="text-h5">{{ category }}</p>
                </v-alert>
                <v-list-item v-for="item in items" :key="item.id">
                  <template v-slot:prepend>
                    <v-img :src="item.image" width="50" height="50" contain></v-img>
                    <v-divider class="mr-2" vertical></v-divider>
                  </template>
                  <template v-slot:append>
                    <v-btn
                      icon="mdi-delete"
                      color="delete"
                      @click="removeFromCart(item.id)"
                      variant="text"
                    ></v-btn>
                  </template>
                  <v-row align="center">
                    <v-col cols="5">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model.number="item.quantity"
                        type="number"
                        min="1"
                        @change="updateQuantity(item.id, item.quantity)"
                        label="Quantity"
                        variant="underlined"
                      >
                        <template v-slot:append>
                          <v-btn color="grey-lighten-1" icon variant="text" size="small">
                            <v-icon color="grey-lighten-1">mdi-information</v-icon>
                            <v-tooltip activator="parent" location="top"
                              >Unity price: ${{ item.price }}
                            </v-tooltip>
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-list-item-subtitle
                        >${{ (item.price * item.quantity).toFixed(2) }}</v-list-item-subtitle
                      >
                    </v-col>
                    <v-col cols="1"> </v-col>
                  </v-row>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="error"
              :disabled="!items.length"
              @click="clearCartDialog = true"
              variant="tonal"
              >Clear Cart</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              color="accent"
              prepend-icon="mdi-checkbox-marked-circle-plus-outline"
              variant="tonal"
              @click="checkoutDialog = true"
              :disabled="!items.length"
              >Checkout</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="checkoutDialog" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h6">Thank you for visiting!</v-card-title>
      <v-card-text>
        We hope you enjoyed your shopping experience. Have a great day ahead!
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="checkoutDialog = false" variant="tonal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="clearCartDialog" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h6">Are you sure?</v-card-title>
      <v-card-text>
        This will remove all the items from your cart. This action is irreversible.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="clearCartDialog = false" variant="tonal">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="confirmClearCart" variant="tonal">Clear</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
