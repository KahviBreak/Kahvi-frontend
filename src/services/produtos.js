import axios from 'axios'

class ProdutoService {
  async listarProdutosPorCategoria(pagina = 1, categoria = '') {
    console.log("categoria")
    console.log(categoria)

    try {
      const response = await axios.get(`produtos/?page=${pagina}&categoria__nome=${categoria}`)
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
}

export default ProdutoService
