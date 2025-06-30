import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([
    { id: 1, nome: 'Tudo' },
    { id: 2, nome: 'Bolos'},
    { id: 3, nome: 'Sobremesas' },
    { id: 4, nome: 'Salgados'},
    { id: 5, nome: 'Bebidas Geladas'},
    { id: 6, nome: 'Bebidas Quentes'},
    { id: 7, nome: 'Outros'},
  ])
  return { categorias };
})
export default useCategoriaStore
