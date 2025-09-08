import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ProdutoService from '@/services/produtos'

const produtoService = new ProdutoService()

export const useProdutoStore = defineStore('produto', () => {
  const state = ref({
    produtos: [],
    page: 1,
    page_size: 10,
    total_pages: 0,
  })

  async function buscarProdutosPorCategoria(pagina = 1, categoria = '') {
    console.log('dentro store')
    console.log(categoria)
    const data = await produtoService.listarProdutosPorCategoria(pagina, categoria)
    state.value.produtos = data.results
    state.value.total_pages = data.total_pages
    state.value.page = data.page
    state.value.page_size = data.page_size
  }

  const produtos = computed(() => state.value.produtos)
  const meta = computed(() => ({
    page: state.value.page,
    page_size: state.value.page_size,
    total_pages: state.value.total_pages,
  }))

  return { produtos, meta, buscarProdutosPorCategoria }
})
