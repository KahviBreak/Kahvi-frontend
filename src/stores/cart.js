import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  function addCart(product, quantity = 1) {
    const existing = items.value.find((item) => item.id === product.id)
    if (existing) {
      console.log('add.. quanti')
      existing.quantity += quantity
    } else {
      console.log('novo')
      items.value.push({ ...product, quantity })
    }
  }

  function removeCart(productId) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.preco * item.quantity, 0)
  )

  return { items, addCart, removeCart, totalPrice }
})
