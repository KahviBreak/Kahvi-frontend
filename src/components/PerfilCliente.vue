<script setup>
import { ref } from 'vue'
const autenticacao = ref({
  admin: true,
  usuario: false,
})

const mudarVisualizacao = (evento) => {
  const valor = evento.target.value
  if (valor === 'administrador') {
    autenticacao.value.admin = true
    autenticacao.value.usuario = false
  } else if (valor === 'cliente') {
    autenticacao.value.admin = false
    autenticacao.value.usuario = true
  } else {
    autenticacao.value.admin = false
    autenticacao.value.usuario = false
  }
}
</script>

<template>
  <div class="container">
    <div class="voltar">
      <router-link to="/">
        <img src="/src/assets/voltar.png" alt="" />
      </router-link>
    </div>

    <img class="imagem" src="/src/assets/perfil.png" alt="perfil" />


    <div class="inputsAdmin" v-if="autenticacao.admin">
      <label for="nome">NOME</label>
      <input type="text" name="nome" id="nome" placeholder="Nome nome nome nome de nome" />
      <label for="email">EMAIL</label>
      <input type="email" name="email" id="email" placeholder="email@email.com"/>
      <label for="CPF">CPF</label>
      <input type="text" name="CPF" id="CPF" placeholder="111.111.111-11"/>
      <label for="telefone">TELEFONE</label>
      <input type="number" name="telefone" id="telefone" placeholder="+55 (99) 9 9999-9999" />
      <label for="visualizar">VISUALIZAR COMO</label>
      <select id="visualizar" name="visualizar" @change="mudarVisualizacao" style="font-size: 14px !important;">
        <option value="" style="font-size: 14px !important;">Visualizar Como</option>
        <option value="administrador" style="font-size: 14px !important;">Administrador</option>
        <option value="cliente" style="font-size: 14px !important;">Cliente</option>
      </select>

      <div>
        <button class="btn">SALVAR</button>
      </div>
    </div>


    <div class="inputsUsuario" v-else-if="autenticacao.usuario">
      <div class="grid">

        <div>
          <label for="nome">NOME</label>
          <input type="text" id="nome" placeholder="Nome nome nome nome de nome" />

          <label for="email">EMAIL</label>
          <input type="email" id="email" placeholder="email@email.com" />

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="111.111.111-11" />

          <label for="telefone">TELEFONE</label>
          <input type="text" id="telefone" placeholder="+55 (99) 9 9999-9999" />
        </div>


        <div>
          <label for="cep">CEP</label>
          <input type="text" id="cep" placeholder="99999-999" />

          <label for="endereco">ENDEREÇO</label>
          <input type="text" id="endereco" placeholder="R. Abacates 111, Glória, Joinville" />

          <label for="complemento">COMPLEMENTO</label>
          <input type="text" id="complemento" placeholder="Casa pau a pique" />

          <button class="btn-2"> SALVAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Yaldevi Colombo Medium', sans-serif;
  padding-bottom: 98px;
}

.voltar {
  align-self: flex-start;
  margin-left: 30px;
  margin-top: 30px;
}

.imagem {
  object-fit: cover;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin: 20px 0;
  background: #d9d3cd;
}


.inputsAdmin {
  display: flex;
  flex-direction: column;
  width: 370px;
}

.btn{
 background: #5F7B5B;
 border: none;
 color: white;
   font-weight: 500;
  font-size: 20px;
  margin-top: 6% !important;
  border-radius: 5px;
  padding: 2px 8px;
  width: 105%;
  margin-top: 0;
    height: 40px;

}

.btn-2{
 background: #5F7B5B;
 border: none;
 color: white;
   font-weight: 500;
  font-size: 20px;
  margin-top: 14% !important;
  border-radius: 5px;
  padding: 2px 8px;
  width: 105%;
  margin-top: 0;
    height: 40px;

}


.inputsUsuario .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 150px;
  width: 800px;
  height: 440px;
}

label {
  font-weight: 500;
  font-size: 20px;
  color: #5f7b5b;
  display: flex;
  margin-top: 6%;
}

input {
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 2px 8px;
  font-size: 14px;
  background: #fff;
  width: 100%;
  margin-top: 0;
}

.inputsUsuario input{
  height: 40px;
}

select {
  font-family: 'Varta';
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: #55524c;
  width: 388.5px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
}

@media (max-width: 768px){

}

@media (max-width: 500px){
  .imagem {
  width: 200px;
  height: 200px;
}
input {
  height: 40px;
}

.inputsAdmin {
  width: 320px;
}
select {
  width: 340px;
}
.container {
  padding-bottom: 190px;
}

.inputsUsuario .grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 7px;
  width: 320px;
  height: 440px;
}
}
</style>
