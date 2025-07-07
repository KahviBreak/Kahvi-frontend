<template>
  <div>
    <p class="titulo">UM POUCO SOBRE NOSSO CARDÁPIO...</p>
  </div>

  <div class="container">
    <div class="container-dois">
            <h1>BOLOS</h1>
      <div>
        <img class="bolo" src="../assets/bolo.png" alt="" />
      </div>
      <div class="bolos">
      <p>Bolo de Paçoca</p>
      <p>Bolo Red Velvet</p>
      <p>Bolo de Laranja</p>
      <p>Bolo de Chocolate com Brigadeiro</p>
      <p>Bolo de Banana com Canela</p>
      </div>
    </div>
    <div class="container-dois">
            <h1>SALGADOS</h1>
      <div>
        <img class="bolo" src="../assets/pao.png" alt="" />
      </div>
      <div class="bolos">
      <p>Pão de Queijo</p>
      <p>Croissant de Presunto e Queijo</p>
      <p>Sanduíche Natural</p>
      <p>Focaccia de Alecrim</p>
      <p>Esfiha Vegana</p>
      </div>
    </div>
    <div class="container-tres">
            <h1>SOBREMESAS</h1>
      <div>
        <img class="abaixo" src="../assets/cupcake.png" alt="" />
      </div>
      <div class="abaixos">
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
            <h1>CAFÈS</h1>
      <div>
        <img class="abaixo" src="../assets/xicara.png" alt="" />
      </div>
      <div class="abaixos">
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
    <button>Fazer Pedido</button>
    <img src="../assets/Icon Frame.png" alt="" />
  </div>
</template>

<style scoped>

.button{
  display: flex;
justify-content: center;
}

button{
background: #402B19;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container-dois {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.bolo{
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

}
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
