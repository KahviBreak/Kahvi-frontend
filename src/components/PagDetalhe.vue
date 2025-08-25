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
  <div class="teste">
  <div class="container">
    <div class="img">
      <img src="@/assets/teste.png" alt="">
    </div>
    <div class="containerDetalhes">
      <h1>Focaccia de Alecrim</h1>
      <p class="descricao">Focaccia macia com aroma fresco de alecrim.</p>
      <div class="container-quant">
        <div class="quantidade">
          <span>Quantidade:</span>
          <div class="quantButton">
          <button class="quantity-button" @click="diminuirQuantidade" :disabled="quantity <= 1">−</button>
          <span class="quantity-value">{{ quantity }}</span>
          <button class="quantity-button" @click="aumentarQuantidade" :disabled="quantity >= product.inStock">+</button>
        </div>
        </div>
        <div class="graos">
          <label for="grao" class="grao">Grão:</label>
          <br>
          <input type="number" name="grao" id="grao">
        </div>
      </div>
      <p class="preco"> R$XX</p>
      <div class="observacao-div">
      <label class="obs"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9 0C13.9657 0 18 3.72236 18 8.32416C18 12.926 13.9657 16.6483 9 16.6483C7.58962 16.6483 6.25294 16.3477 5.06271 15.8114L1.73633 16.9457C1.7009 16.9578 1.66461 16.9676 1.62774 16.9751C0.792068 17.145 0.0636139 16.4179 0.311432 15.6527C0.319403 15.6281 0.32869 15.6039 0.339258 15.5801L1.51222 12.9439C0.557316 11.6223 0 10.0327 0 8.32416C0 3.72236 4.03428 0 9 0ZM12.7385 7.72701C13.1973 7.72701 13.5692 8.07296 13.5692 8.49971C13.5692 8.92646 13.1973 9.27242 12.7385 9.27242H12.6C12.1412 9.27242 11.7692 8.92646 11.7692 8.49971C11.7692 8.07296 12.1412 7.72701 12.6 7.72701H12.7385ZM9.96923 8.49971C9.96923 8.07296 9.59728 7.72701 9.13846 7.72701H9C8.54118 7.72701 8.16923 8.07296 8.16923 8.49971C8.16923 8.92646 8.54118 9.27242 9 9.27242H9.13846C9.59728 9.27242 9.96923 8.92646 9.96923 8.49971ZM5.53846 7.72701C5.99728 7.72701 6.36923 8.07296 6.36923 8.49971C6.36923 8.92646 5.99728 9.27242 5.53846 9.27242H5.4C4.94118 9.27242 4.56923 8.92646 4.56923 8.49971C4.56923 8.07296 4.94118 7.72701 5.4 7.72701H5.53846Z"
            fill="#6E5641" />
        </svg>
        Alguma observação?</label>
      <input type="text" placeholder="Ex: tirar azeitona, milho etc.">
      </div>
      <div class="botoes">
        <div>
          <button class="botao">Comprar agora</button>

          <button style="background-color: #C2E0BD; color:#5F7B5B;" class="botao">Adicionar no carrinho</button>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
.teste{
  display: flex;
  justify-content: center;
}
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

.graos {
  padding-left: 50%;
}

.graos input {
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

.quantButton{
  background-color: #FFFFFF;
  max-width: 85px;
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
  min-width: 24px;
  text-align: center;
  color: #402B19;
}

.preco {
  font-weight: bold;
  color: #402B19;
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 30px;
color: #402B19;
}

.obs {
font-family: 'Overpass';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;
color: #6E5641;
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
font-family: 'Overpass';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
color: #FFFFFF;
  align-items: center;
  text-align: center;

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

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  .img {
    text-align: center;
  }

  .img img {
    width: 90%;
    max-width: 350px;
  }

  .graos {
    padding-left: 0;
  }

  .container-quant {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  input[type="text"] {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .container {
  max-width: 450px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.img img {
  width: 100%;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
}

.containerDetalhes {
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

.descricao {
  font-size: 16px;
  color: #93755C;
  margin: 0;
}

.preco {
  font-size: 18px;
  font-weight: bold;
  color: #556B4E;
  margin: 0;
  margin-top: 3%;
}

.container-quant {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3%;
}

.quantidade, .graos {
  display: flex;
  align-items: center;
  gap: 6px;
}

.quantButton {
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.quantity-button {
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

.graos input {
  width: 40px;
  height: 28px;
  border: 1px solid #C1B8B0;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
}

.obs {
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

.botoes {
  display: flex;
  flex-direction: column;
}

.botao {
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