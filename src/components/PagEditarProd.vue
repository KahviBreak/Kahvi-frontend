<script setup>
import { ref, onMounted } from 'vue'
const product = ref(
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    image: 'image1.png',
    price: 100,
  },

)

const preco = ref(product.value.price)

const aumentarQuantidade = () => {
  if (preco.value <= product.value.price || preco.value >= product.value.price) {
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

</script>
<template>
  <div class="teste">
    <div class="container">
      <div class="img">
        <div class="addFoto"><svg class="svg" width="36" height="36" viewBox="0 0 36 36" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.00994 10.8889C2 11.6224 2 12.4455 2 13.3778V22.6222C2 26.6048 2 28.5961 2.77506 30.1173C3.45683 31.4553 4.54469 32.5432 5.88273 33.2249C7.40388 34 9.39518 34 13.3778 34H22.6222C23.5545 34 24.3776 34 25.1111 33.9901M2.00994 10.8889C2.04247 8.48871 2.18142 7.04782 2.77506 5.88273C3.45683 4.54469 4.54469 3.45683 5.88273 2.77506C7.40388 2 9.39518 2 13.3778 2H22.6222C26.6048 2 28.5961 2 30.1173 2.77506C31.4553 3.45683 32.5432 4.54469 33.2249 5.88273C34 7.40388 34 9.39518 34 13.3778V22.6222C34 25.3135 34 27.0954 33.7608 28.4374M2.00994 10.8889L10.8988 19.7778M25.1111 33.9901C27.5113 33.9575 28.9522 33.8186 30.1173 33.2249C31.4553 32.5432 32.5432 31.4553 33.2249 30.1173C33.4762 29.624 33.6461 29.0814 33.7608 28.4374M25.1111 33.9901L10.8988 19.7778M10.8988 19.7778L15.7373 14.9393C16.5293 14.1473 16.9253 13.7513 17.382 13.6029C17.7837 13.4724 18.2163 13.4724 18.618 13.6029C19.0747 13.7513 19.4707 14.1473 20.2627 14.9393L33.7608 28.4374M26.9067 9.11111H26.8711"
              stroke="white" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
        <img src="" alt="">
      </div>
      <div class="containerDetalhes">
        <h1>Editar produto</h1>
        <label for="nome" class="font">Nome</label>
        <input type="text" name="nome" id="nome" class="input" placeholder="  Focaccia de alecrim">
        <label for="descricao" class="font">Descrição</label>
        <input type="text" name="descricao" id="descricao" class="input"
          placeholder="  Focaccia macia com aroma fresco de alecrim.">
        <div class="container-quant">
          <div class="quantidade">
            <span>Valor por un</span>
            <div class="quantButton">
              <button class="quantity-button" @click="diminuirQuantidade" :disabled="preco <= 1">−</button>
              <span class="quantity-value">R${{ preco.toFixed(2).replace('.', ',') }}</span>
              <button class="quantity-button" @click="aumentarQuantidade">+</button>
            </div>
          </div>
          <div class="categoria">
            <label for="cat">Categoria</label>
            <select id="categoria" name="categoria" class="select-category" v-model="categoriaSelecionada">
              <option value="" disabled>Selecione</option>
              <option v-for="cat in categorias" :key="cat.value" :value="cat.value">
                {{ cat.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="botoes">
          <div>
            <button class="botao" style="margin-top: 7%;">Salvar alterações</button>

            <button style="background-color: #FF0000; color:#FFFFFF;" class="botao">Excluir produto</button>

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

.teste {
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
  gap: 40px;
  margin: 0px auto;
  padding-top: 50px;
  padding-bottom: 5%;
}

.img {
  width: 550px;
  height: 650px;
  border-radius: 12px;
  object-fit: cover;
  background-color: white;
  margin-right: 100px;
}

.addFoto {
  width: 15%;
  height: 11%;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #5F7B5B;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containerDetalhes {
  display: flex;
  flex-direction: column;
}

h1 {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #402B19;
  margin-top: 5%;
  margin-bottom: 5%;
}

.font {
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #5F7B5B;
}

.container-quant {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  color: #5F7B5B;
}

.categoria label {
  font-weight: 500;
  font-size: 18px;
  color: #5F7B5B;
  display: block;
}

.categoria {
  margin-left: 46%;
}

select {
  width: 145px;
  height: 36px;
  border: #C1B8B0 2px solid;
  border-radius: 4px;
  background-color: white;
  color: #5F7B5B;
}


.grao {
  font-weight: 500;
  font-size: 18px;
  color: #93755C;
}

.quantButton {
  background-color: #FFFFFF;
  max-width: 140px;
  border: #C1B8B0 2px solid;
  border-radius: 4px;
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
  color: #5F7B5B;
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
  width: 100%;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 5px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #93755C;
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
  width: 80%;
  margin-top: 8px;
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  align-items: center;
  text-align: center;
  margin: 10px 0 0 10%;
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
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .img img {
    width: 100%;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
  }

  .img {
    width: 350px;
    height: 250px;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-right: 0;
  } 

  .svg{
    width: 25px;
  }

  .addFoto {
  width: 18%;
  height: 20%;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #5F7B5B;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .containerDetalhes {
    background: #fff;
    padding: 20px;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 310px;
    
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

  .categoria{
    margin-left: 0;
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
    width: 90%;
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
    height: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-self: center;
  }
}
</style>