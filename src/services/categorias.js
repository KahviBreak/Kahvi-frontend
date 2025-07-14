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
}

export default CategoriaService
