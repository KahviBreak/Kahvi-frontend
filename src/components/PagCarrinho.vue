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
    display: flex;
    gap: 20px;
}

.lista-produtos {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-produto {
    display: flex;
    background: #f1ede8;
    border-radius: 8px;
    padding: 10px;
    align-items: center;
}

.img-produto {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background: white;
    object-fit: cover;
}

.info-produto {
    margin-left: 10px;
    flex: 1;
}

.quantidade {
    display: flex;
    align-items: center;
    margin: 5px 0;
}

.quantidade button {
    background: white;
    border: 1px solid #ccc;
    width: 25px;
    height: 25px;
    border-radius: 4px;
}

.quantidade span {
    margin: 0 8px;
}

.excluir {
    color: red;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0;
}

.resumo-pedido {
    flex: 1;
    background: #f1ede8;
    padding: 15px;
    border-radius: 8px;
    height: fit-content;
}

.total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin: 10px 0;
}

.finalizar {
    background: #4e6b4e;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}
</style>