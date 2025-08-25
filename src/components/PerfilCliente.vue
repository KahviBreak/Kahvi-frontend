<script setup>
import { ref } from 'vue'
const autenticacao = ref({
    admin: true,
    usuario: false,
})
</script>

<template>
    <div class="container">
        <div class="voltar">
            <router-link to="/">
                <img src="/src/assets/voltar.png" alt="">
            </router-link>
        </div>
        <img class="imagem" src="/src/assets/perfil.png" alt="perfil">

        <div class="inputsAdmin" v-if="admin = true">
            <label for="nome">NOME</label>
            <input type="text" name="nome" id="nome">
            <label for="email">EMAIL</label>
            <input type="email" name="email" id="email">
            <label for="CPF">CPF</label>
            <input type="text" name="CPF" id="CPF">
            <label for="telefone">TELEFONE</label>
            <input type="number" name="telefone" id="telefone">

        </div>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Yaldevi Colombo Medium', sans-serif;
}

.voltar {
  align-self: flex-start;
  margin-left: 10px;
}

.imagem {
  object-fit: cover;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 20px 0;
  background: #d9d3cd;
}

.inputsAdmin {
  display: grid;
  gap: 12px;
  width: 280px;
}

label {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #5F7B5B;
}

input {
  width: 100%;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 2px 8px;
  font-size: 14px;
  background: #fff;
}
</style>