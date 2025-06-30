<script setup>
import { onMounted, ref } from 'vue';
import { useCategoriaStore } from '@/stores/categorias.js';
import { useProdutoStore } from '@/stores/produtos';

const categoriaStore = useCategoriaStore();
const produtoStore = useProdutoStore();

const categoria = ref();
const produto = ref();

onMounted(() => {
  categoria.value = categoriaStore;
})

onMounted(() => {
  produto.value = produtoStore;
})

</script>

<template>
    <div>
    <div v-for="categoria in categoriaStore.categorias" :key="categoria.id">
        <h1>{{ categoria.nome }}</h1>
    </div>
    <div v-for="produto in produtoStore.produtos" :key="produto.id">
        <img :src="produto.img" alt="produto.name"/>
        <h1>{{ produto.nome }}</h1>
        <p>{{ produto.descricao }}</p>
        <p>R${{ produto.preco }}</p>
    </div>
    </div> 
</template>

<style scoped>

</style>
