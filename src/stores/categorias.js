import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import CategoriaService from '@/services/categorias'

const categoriaService = new CategoriaService()

export const useCategoriaStore = defineStore('categoria', () => {
  const state = ref({
    categorias: [],
    page: 1,
    page_size: 10,
    total_pages: 0,
  })

  async function buscarCategorias(pagina = 1, filtro = '') {
    const data = await categoriaService.listarCategorias(pagina, filtro)
    state.value.categorias = data.results
    state.value.total_pages = data.total_pages
    state.value.page = data.page
    state.value.page_size = data.page_size
  }

  const categorias = computed(() => state.value.categorias)
  const meta = computed(() => ({
    page: state.value.page,
    page_size: state.value.page_size,
    total_pages: state.value.total_pages,
  }))

    async function excluirCategoria(id) {
    await categoriaService.excluirCategoria(id)
    const index = categorias.value.findIndex((categoria) => categoria.id === id)
    categorias.value.splice(index, 1)
  }

  async function salvarCategoria(categoria) {
    if (categoria.id) {
      await categoriaService.atualizarCategoria(categoria)
      const index = categorias.value.findIndex((c) => c.id === categoria.id)
      categorias.value.splice(index, 1, categoria)
    } else {
      const data = await categoriaService.adicionarCategoria(categoria)
      categorias.value.splice(0, 0, data)
    }
  }


  return { categorias, meta, buscarCategorias, excluirCategoria, salvarCategoria}
})
