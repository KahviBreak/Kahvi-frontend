import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import CompraService from '@/services/pedidos'

const compraService = new CompraService()

export const useCompraStore = defineStore('compra', () => {
  const state = ref({
    compras: [],
    page: 1,
    page_size: 10,
    total_pages: 0,
  })

  async function obterCompraPorId(pagina = 1, filtro = '') {
    try {
      const data = await compraService.obterCompraPorId(pagina, filtro)
      state.value.compras = data.results
      state.value.total_pages = data.total_pages
      state.value.page = data.page
      state.value.page_size = data.page_size
    } catch (error) {
      console.error('Erro ao obter compras:', error)
    }
  }

  const compras = computed(() => state.value.compras)
  const meta = computed(() => ({
    page: state.value.page,
    page_size: state.value.page_size,
    total_pages: state.value.total_pages,
  }))

  async function buscarCompraPorId(id) {
    try {
      const compra = await compraService.obterCompraPorId(id)
      return compra
    } catch (error) {
      console.error('Error fetching purchase by ID in store:', error)
      throw error
    }
  }

  return { compras, meta, obterCompraPorId, buscarCompraPorId }
})
