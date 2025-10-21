<template>
  <div></div>
  <div class="voltar">
      <router-link to="/">
        <img src="/src/assets/voltar.png" alt="" />
      </router-link>
    </div>
    <div class="container">
      <div class="teste">
        <h1> Adicionar Categoria</h1>
        <div class="input">
            <label for="">Nome categoria</label>
            <input type="text" name="" id="" placeholder="Ex: bolos">
        </div>
        <div class="buttons">
            <button class="button-um">Salvar Categoria</button>
            <button class="button-dois">Remover Categoria</button>
        </div>
    </div>
    </div>
    <!-- oi -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');


.container{
  display: flex;
  justify-content: center;
}

.teste{
  display: grid;
  grid-template-columns: 1fr;
}

.voltar {
  align-self: flex-start;
  margin-left: 30px;
}

h1{
  margin-top: 30%;
font-family: 'Overlock';
font-style: normal;
font-weight: 700;
font-size: 36px;
color: #402B19;
display: flex;

}

label {
  font-weight: 500;
  font-size: 18px;
  color: #5F7B5B;
  margin-top: 6%;
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

.input {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}

.buttons{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 10%;
}

.button-um {
  background-color: #C2E0BD;
  color: #5F7B5B;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 80%;
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 18px;
  line-height: 50px;
  display: flex;
  justify-self: center;
  justify-content: center;
}

.button-dois {
  background-color: #FF0000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 80%;
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 18px;
  line-height: 50px;
  color: #FFFFFF;
  margin-top: 2%;
    display: flex;
  justify-self: center;
  justify-content: center;

}
</style>
