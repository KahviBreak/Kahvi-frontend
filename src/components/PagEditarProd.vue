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
          <select id="cat">
            <option value="Bolo">Bolo</option>
            <option value="Suco">Suco</option>
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
  background-color: #556B4E;
  margin-right: 100px;
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
  color: #93755C;
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

  .quantidade,
  .graos {
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
    height: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-self: center;
  }
}
</style>