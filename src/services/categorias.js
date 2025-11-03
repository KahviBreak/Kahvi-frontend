import axios from 'axios'

class CategoriaService {
  async listarCategorias(pagina = 1, filtro = '') {
    try {
      const response = await axios.get(`categorias/?page=${pagina}&search=${filtro}`)
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
  async adicionarCategoria(categoria) {
    try {
      const { data } = await axios.post('/categorias/', categoria)
      return data
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error)
      throw error
    }
  }
  async excluirCategoria(id) {
    await axios.delete(`/categorias/${id}/`)
  }
}

export default CategoriaService
