<script setup>
import { onMounted, ref } from 'vue'
import { useCategoriaStore } from '@/stores/categorias.js'
import { useProdutoStore } from '@/stores/produtos'

const categoriaStore = useCategoriaStore()
const produtoStore = useProdutoStore()

const categoria = ref()
const produto = ref()

onMounted(() => {
  categoria.value = categoriaStore
})

onMounted(() => {
  produto.value = produtoStore
})
</script>

<template>
  <div>
    <div class="container-categoria">
    <div v-for="categoria in categoriaStore.categorias" :key="categoria.id" class="categoria">
      <h1>{{ categoria.nome }}</h1>
    </div>
    </div>
    <div class="container-product">
      <div v-for="produto in produtoStore.produtos" :key="produto.id" class="produto">
        <img :src="produto.img" alt="produto.name" />
        <h1>{{ produto.nome }}</h1>
        <p>{{ produto.descricao }}</p>
        <p>{{ `R$ ` + produto.preco.toFixed(2).replace(".", ",") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilo Geral */
div {
  font-family: 'Arial', sans-serif;
  color: #4a2c18;
  background-color: #fff;
}

/* Container das Categorias */
.container-categoria {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 15px 10px;
  background-color: #ffffff;
}

/* Cada Categoria */
.categoria {
  padding: 6px 18px;
  background-color: #ffffff;
  border-radius: 25px;
  border: 1px solid #5F7B5B;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

/* Nome da Categoria */
.categoria h1 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #5F7B5B;
  white-space: nowrap;
}

/* Hover Categoria (fundo levemente verde) */
.categoria:hover {
  background-color: #e8eee8;
  transform: translateY(-2px);
}

/* Categoria Ativa (se quiser usar no futuro) */
.categoria.ativa {
  background-color: #5F7B5B;
}

.categoria.ativa h1 {
  color: #ffffff;
}

/* Responsivo */
@media (max-width: 768px) {
  .container-categoria {
    gap: 8px;
    padding: 10px 5px;
  }

  .categoria {
    padding: 5px 14px;
    border-radius: 20px;
  }

  .categoria h1 {
    font-size: 0.8rem;
  }
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
  background-color: #fff7f2;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.produto:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.produto img {
  object-fit: cover;
  border-radius: 10px;
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
</style>

