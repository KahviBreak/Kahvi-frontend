<script setup>
import '@/assets/main.css'
</script>

<template>
  <div class="container">
    <img src="@/assets/Group 1.png" alt="" id="g1" class="desktop-only">

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
          <a href="">Possuo cadastro</a>
          <img src="@/assets/Group 3.png" alt="" id="img">
        </div>
      </div>
    </div>

    <img src="@/assets/Group 2.png" alt="" id="g2" class="desktop-only">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

.container {
  display: flex;
  justify-content: center;   
  align-items: center;       
  min-height: 100vh;         
  font-family: "Varta", sans-serif;
  position: relative;
  background: #fff;
}

#cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  z-index: 1; 
}

#g1 {
  width: 320px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  
}

#g2 {
  width: 350px;
  height: auto;
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
  padding: 12px;
  border-radius: 12px;
  border: #BFBDA6 solid 1px;
  font-size: 18px;
}

button {
  margin-top: 10px;
  padding: 12px;
  border-radius: 7px;
  border: #2F402C solid 1px;
  background: #2F402C;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.botao-cadastro {
  display: flex;
  justify-content: center;  
  align-items: center;
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: #2F402C;
  font-family: "Varta", sans-serif;
  font-size: 16px;
  margin-right: 5px;
}

#img {
  height: 17px;
  width: 31px;
}

#kahvi {
  width: 180px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 20px;
  }

  .inputs {
    width: 90%;
  }

  #kahvi {
    width: 150px;
  }

  #g1,
  #g2 {
    display: none;
  }
}
</style>