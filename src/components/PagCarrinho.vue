<script setup>
import { ref, } from 'vue'
const produto = ref(null)

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
])

const getImage = (img) =>
    new URL(`../assets/${img}`, import.meta.url).href
</script>

<template>
    <div class="carrinho">
        <div class="lista-produtos">
            <div class="card-produto" v-for="item in produtos" :key="item.id">
                <img :src="getImage(item.imagem)" class="img-produto" />

                <div class="info-produto">
                    <h3>{{ item.nome }}</h3>
                    <p>{{ item.descricao }}</p>

                    <div class="quantidade">
                        <button @click="item.quantidade--" :disabled="item.quantidade <= 1">−</button>
                        <span>{{ item.quantidade }}</span>
                        <button @click="item.quantidade++">+</button>
                    </div>

                    <strong>R$ {{ item.preco }}</strong>
                    <button class="excluir">Excluir</button>
                </div>
            </div>
        </div>

        <div class="resumo-pedido">
            <h4>Produtos ({{ produtos.length }})</h4>
            <div class="total">
                <span>Total</span>
                <strong>R$ {{ total }}</strong>
            </div>
            <button class="finalizar">Finalizar Pedido</button>
        </div>
    </div>
</template>

<style scoped>
.carrinho {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
}

.lista-produtos {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-produto {
  display: flex;
  background: #f1ede8;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  height: 225px;
}

.img-produto {
  width: 150px;
  height: 170px;
  border-radius: 12px;
  background: white;
  object-fit: cover;
    margin-left: 3%;
}

.info-produto {

  margin-left: 15px;

}

.info-produto h3 {
  margin: 0;
  font-size: 1rem;
}

.info-produto p {
  margin: 2px 0 8px 0;
  font-size: 0.85rem;
  color: #444;
}

.quantidade {
  display: flex;
  align-items: center;
  margin: 6px 0;
}

.quantidade button {
  background: white;
  border: 1px solid #ccc;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
}

.quantidade span {
  margin: 0 8px;
  min-width: 20px;
  text-align: center;
}

.excluir {
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0;
  margin-top: 6px;
}

.resumo-pedido {
  background: #f1ede8;
  border-radius: 8px;
  padding: 15px;
  height: 225px;
}

.resumo-pedido h4 {
  margin: 0 0 15px;
}

.total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 15px;
}

.finalizar {
  background: #4e6b4e;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>