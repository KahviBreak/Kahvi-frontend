<script setup>
import { onMounted, ref } from 'vue';
import { useCategoriaStore } from '@/stores/categorias.js';
// import { useProdutoStore } from '@/stores/produtos.js';

const categoriaStore = useCategoriaStore();
// const produtoStore = useProdutoStore();
const categoria = ref();

onMounted(() => {
  categoria.value = categoriaStore;
})

</script>

<template>
    <div>
    <div v-for="categoria in categoriaStore.categoria" :key="categoria.id">
        <h1>{{ categoria.nome }}</h1>
    </div>
    </div> 
</template>

<style scoped>

</style>
