<script setup>
import MenuBar from '@/components/MenuBar.vue';
import PagAddProduto from '@/components/PagAddProduto.vue';
</script>

<template>
<MenuBar/>
<div class="fundo"><PagAddProduto/></div>
</template>

<style scoped>

.fundo{
    height: 89vh;
    background-color: #F1EDE8;
}

@media (max-width: 600px) {
    .fundo{
    height: 110vh;
    background-color: #F1EDE8;
}
}
</style>
