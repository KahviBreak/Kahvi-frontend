<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import axios from 'axios'

const cartStore = useCartStore()

// lista de produtos do carrinho
const produtos = computed(() => cartStore.items)
const total = computed(() => cartStore.totalPrice)


// ✅ Enviar carrinho para o backend
const finalizarPedido = async () => {
  try {
    if (produtos.value.length === 0) {
      alert('Seu carrinho está vazio!')
      return
    }

    // Monta o pedido
    const pedido = {
      itens: produtos.value.map(p => ({
        produto: p.id,
        quantidade: p.quantity,
        preco: p.preco
      })),
      tipo_pagamento: 1,
      valor: total.value
    }

    // Aqui não precisa pegar o token manualmente, o interceptor do axios já faz
    const response = await axios.post('/compras/', pedido)

    alert('✅ Pedido enviado com sucesso!')
    console.log('📦 Resposta do servidor:', response.data)

    // Limpa carrinho depois de finalizar
    cartStore.clearCart()
  } catch (error) {
    console.error('❌ Erro ao enviar pedido:', error.response || error)
    alert(
      error.response?.data?.detail || 'Erro ao finalizar pedido. Verifique o console.'
    )
  }
}
</script>

<template>
    <div class="container">
        <h1>FINALIZAÇÃO DO PEDIDO</h1>
        <div>
            <p>Consumo Local</p>
        </div>
        <div>
            <p>Delivery</p>
        </div>
         <h2>{{ item.nome }}</h2>
        <p>{{ item.descricao }}</p>
        <p>R$ {{ item.preco }}</p>
    </div>
</template>

<style scoped></style>