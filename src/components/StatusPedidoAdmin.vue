<script setup>
import { ref, onMounted } from 'vue'
import CompraService from '@/services/pedidos'

const lista = ref([])
const compraService = new CompraService()

onMounted(async () => {
  try {
    const resposta = await compraService.obterCompras(1, 'filtro')
    // Se a resposta for um objeto com 'results', use resposta.results
    lista.value = resposta.results || resposta
  } catch (error) {
    console.error('Erro ao carregar compras:', error)
  }
})
</script>

<template>
  <div class="container">
    <h1>Pedidos</h1>
    <div class="cards">
      <div v-for="(compra, index) in lista" :key="index" class="card">
        <div v-for="item in compra.itens" :key="item.produto">
          <div class="image-container">
            <img :src="item.produto_detalhe.imagem.url" alt="Imagem do produto" />
          </div>
          <p>ID: {{ compra.id }}</p>
          <p>Item: {{ item.produto_detalhe.nome }} - Quantidade: {{ item.quantidade }}</p>
        </div>
        <!-- <p>{{ compra.itens }}</p> -->
        <p>Valor da compra: R${{ compra.valor }}</p>
        <div class="buttons">
          <button class="btn-ver">Ver pedido</button>
          <button class="btn-pronto">Pronto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f2eee9;
  min-height: 100vh;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 25px;
  color: #333;
}

/* 4 cards por linha */
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Responsividade */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

/* Card */
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

/* Imagem */
.image-container {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Tag */
.tag {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 10px;
}

.delivery {
  background-color: #d3f3c2;
  color: #2d6b2f;
}

.local {
  background-color: #c9e4f8;
  color: #205b7a;
}

/* Conteúdo */
.card-content {
  padding: 12px 16px 18px;
  font-size: 14px;
  color: #444;
  line-height: 1.5;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

/* Botões */
.btn-ver {
  background-color: #f1e1a6;
  color: #333;
  border: none;
  padding: 6px 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-ver:hover {
  background-color: #e9d98f;
}

.btn-pronto {
  background-color: #b5d6a3;
  color: #333;
  border: none;
  padding: 6px 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-pronto:hover {
  background-color: #a1c38f;
}
</style>
