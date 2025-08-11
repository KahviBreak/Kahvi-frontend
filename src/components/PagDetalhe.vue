<script setup>
import { ref, onMounted } from 'vue'
const quantity = ref(1)
const grao = ref(1)

const product = ref(
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    image: 'image1.png',
    inStock: 10,
    price: 'R$100,00',
  },

)

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

</script>
<template>
  <div class="container">
    <div class="img">
      <img src="@/assets/teste.png" alt="">
    </div>
    <div class="containerDetalhes">
      <h1>fjdnfjwd</h1>
      <p class="descricao">Focaccia macia com aroma fresco de alecrim.</p>
      <div class="container-quant">
        <div class="quantidade">
          <span>Quantidade:</span>
          <button class="quantity-button" @click="diminuirQuantidade" :disabled="quantity <= 1">−</button>
          <span class="quantity-value">{{ quantity }}</span>
          <button class="quantity-button" @click="aumentarQuantidade" :disabled="quantity >= product.inStock">+</button>
        </div>
        <div class="graos">
          <label for="grao" class="grao">Grão:</label>
          <br>
          <input type="number" name="grao" id="grao">
        </div>
      </div>
      <p class="preco"> r$3737874</p>
      <label class="obs">alguma observação?</label>
      <input type="text" placeholder="ex: pipipipi">
      <div class="botoes">
        <div>
          <button class="botao">comprar agora</button>
        </div>
        <div>
          <button style="background-color: #C2E0BD; color:#5F7B5B" class="botao">adicionar no carrinho</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Overpass', sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: start;
  max-width: 1000px;
  gap: 40px;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 5%;
}

.img img {
  width: 76%;
  object-fit: cover;
}

.containerDetalhes {
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

.descricao {
  font-weight: 400;
  font-size: 18px;
  color: #93755C;
}

.container-quant {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.graos{
  padding-left: 50%;
}

.graos input{
box-sizing: border-box;
width: 80px;
height: 30px;
background: #FFFFFF;
border: 1px solid #C1B8B0;
border-radius: 5px;
margin: 0;
padding: 0;
font-size: 18px;
}

.quantidade-grao {
  display: flex;
  align-items: center;
  gap: 20px;
}

span {
  font-weight: 500;
  font-size: 18px;
  color: #93755C;
}

.grao {
  font-weight: 500;
  font-size: 18px;
  color: #93755C;
}

.quantity-button {
  background-color: #fff;
  border: 1px solid #ccc;
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

.preco {
  font-size: 20px;
  font-weight: bold;
  color: #402B19;
}

.obs {
  font-weight: 500;
  color: #93755C;
  font-size: 16px;
}

input[type="text"] {
  box-sizing: border-box;
  width: 305px;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 5px;
  margin-top: 0;
  padding: 0;
}

.botao {
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
}

.botoes {
  row-gap: 100px;
}

.botao:nth-of-type(2) {
  background-color: #B7D1B4;
  color: #402B19;
}

.botao:hover {
  opacity: 0.9;
}
</style>