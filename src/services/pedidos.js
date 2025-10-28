import axios from 'axios'
class CompraService {
  async obterCompras(pagina = 1, filtro = '') {
    try {
      const response = await axios.get(`/compras/`, {
        params: {
          page: pagina,
          search: filtro
        }
      })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar lista paginada de compras:', error)
      throw error
    }
  }

  async obterCompraPorId(id) {
    try {
      const response = await axios.get(`/compras/${id}/`)
      return response.data
    } catch (error) {
      console.error('Error fetching product by ID:', error)
      throw error
    }
  }
}

export default CompraService
