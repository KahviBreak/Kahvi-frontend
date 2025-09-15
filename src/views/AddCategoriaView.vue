<script setup>
import MenuBar from '@/components/MenuBar.vue';
import AddCategoria from '@/components/AddCategoria.vue';
</script>

<template>
<MenuBar/>
<div class="fundo"><AddCategoria/></div>
</template>

<style scoped>

.fundo{
    height: 89vh;
    background-color: #F1EDE8;
}
</style>
