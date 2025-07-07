<template>
  <div class="home">
  <div>
    <p class="titulo">UM POUCO SOBRE NOSSO CARDÁPIO...</p>
  </div>

  <div class="container">
    <div class="container-dois">
            <div class="aliementos-cima">
        <h1>BOLOS</h1>
        <p>Bolo de Paçoca</p>
        <p>Bolo Red Velvet</p>
        <p>Bolo de Laranja</p>
        <p>Bolo de Chocolate com Brigadeiro</p>
        <p>Bolo de Banana com Canela</p>
      </div>
      <div>
        <img class="foto" src="../assets/bolo.png" alt="" />
      </div>

    </div>
    <div class="container-dois">
            <div class="alimentos-cima">
        <h1>SALGADOS</h1>
        <p>Pão de Queijo</p>
        <p>Croissant de Presunto e Queijo</p>
        <p>Sanduíche Natural</p>
        <p>Focaccia de Alecrim</p>
        <p>Esfiha Vegana</p>
      </div>
      <div>
        <img class="foto" src="../assets/pao.png" alt="" />
      </div>
    </div>
    <div class="container-tres">
      <div>
        <img class="foto" src="../assets/cupcake.png" alt="" />
      </div>
      <div class="alimentos">
        <h1>SOBREMESAS</h1>
        <p>Brownie</p>
        <p>Cheesecake de Frutas Vermelhas</p>
        <p>Torta de Limão com Merengue</p>
        <p>Cookie Chocolate</p>
        <p>Pudim de Leite</p>
        <p>Mousse de Maracujá</p>
        <p>Donuts Artesanais (sabores variados)</p>
      </div>
    </div>
    <div class="container-tres">
      <div>
        <img class="foto" src="../assets/xicara.png" alt="" />
      </div>
      <div class="alimentos">
        <h1>CAFÈS</h1>
        <p>Espresso de Brigadeiro</p>
        <p>Café Coado</p>
        <p>Macchiato</p>
        <p>Cappuccino</p>
        <p>Mocha</p>
        <p>Latte</p>
        <p>Affogato</p>
        <p>Iced Coffee</p>
        <p>Frappuccino</p>
      </div>
    </div>
  </div>

  <div class="button">
  <button>
    Fazer Pedido
    <svg style="margin-left: 20px; margin-top: 2px;" width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.999997 1L18 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 13L1 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </button>
</div>

  </div>
</template>

<style scoped>
.alimentos{
  text-align: end;
}

.home {
  margin-top: 2%;
    background-image: url("../assets/fundoCardapio.png");
}

.button {
  display: flex;
  justify-content: center;
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
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: 10%;
  gap: 100px;
}

.container-tres {
  display: flex;
  justify-content: row;
}
.container-dois {
  display: flex;
  justify-content: row;
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
</style>
