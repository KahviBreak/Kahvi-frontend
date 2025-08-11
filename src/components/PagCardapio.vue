<script setup>
import { useCardapioStore } from '@/stores/cardapio.js';
const cardapio = useCardapioStore();
</script>


<template>
    <div class="cabeçalho">
      <p class="titulo">UM POUCO SOBRE NOSSO CARDÁPIO...</p>
    </div>

    <div class="container">
    <div class="fundo2">
      <div class="container-dois">
        <div class="aliementos-cima">
          <h1>BOLOS</h1>
          <p v-for="(bolo, index) in cardapio.bolos" :key="'bolo-' + index">{{ bolo }}</p>
        </div>
        <div>
          <img class="foto" src="../assets/bolo.png" alt="" />
        </div>

      </div>
      <div class="container-dois">
        <div class="alimentos-cima">
          <h1>SALGADOS</h1>
          <p v-for="(salgado, index) in cardapio.salgados" :key="'salgado-' + index">{{ salgado }}</p>
        </div>
        <div>
          <img class="foto" src="../assets/pao.png" alt="" />
        </div>
      </div>
    </div>

    <div class="fundo3">
      <div class="container-tres">
        <div>
          <img class="foto" src="../assets/cupcake.png" alt="" />
        </div>
        <div class="alimentos">
          <h1>SOBREMESAS</h1>
          <p v-for="(sobremesa, index) in cardapio.sobremesas" :key="'sobremesa-' + index">{{ sobremesa }}</p>
        </div>
      </div>
      <div class="container-tres">
        <div>
          <img class="foto" src="../assets/xicara.png" alt="" style="margin-top: 10%;"/>
        </div>
        <div class="alimentos">
          <h1>CAFÈS</h1>
            <p v-for="(cafe, index) in cardapio.cafes" :key="'cafe-' + index">{{ cafe }}</p>
        </div>
      </div>
      </div>
    </div>

    <div class="button">
      <button>
        Fazer Pedido
        <svg style="margin-left: 20px; margin-top: 2px;" width="19" height="27" viewBox="0 0 19 27" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999997 1L18 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 13L1 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
    </div>

</template>

<style scoped>
.alimentos {
  text-align: end;
}

.button {
  display: flex;
  justify-content: center;
  background-color: #DBD1C5;
  padding-top: 2%;
  padding-bottom: 3%;
}

button {
  background: #402b19;
  border-radius: 10px;
  color: white;
  width: 10%;
  width: 415px;
  height: 70px;
  border-radius: 10px;
  border: none;
  font-family: 'Varta';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  margin-top: 1%;
}

.cabeçalho{
  background-color: #FAF0E5;
  height: 150px;
  margin-top: 2%;
  position: relative;
}

.titulo {
  display: flex;
  justify-content: center;
  font-family: 'Overlock SC';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  color: #402b19;
  padding-top: 3%;
}

.container {
}

.fundo2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 100px;
  padding-top: 3%;
  background-color: #DBD1C5;
  height: 10%;
  padding-bottom: 4%;
}

.container-dois {
  display: flex;
  justify-content: row;
  gap: 50px;
  margin-top: 3%;
}

.fundo3{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 100px;
  padding-top: 3%;
  background-color: #FAF0E5;
  height: 10%;
  padding-bottom: 4%;
}

.container-tres {
  display: flex;
  justify-content: row;
  gap: 50px;
}

/* .bolo{
  margin-left: 30%;
  margin-top: 30%;
}
.bolos{
  position: absolute;
  margin-top: 5%;

}

.abaixo{
  margin-top: 20%;
  margin-left: 70%;
}
.abaixos{
  position: absolute;
    margin-top: 15%;

} */
h1 {
  font-family: 'Overlock SC';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #402b19;
}

p {
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #402b19;
}

@media (max-width: 768px) {
  .container-dois,
  .container-tres {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-left: 2%;
  }

  .foto {
    max-width: 80px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  button {
    font-size: 20px;
    height: 50px;
  }
}
</style>