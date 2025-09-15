<script setup>
import MenuBar from '@/components/MenuBar.vue';
import PagDetalhe from '@/components/PagDetalhe.vue';
import FooterBar from '@/components/FooterBar.vue';
const props = defineProps(['id'])
</script>

<template>
<MenuBar/>
<div class="detalhe"><PagDetalhe :id="props.id"/></div>
<FooterBar/>
</template>

<style scoped>

.detalhe{

    background-color: #F1EDE8;
}
</style>
