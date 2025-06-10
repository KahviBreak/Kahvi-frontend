<script setup>
import { ref } from 'vue'
import { useCouterStore } from '../stores/counter'

const store = useCouterStore()
const email = ref('')
const password = ref('')

function handleLogin() {
  store.login(email.value, password.value)
}
</script>

<template>
  <div class="container">
    <div class="decor decor-top">
      <img src="../assets/images/Group12.png" alt="" class="img-decor-top" />
    </div>
    <div class="decor decor-bottom">
      <img src="../assets/images/Group13.png" alt="" class="img-decor-bottom" />
    </div>

    <div class="content">
      <img src="../assets/images/Kahvi!2.png" alt="Logo Kahvi" class="logo" />

      <div class="form">
        <input type="email" placeholder="Email" class="input" v-model="email" />
        <input type="password" placeholder="Senha" class="input" v-model="password" />

        <button class="button" @click="handleLogin">LOGIN</button>

        <div class="register">
          <span>Não tem uma conta?</span>
          <a href="#">Criar &gt;&gt;</a>
        </div>

        <p v-if="store.error" style="color: red;">{{ store.error }}</p>
        <p v-if="store.isAuthenticated" style="color: green;">
          Bem-vindo, {{ store.email }}!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html,
.container {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 150px;
  max-width: 80%;
  margin-bottom: 10%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 300px;
  max-width: 90%;
}

.input {
  padding: 15px;
  border: 1px solid #bfbda6;
  border-radius: 12px;
  font-size: 1rem;
}

.input::placeholder {
  color: #55524c;
  font-weight: 600;
  font-family: 'Varta', sans-serif;
}

.button {
  padding: 15px;
  background-color: #2f402c;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Varta', sans-serif;
}

.button:hover {
  background-color: #3d543a;
}

.register {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 0.9rem;
  color: #2f402c;
  font-family: 'Varta', sans-serif;
}

.register a {
  text-decoration: none;
  color: #2f402c;
  font-weight: bold;
}

.register a:hover {
  text-decoration: underline;
}

.decor {
  position: absolute;
}

.decor-top {
  top: 0;
  right: 0;
}

.decor-bottom {
  bottom: 0;
  left: 0;
}

.img-decor-top {
  width: 280px;
}

.img-decor-bottom {
  width: 280px;
}

/* Responsividade */
@media (max-width: 850px) {
  .logo {
    width: 150px;
  }

  .form {
    width: 90%;
  }

  .img-decor-top{
    display: none;
  }

  .img-decor-bottom{
    display: none;
  }

}
</style>
