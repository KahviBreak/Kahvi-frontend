<script setup>
import { ref } from 'vue'

const product = ref({
  image: 'src/assets/Frame 30.png',
})

const preco = ref(0)

const aumentarQuantidade = () => {
  if (preco.value < 1 || preco.value >= 1) {
    preco.value++
  }
}

const diminuirQuantidade = () => {
  if (preco.value > 1) {
    preco.value--
  }
}

const categorias = ref([
  { value: 'bolos', label: 'Bolos' },
  { value: 'paes', label: 'Pães' },
  { value: 'doces', label: 'Doces' },
  { value: 'salgados', label: 'Salgados' }
])

const categoriaSelecionada = ref('')
const imagemPreview = ref(product.value.image)

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    imagemPreview.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <div class="page">
    <div class="product-container">
      <!-- Imagem do Produto -->
      <div class="product-image">
        <label for="uploadImagem">
          <img 
            v-if="imagemPreview" 
            :src="imagemPreview" 
            alt="Preview do Produto" 
            class="img-clickable" 
          />
        </label>
        <input 
          id="uploadImagem" 
          type="file" 
          accept="image/*" 
          @change="handleFileUpload" 
          style="display: none;" 
        />
      </div>

      <!-- Detalhes do Produto -->
      <div class="product-details">
        <h1>Adicionar Produto</h1>

        <div class="form-group">
          <label class="form-label">Nome</label>
          <input type="text" placeholder="Ex: Bolo.">

          <label class="form-label">Descrição</label>
          <input type="text" placeholder="Ex: Bolo de chocolate.">
        </div>

        <div class="container-quant">
          <!-- Quantidade / Preço -->
          <div class="quantidade">
            <span>Valor por un</span>
            <div class="quantButton">
              <button 
                class="quantity-button" 
                @click="diminuirQuantidade" 
                :disabled="preco <= 1"
              >
                −
              </button>
              <span class="quantity-value">
                R${{ preco.toFixed(2).replace('.', ',') }}
              </span>
              <button 
                class="quantity-button" 
                @click="aumentarQuantidade"
              >
                +
              </button>
            </div>
          </div>

          <!-- Categoria -->
          <div class="category-control">
            <label for="categoria" class="form-label">Categoria</label>
            <br>
            <select 
              id="categoria" 
              name="categoria" 
              class="select-category" 
              v-model="categoriaSelecionada"
            >
              <option value="" disabled>Selecione</option>
              <option 
                v-for="cat in categorias" 
                :key="cat.value" 
                :value="cat.value"
              >
                {{ cat.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Botões -->
        <div class="actions">
          <button class="btn-primary">Adicionar Produto</button>
          <button 
            style="background-color: #FF0004; color: white;" 
            class="btn-primary"
          >
            Excluir Produto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* === Importação de fontes === */
@import url('https://fonts.googleapis.com/css2?family=Overlock:wght@400;700;900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

/* === Layout principal === */
.page {
  display: flex;
  justify-content: center;
}

body {
  font-family: 'Overpass', sans-serif;
}

.product-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: start;
  max-width: 1000px;
  gap: 40px;
  margin: 0 auto;
  padding: 50px 0 5%;
}

.product-image img {
  width: 76%;
  object-fit: cover;
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

/* === Inputs e formulários === */
.form-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}

.form-label {
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #5F7B5B;
  margin-top: 5px;
}

input[type="text"] {
  box-sizing: border-box;
  width: 450px;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 5px;
}

/* === Quantidade e categoria === */
.container-quant {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

span {
  font-weight: 500;
  font-size: 18px;
  color: #5F7B5B;
}

.quantButton {
  background-color: #FFFFFF;
  max-width: 140px;
  border: 2px solid #C1B8B0;
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
  min-width: 24px;
  text-align: center;
  color: #402B19;
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

.category-control {
  margin-left: 33%;
}

/* === Botões === */
.btn-primary {
  background-color: #556B4E;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  font-family: 'Overpass';
  text-align: center;
}

.actions {
  row-gap: 100px;
}

.btn-primary:nth-of-type(2) {
  background-color: #B7D1B4;
  color: #402B19;
}

.btn-primary:hover {
  opacity: 0.9;
}

/* === Responsividade === */
@media (max-width: 1024px) {
  .category-control {
    margin-left: 0;
  }

  .product-container {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 20px;
  }

  .product-image {
    text-align: center;
  }

  .product-image img {
    width: 100%;
    max-width: 350px;
    background-color: #5F7B5B;
  }

  input[type="text"] {
    width: 100%;
  }
}

@media (max-width: 600px) {
  input[type="text"] {
    width: 350px;
  }

  .btn-primary {
    padding: 10px;
    font-size: 18px;
    margin-top: 10px;
    font-weight: 500;
    display: grid;
    justify-self: center;
    align-items: center;
    text-align: center;
  }

  .product-details {
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .upload-box {
    width: 120%;
  }

  .upload-box img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #402B19;
    text-align: center;
  }

  label {
    font-size: 14px;
    font-weight: 600;
  }

  input, select {
    width: 100%;
    border-radius: 8px;
    font-size: 14px;
  }
}
</style>
