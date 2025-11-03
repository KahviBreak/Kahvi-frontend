<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()


const produtos = computed(() => cartStore.items)
const total = computed(() => cartStore.totalPrice)


const tipoEntrega = ref('local') 
const tipoPagamento = ref('pix') 
const endereco = ref('')


const finalizarPedido = async () => {
  try {
    if (produtos.value.length === 0) {
      alert('Seu carrinho está vazio!')
      return
    }

    // Validação se for delivery
    if (tipoEntrega.value === 'delivery' && !endereco.value) {
      alert('Por favor, informe o endereço de entrega.')
      return
    }


    const pedido = {
      itens: produtos.value.map(p => ({
        produto: p.id,
        quantidade: p.quantity,
        preco: p.preco
      })),
      tipo_pagamento: tipoPagamento.value,
      tipo_entrega: tipoEntrega.value,
      valor: total.value,
      endereco: tipoEntrega.value === 'delivery' ? endereco.value : null
    }

    const response = await axios.post('/compras/', pedido)

    alert('✅ Pedido enviado com sucesso!')
    console.log('📦 Resposta do servidor:', response.data)

    cartStore.clearCart()
    router.push('/pedido-concluido') // redireciona para tela de sucesso
  } catch (error) {
  console.error('❌ Erro ao enviar pedido completo:', error)

  if (error.response) {
    console.log('📦 Dados da resposta:', error.response.data)
    console.log('🔢 Status:', error.response.status)
    alert('Erro: ' + JSON.stringify(error.response.data))
  } else {
    console.log('⚠️ Sem resposta do servidor, erro de rede.')
    alert('Erro de rede ou servidor indisponível.')
  }
}
}
</script>

<template>
  <div class="finalizacao">
    <h1>Finalização do Pedido</h1>

    <section class="itens">
      <h2>Resumo dos Produtos</h2>
      <div v-for="item in produtos" :key="item.id" class="produto">
        <img :src="item.imagem" alt="" class="img" />
        <div>
          <h3>{{ item.nome }}</h3>
          <p>{{ item.descricao }}</p>
          <p><strong>Qtd:</strong> {{ item.quantity }}</p>
          <p><strong>R$ {{ item.preco }}</strong></p>
        </div>
      </div>
      <div class="total">
        <span>Total:</span>
        <strong>R$ {{ total }}</strong>
      </div>
    </section>

    <section class="entrega">
      <h2>Tipo de Entrega</h2>
      <label>
        <input type="radio" value="local" v-model="tipoEntrega" />
        Consumo local
      </label>
      <label>
        <input type="radio" value="delivery" v-model="tipoEntrega" />
        Delivery
      </label>

      <div v-if="tipoEntrega === 'delivery'" class="campo-endereco">
        <label>Endereço de entrega:</label>
        <input
          v-model="endereco"
          type="text"
          placeholder="Rua, número, bairro..."
        />
      </div>
    </section>

    <section class="pagamento">
      <h2>Forma de Pagamento</h2>
      <div>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="1" />
    Cartão de Crédito
  </label>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="2" />
    Cartão de Débito
  </label>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="3" />
    Boleto
  </label>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="4" />
    Pix
  </label>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="5" />
    Dinheiro
  </label>
  <label>
    <input type="radio" v-model="tipoPagamento" :value="6" />
    Transferência Bancária
  </label>
</div>
    </section>

    <button class="btn-finalizar" @click="finalizarPedido">
      Finalizar Pedido
    </button>
  </div>
</template>

<style scoped>
.finalizacao {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background: #f1ede8;
  border-radius: 8px;
  font-family: 'Overpass';
}

h1 {
  text-align: center;
  color: #402b19;
  margin-bottom: 20px;
}

.itens {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.produto {
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.produto:last-child {
  border-bottom: none;
}

.img {
  width: 70px;
  height: 70px;
  border-radius: 6px;
  object-fit: cover;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
}

.entrega, .pagamento {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 8px 0;
  font-size: 16px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.btn-finalizar {
  width: 100%;
  background: #4e6b4e;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
}
</style>
