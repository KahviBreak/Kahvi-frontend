<script setup>
import { ref } from 'vue'
import MenuBar from '@/components/MenuBar.vue'
import Tudo from '@/components/pagsPedido/Tudo.vue';
import Bolos from '@/components/pagsPedido/Bolos.vue';
import Sobremesas from '@/components/pagsPedido/Sobremesas.vue';
import Salgados from '@/components/pagsPedido/Salgados.vue';
import BebidasGeladas from '@/components/pagsPedido/BebidasGeladas.vue';
import BebidasQuentes from '@/components/pagsPedido/BebidasQuentes.vue';
import Outros from '@/components/pagsPedido/Outros.vue';


const currentSection = ref('tudo')
</script>

<template>
  <MenuBar />
  <nav>
    <button @click="currentSection = 'tudo'" :class="{ active: currentSection === 'tudo' }">Tudo</button>
    <button @click="currentSection = 'bolos'" :class="{ active: currentSection === 'bolos' }">Bolos</button>
    <button @click="currentSection = 'sobremesas'" :class="{ active: currentSection === 'sobremesas' }">Sobremesas</button>
    <button @click="currentSection = 'salgados'" :class="{ active: currentSection === 'salgados' }">Salgados</button>
    <button @click="currentSection = 'bebidas-quentes'" :class="{ active: currentSection === 'bebidas-quentes' }">Bebidas Quentes</button>
    <button @click="currentSection = 'bebidas-geladas'" :class="{ active: currentSection === 'bebidas-geladas' }">Bebidas Geladas</button>
  </nav>

  <Tudo v-if="currentSection === 'tudo'"/>
  <Bolos v-if="currentSection === 'bolos'" />
  <Sobremesas v-if="currentSection === 'sobremesas'" />
  <Salgados v-if="currentSection === 'salgados'" />
  <BebidasQuentes v-if="currentSection === 'bebidas-quentes'" />
  <BebidasGeladas v-if="currentSection === 'bebidas-geladas'" />
  <Outros v-if="currentSection === 'outros'" />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap; 
}

nav button {
  background: none;            
  border: none;                
  color: #2e5e34;              
  font-weight: bold;           
  font-size: 16px;             
  cursor: pointer;            
  padding: 8px 12px;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: 2px solid transparent; 
}

nav button:hover {
  color: #1e3d23;                     
  border-bottom: 2px solid #1e3d23;  
}

nav button.active {
  color: #1e3d23;                   
  border-bottom: 2px solid #1e3d23;
}
</style>
