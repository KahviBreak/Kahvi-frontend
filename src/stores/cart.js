// src/stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Adicionar produto
  function addCart(product, quantity = 1) {
    const existing = items.value.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({
        ...product,
        quantity
      })
    }
  }

  // Remover 1 produto do carrinho
  function removeCart(productId) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  // Limpar carrinho
  function clearCart() {
    items.value = []
  }

  // Total de itens no carrinho
  const totalItems = computed(() =>
    items.value.reduce((acc, item) => acc + item.quantity, 0)
  )

  // Valor total
  const totalPrice = computed(() =>
    items.value.reduce((acc, item) => acc + item.preco * item.quantity, 0)
  )

  return {
    items,
    addCart,
    removeCart,
    clearCart,
    totalItems,
    totalPrice
  }
})
