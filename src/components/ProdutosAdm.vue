<script setup>
import { useProdutoStore } from '@/stores/produtos.js'
import { onMounted } from 'vue';

const produtoStore = useProdutoStore()

onMounted(() =>{
  produtoStore.buscarProdutosPorCategoria()
})

</script>

<template>
  <div class="admin-produtos">
    <div class="lista-produtos">
      <div 
        class="card-produto" 
        v-for="produto in produtoStore.produtos" 
        :key="produto.id"
      >
        <img :src="produto.imagem.url" class="img-produto" />

        <div class="info-produto">
          <h3>{{ produto.nome }}</h3>
          <p class="descricao">{{ produto.descricao }}</p>

          <p class="estoque" style="font-family: Arial, Helvetica, sans-serif;">Quantidade em estoque</p>

          <div class="quantidade">
            <button @click="diminuirQuantidade(produto)" :disabled="produto.quantidade <= 1">−</button>
            <span>{{ produto.quantidade }}</span>
            <button @click="aumentarQuantidade(produto)">+</button>
          </div>

          <div class="acoes">
            <button class="excluir" @click="excluirProduto(produto.id)">Excluir</button>
            <button class="editar" @click="editarProduto(produto)">Editar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="adicionar-container">
      <a href="add" class="btn-adicionar" @click="adicionarProduto" style="text-decoration: none;">Adicionar produto</a>
      <button class="btn-adicionar-2">Adicionar categoria</button>
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
