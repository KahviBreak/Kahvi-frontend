<script setup>
import { onMounted, ref } from 'vue'
import { useCategoriaStore } from '@/stores/categorias.js'
import { useProdutoStore } from '@/stores/produtos'

const categoriaStore = useCategoriaStore()
const produtoStore = useProdutoStore()
const props = defineProps({
  categoria: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  categoriaStore.buscarCategorias()
  produtoStore.buscarProdutosPorCategoria(1, props.categoria)
})

// onMounted(() => {
// })

const categoriaSelecionada = ref('Tudo')

const selecionarCategoria = (nome) => {
  categoriaSelecionada.value = nome
  produtoStore.buscarProdutosPorCategoria(1, nome)
}

function click() {
  alert('funcionando')
}
</script>

<template>
  <div>
    <div class="container-categoria">
    <div
      v-for="categoria in categoriaStore.categorias"
      :key="categoria.id"
      :class="['categoria', { ativo: categoriaSelecionada === categoria.nome }]"
      @click="selecionarCategoria(categoria.nome)"
    >
      <h1>{{ categoria.nome.toUpperCase() }}</h1>
      <div class="linha" v-if="categoriaSelecionada === categoria.nome"></div>
    </div>
  </div>
    <div class="container-product">
      <div v-for="produto in produtoStore.produtos" :key="produto.id" class="produto">
        <button type="button" class="button" @click="click()">ADD <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(2px);">
            <g clip-path="url(#clip0_108_1090)">
              <path
                d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z"
                stroke="white" stroke-width="2" stroke-linejoin="round" />
              <path d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11" stroke="white" stroke-width="2"
                stroke-linecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_108_1090">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img :src="produto.imagem.url" alt="produto.name" />
        <h1>{{ produto.nome }}</h1>
        <p>{{ produto.descricao }}</p>
        <p>{{ `R$ ` + produto.preco }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
/* Estilo Geral */
div {
  font-family: 'Arial', sans-serif;
  color: #4a2c18;
  background-color: #fff;
}

.container-categoria {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;
  margin-top: 5%;
  width: 100%;
}

.categoria {
  text-align: center;
  cursor: pointer;
  color: #5F7B5B;
  font-size: 13px;
  position: relative;
}

.categoria h1 {
  margin: 0;
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: "Yantramanav", sans-serif;
}

.categoria .linha {
  margin-top: 4px;
  height: 2px;
  background-color: #5F7B5B;
  width: 100%;
  border-radius: 2px;
}

.categoria:hover h1 {
  color: #5F7B5B;
}

/* Container dos Produtos */
.container-product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 50px;
}

/* Estilo de cada Produto */
.produto {
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  position: relative;
  display: inline-block;
  font-family: 'Overlock', sans-serif;
  font-weight: 100;
  font-size: 24px;
}

.produto img {
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Nome do Produto */
.produto h1 {
  font-size: 1rem;
  margin: 10px 0 5px 0;
  font-weight: bold;
  color: #3e2618;
}

/* Descrição */
.produto p:nth-of-type(1) {
  font-size: 0.85rem;
  color: #7b5c48;
  min-height: 30px;
}

/* Preço */
.produto p:nth-of-type(2) {
  font-size: 0.9rem;
  font-weight: bold;
  color: #4a2c18;
  margin-top: 8px;
}

/* Responsivo */
@media (max-width: 768px) {
  .container-product {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    padding: 10px;
  }

  .produto img {
    height: 120px;
  }

  .produto h1 {
    font-size: 0.9rem;
  }

  .produto p:nth-of-type(1),
  .produto p:nth-of-type(2) {
    font-size: 0.8rem;
  }
}

.button {
  position: absolute;
  width: 25%;
  height: 10%;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  background-color: #5F7B5B;
  color: #FFFFFF;
  font-family: 'Passion One', sans-serif;
  font-size: 24px;
  font-weight: 24;
}
</style>
