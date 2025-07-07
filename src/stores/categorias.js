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

// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
// import CategoriaService from '@/services/categoria'

// const categoriaService = new CategoriaService()

// export const useCategoriaStore = defineStore('categoria', () => {
//   const state = ref({
//     categorias: [],
//     page: 1,
//     page_size: 10,
//     total_pages: 0,
//   })

//   async function buscarCategorias(pagina = 1, filtro = '') {
//     const data = await categoriaService.listarCategorias(pagina, filtro)
//     state.value.categorias = data.results
//     state.value.total_pages = data.total_pages
//     state.value.page = data.page
//     state.value.page_size = data.page_size
//   }

//   async function salvarCategoria(categoria) {
//     try {
//       await categoriaService.salvarCategoria(categoria)
//       await buscarCategorias()
//     } catch (error) {
//       console.error('Error saving category STORE:', error)
//       return Promise.reject(error)
//     }
//   }

//   const categorias = computed(() => state.value.categorias)
//   const meta = computed(() => ({
//     page: state.value.page,
//     page_size: state.value.page_size,
//     total_pages: state.value.total_pages,
//   }))

//   return { categorias, meta, buscarCategorias, salvarCategoria }
// })
