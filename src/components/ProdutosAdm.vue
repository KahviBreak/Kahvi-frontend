<script setup>
import { ref } from 'vue'

const produtos = ref([
  {
    id: 1,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },
  {
    id: 2,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },
  {
    id: 3,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },
  {
    id: 4,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },
  {
    id: 4,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },{
    id: 4,
    nome: 'Focaccia de Alecrim',
    descricao: 'Focaccia macia com aroma fresco de alecrim.',
    quantidade: ref(1),
    preco: 10,
    imagem: 'Frame 29.png',
  },
])

const getImage = (img) =>
  new URL(`../assets/${img}`, import.meta.url).href
</script>

<template>
  <div class="admin-produtos">
    <div class="lista-produtos">
      <div class="card-produto" v-for="item in produtos" :key="item.id">
        <img :src="getImage(item.imagem)" class="img-produto" />

        <div class="info-produto">
          <h3>{{ item.nome }}</h3>
          <p class="descricao">{{ item.descricao }}</p>

          <p class="estoque">Quantidade em estoque</p>

          <div class="quantidade">
            <button @click="item.quantidade--" :disabled="item.quantidade <= 1">−</button>
            <span>{{ item.quantidade }}</span>
            <button @click="item.quantidade++">+</button>
          </div>

          <div class="acoes">
            <button class="excluir">Excluir</button>
            <button class="editar">Editar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="adicionar-container">
      <button class="btn-adicionar">Adicionar produto</button>
      <button class="btn-adicionar-2">Adicionar cateoriga</button>
    </div>
  </div>
</template>

<style scoped>
.admin-produtos {
  width: 90%;
  margin: 0 auto;
  margin-top: 2%;
}

.lista-produtos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.card-produto {
  display: flex;
  background: #f1ede8;
  border-radius: 8px;
  padding: 15px;
  align-items: flex-start;
  min-height: 180px;
}

.img-produto {
  width: 100px;
  height: 120px;
  border-radius: 6px;
  background: white;
  object-fit: cover;
  margin-right: 15px;
  margin-top: 5%;
}

.info-produto{
    margin-top: 5%;
}

.info-produto h3 {
  font-family: 'Overlock';
  font-weight: 700;
  font-size: 18px;
  color: #402B19;
  margin-bottom: 4px;
}

.descricao {
  font-family: 'Overpass';
  font-size: 14px;
  font-weight: 500;
  color: #93755C;
  margin-bottom: 8px;
}

.estoque {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #402B19;
}

.quantidade {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  width: fit-content;
}

.quantidade button {
  background: white;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
}

.quantidade span {
  margin: 0 6px;
  min-width: 20px;
  text-align: center;
}

.acoes {
  display: flex;
  gap: 12px;
}

.excluir {
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 14px;
  color: #FF0000;
  border: none;
  background: transparent;
  cursor: pointer;
}

.editar {
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 14px;
  color: #402B19;
  border: none;
  background: transparent;
  cursor: pointer;
}

.adicionar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
padding-left: 33%;
padding-right: 33%;
}

.btn-adicionar {

  background: #5F7B5B;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 6px;
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 2%;
}

.btn-adicionar-2 {

  background: #C2E0BD;
  color: #5F7B5B;
  border: none;
  padding: 12px 40px;
  border-radius: 6px;
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
}


@media (max-width: 768px) {

    .lista-produtos{
        display: grid;
        grid-template-columns: 1fr;
    }
  .card-produto {
    display: flex;
  flex-direction: row;
  gap: 5px;
  }

  .img-produto {
  width: 100px;
  height: 140px;
}

}


</style>
