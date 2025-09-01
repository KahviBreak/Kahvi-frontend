<script setup>
import MenuBar from '@/components/MenuBar.vue';
import PagDetalhe from '@/components/PagDetalhe.vue';
const props = defineProps(['id'])
</script>

<template>
<MenuBar/>
<div class="detalhe"><PagDetalhe :id="props.id"/></div>
</template>

<style scoped>

.detalhe{

    background-color: #F1EDE8;
}
</style>
