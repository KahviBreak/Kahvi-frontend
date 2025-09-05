<script setup>
import { ref } from 'vue'

const quantity = ref(1)

const product = ref({
  image: 'src/assets/Frame 30.png',
})

const aumentarQuantidade = () => {
  if (quantity.value < product.value.inStock) {
    quantity.value++
  }
}

const diminuirQuantidade = () => {
  if (quantity.value > 1) {
    quantity.value--
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
      <div class="product-image">
         <!-- quando clicar na imagem -> abre input file -->
        <label for="uploadImagem">
          <img v-if="imagemPreview" :src="imagemPreview" alt="Preview do Produto" class="img-clickable" />
        </label>

        <!-- input file escondido -->
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
          <input type="text" placeholder="Ex: Bolo.">
          
          <label class="form-label">Descrição</label>
          <input type="text" placeholder="Ex: Bolo de chocolate.">
        </div>

        <div class="controls">
          <div class="quantity-control">
            <span>Valor un.:</span>
            <div class="quantity-buttons">
              <button class="quantity-btn" @click="diminuirQuantidade" :disabled="quantity <= 1">−</button>
              <span class="quantity-value">{{ quantity }}</span>
              <button class="quantity-btn" @click="aumentarQuantidade" :disabled="quantity >= product.inStock">+</button>
            </div>
          </div>

          <div class="category-control">
            <label for="categoria" class="form-label">Categoria</label>
            <br>
            <select id="categoria" name="categoria" class="select-category" v-model="categoriaSelecionada">
              <option value="" disabled>Selecione...</option>
              <option v-for="cat in categorias" :key="cat.value" :value="cat.value">
                {{ cat.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="actions">
          <button class="btn-primary">Adicionar Produto</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');

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



body {
  font-family: 'Overpass', sans-serif;
}

.product-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: start;
  max-width: 1000px;
  gap: 40px;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 5%;
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

.controls {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.category-control {
  padding-left: 50%;
}

.category-control input {
  box-sizing: border-box;
  width: 80px;
  height: 36px;
  background: #FFFFFF;
  border: #C1B8B0 2px solid;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  font-size: 18px;
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

.quantity-buttons {
  background-color: #FFFFFF;
  max-width: 120px;
  border: #C1B8B0 2px solid;
  border-radius: 10px;
}

.quantity-btn {
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

.price {
  font-weight: bold;
  color: #402B19;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #402B19;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}

.form-label {
  font-family: 'Overpass';
  font-style: normal;
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
  margin-top: 0;
  padding: 0;
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
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  align-items: center;
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

/* RESPONSIVO */
@media (max-width: 1024px) {
  .product-container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  .product-image {
    text-align: center;
  }

  .product-image img {
    width: 90%;
    max-width: 350px;
  }

  .category-control {
    padding-left: 0;
  }

  .controls {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  input[type="text"] {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .product-container {
    max-width: 450px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .select-category {
    width: 100px;
    height: 30px;
    font-size: 14px;
  }


  .product-image img {
    width: 100%;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
  }

  .product-details {
    background: #fff;
    padding: 20px;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 303px;
    margin-left: 2px;
  }

  h1 {
    font-family: 'Overlock', cursive;
    font-weight: 700;
    font-size: 20px;
    color: #402B19;
    margin: 0;
  }

  .description {
    font-size: 16px;
    color: #93755C;
    margin: 0;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #556B4E;
    margin: 0;
    margin-top: 3%;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
  }

  .quantity-control, .category-control {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .quantity-buttons {
    background: #FFFFFF;
    border: 1px solid #C1B8B0;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

  .quantity-btn {
    background: none;
    border: none;
    padding: 4px 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .quantity-value {
    font-size: 14px;
    font-weight: bold;
    color: #402B19;
    min-width: 20px;
    text-align: center;
  }

  .category-control input {
    width: 40px;
    height: 28px;
    border: 1px solid #C1B8B0;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
  }

  .form-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #6E5641;
    font-weight: 600;
  }

  input[type="text"] {
    width: 100%;
    height: 36px;
    border: 1px solid #C1B8B0;
    border-radius: 6px;
    font-size: 14px;
    padding: 4px 8px;
  }

  .actions {
    display: flex;
    flex-direction: column;
  }

  .btn-primary {
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: 60%;
    height:30%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-self: center;
  }
}
</style>
