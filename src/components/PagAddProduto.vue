<script setup>
import { ref } from 'vue'

// Estado do produto
const product = ref({
  image: 'src/assets/Frame 30.png',
  nome: '',
  descricao: '',
  preco: 0,
  categoria: ''
})

const preco = ref(0)
const imagemPreview = ref(product.value.image)

const categorias = ref([
  { value: 'bolos', label: 'Bolos' },
  { value: 'paes', label: 'Pães' },
  { value: 'doces', label: 'Doces' },
  { value: 'salgados', label: 'Salgados' }
])

// Aumentar e diminuir valor
const aumentarQuantidade = () => {
  preco.value++
}
const diminuirQuantidade = () => {
  if (preco.value > 1) preco.value--
}

// Upload da imagem
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    imagemPreview.value = URL.createObjectURL(file)
    product.value.image = file
  }
}

// Função para enviar produto para o backend (endpoint POST)
const adicionarProduto = async () => {
  try {
    const formData = new FormData()
    formData.append('nome', product.value.nome)
    formData.append('descricao', product.value.descricao)
    formData.append('preco', preco.value)
    formData.append('categoria', product.value.categoria)
    formData.append('imagem', product.value.image)

    const response = await fetch('http://localhost:5174/produtos', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      alert('Produto adicionado com sucesso!')
      product.value = { nome: '', descricao: '', preco: 0, categoria: '', image: '' }
      imagemPreview.value = ''
      preco.value = 0
    } else {
      alert('Erro ao adicionar produto!')
    }
  } catch (error) {
    console.error(error)
    alert('Erro de conexão com o servidor!')
  }
}
</script>

<template>
  <div class="page">
    <div class="product-container">
      <div class="product-image">
        <label for="uploadImagem">
          <img v-if="imagemPreview" :src="imagemPreview" alt="Preview do Produto" class="img-clickable" />
        </label>
        <input 
          id="uploadImagem" 
          type="file" 
          accept="image/*" 
          @change="handleFileUpload" 
          style="display: none;" 
        />
      </div>

      <div class="product-details">
        <h1>Adicionar Produto</h1>
        
        <div class="form-group">
          <label class="form-label">Nome</label>
          <input 
            type="text" 
            placeholder="Ex: Bolo." 
            v-model="product.nome"
          >
          
          <label class="form-label">Descrição</label>
          <input 
            type="text" 
            placeholder="Ex: Bolo de chocolate." 
            v-model="product.descricao"
          >
        </div>

        <div class="container-quant">
          <div class="quantidade">
            <span>Valor por un</span>
            <div class="quantButton">
              <button class="quantity-button" @click="diminuirQuantidade" :disabled="preco <= 1">−</button>
              <span class="quantity-value">R${{ preco.toFixed(2).replace('.', ',') }}</span>
              <button class="quantity-button" @click="aumentarQuantidade">+</button>
            </div>
          </div>

          <div class="category-control">
            <label for="categoria" class="form-label">Categoria</label> <br>
            <select id="categoria" name="categoria" class="select-category" v-model="product.categoria">
              <option value="" disabled>Selecione</option>
              <option v-for="cat in categorias" :key="cat.value" :value="cat.value">
                {{ cat.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="actions">
          <button class="btn-primary" @click="adicionarProduto">Adicionar Produto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}

.select-category {
  box-sizing: border-box;
  width: 150px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 8px;
  font-size: 16px;
  padding: 4px 8px;
  color: #402B19;
  cursor: pointer;
}

.product-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: start;
  max-width: 1000px;
  gap: 40px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 5%;
}

.product-image img {
  width: 76%;
  object-fit: cover;
  border-radius: 8px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  font-family: 'Overlock', cursive;
  font-weight: 700;
  font-size: 36px;
  color: #402B19;
}

.container-quant {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.category-control {
  margin-left: 33%;
}

span {
  font-weight: 500;
  font-size: 18px;
  color: #93755C;
}

.form-label {
  font-weight: 500;
  font-size: 18px;
  color: #93755C;
}

.quantButton {
  background-color: #FFFFFF;
  max-width: 140px;
  border: #C1B8B0 2px solid;
  border-radius: 10px;
}

.quantity-button {
  background-color: #fff;
  border: none;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.quantity-value {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #402B19;
}

input[type="text"] {
  box-sizing: border-box;
  width: 450px;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 5px;
  padding-left: 8px;
}

.btn-primary {
  background-color: #556B4E;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  transition: 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .product-container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
}
</style>
