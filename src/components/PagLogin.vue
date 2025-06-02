<script setup>
</script>

<template>
  <div class="container">
    <!-- Decorações -->
    <div class="decor decor-top-left"><img src="../assets/images/Group5.png" alt=""></div>
    <div class="decor decor-top-right"><img src="../assets/images/Group6.png" alt=""></div>
    <div class="decor decor-bottom-left"><img src="../assets/images/Group7.png" alt=""></div>
    <div class="decor decor-bottom-right"><img src="../assets/images/Group8.png" alt=""></div>

    <!-- Conteúdo -->
    <div class="content">
      <img src="../assets/images/Kahvi! 2.png" alt="Logo Kahvi" class="logo"/>

      <div class="form">
        <input type="email" placeholder="Email" class="input"/>
        <input type="password" placeholder="Senha" class="input"/>

        <button class="button">LOGIN</button>

        <div class="register">
          <span>Não tem uma conta?</span>
          <a href="#">Criar &gt;&gt;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html, .container {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}

/* Container principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Conteúdo central */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Logo */
.logo {
  width: 200px;
  max-width: 80%;
}

/* Formulário */
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  max-width: 90%;
}

.input {
  padding: 15px;
  border: 1px solid #BFBDA6;
  border-radius: 12px;
  font-size: 1rem;
}

.input::placeholder {
  color: #55524C;
  font-weight: 600;
  text-align: center;
}

/* Botão */
.button {
  padding: 15px;
  background-color: #2F402C;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
}

.button:hover {
  background-color: #3d543a;
}

/* Texto de cadastro */
.register {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 0.9rem;
  color: #2F402C;
}

.register a {
  text-decoration: none;
  color: #2F402C;
  font-weight: bold;
}

.register a:hover {
  text-decoration: underline;
}

/* Bolas decorativas */
.decor {
  position: absolute;
}

.decor-top-left {
  top: 20px;
  left: 20px;
}

.decor-top-right {

  top: 30px;
  right: 30px;
}

.decor-bottom-left {

  bottom: 30px;
  left: 30px;
}

.decor-bottom-right {

  bottom: 20px;
  right: 20px;
}

/* Responsividade */
@media (max-width: 768px) {
  .decor-top-left,
  .decor-top-right,
  .decor-bottom-left,
  .decor-bottom-right {
    width: 80px;
    height: 80px;
  }

  .logo {
    width: 150px;
  }

  .form {
    width: 90%;
  }
}
</style>
