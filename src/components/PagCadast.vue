<script setup>
import '@/assets/main.css'
</script>

<template>

  <div class="container">
    <img src="@/assets/Group 1.png" alt="" id="g1">

    <div id="cadastro">
      <img src="@/assets/Kahvi!.png" alt="" id="kahvi">
      <div class="inputs">
        <input type="text" placeholder="Nome completo">
        <input type="email" placeholder="E-mail">
        <input type="text" placeholder="Nome de usuário">
        <input type="password" placeholder="Criar senha">
        <input type="password" placeholder="Confirmar senha">
        <button>CADASTRAR</button>
        <div class="botao-cadastro">
          <a href="">Já possuo cadastro</a>
          <img src="@/assets/Group 3.png" alt="" id="img">
        </div>
      </div>
    </div>

    <img src="@/assets/Group 2.png" alt="" id="g2">
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

.container {
  display: flex;
flex-direction: row;
  font-family: "Varta", sans-serif;
}

#cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
  padding-left: 23%;
  padding-right: 20%;
}

#g1{
    width: 320px;
    height: 400px;
}

#g2{
    display: flex;
        width: 350px;
    height: 400px;
position: absolute;
  bottom: 0;
  right: 0;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

input {
    margin-top: 2%;
    padding: 5%;
    border-radius: 12px;
    border: #BFBDA6 solid 1px;
    font-size: 18px;

}
button {
    margin-top: 5%;
    padding: 4%;
    border-radius: 7px;
    border: #2F402C solid 1px;
    background: #2F402C;
    color: white;
    font-size: 20px;
}

.botao-cadastro{
display: flex;
flex-direction: row;
align-self: center;
  white-space: nowrap;
  margin-top: 2%;
}
a {
    margin: 0;
    text-decoration: none;
    color: #2F402C;

    font-family: "Varta", sans-serif;
    font-size: 20px;
    text-align: center;
    margin-left: 5%;
}


#img {
  height: 17px;
  width: 31px;
  margin-top: 2%;
}

#kahvi {
    width: 180px;
    margin-bottom: 10%;
padding-right: 5%;
    justify-content: center;
    align-self: center;
    align-items: center;
}


</style>