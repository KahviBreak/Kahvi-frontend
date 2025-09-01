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
                    <p class="descricao">{{ item.descricao }}</p>

                    <div class="number">
                    <div class="quantidade">
                        <button @click="item.quantidade--" :disabled="item.quantidade <= 1">−</button>
                        <span>{{ item.quantidade }}</span>
                        <button @click="item.quantidade++">+</button>
                    </div>
                    <p class="preco">R$ {{ item.preco }}</p>
                    </div>

                    <button class="excluir">Excluir</button>
                </div>
            </div>
        </div>

        <div class="resumo-pedido">
            <div class="espacomento-resumo">
                <h4>Produtos ({{ produtos.length }})</h4>
                <div class="total">
                    <span class="total-dois">Total</span>
                    <p class="total-tres">R$XX</p>
                </div>
                <button class="finalizar">Finalizar Pedido</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');
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
    margin-bottom: 2%;
font-family: 'Overlock';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #402B19;
}

.descricao{
    margin-bottom: 8%;
font-family: 'Overpass';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #93755C;
}

.quantidade {
    display: flex;
    align-items: center;
    margin: 6px 0;
    background: white;
    border: 1px solid #ccc;
}

.quantidade button {
    background: white;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.quantidade span {
    margin: 0 8px;
    min-width: 20px;
    text-align: center;
}
.number{
    display: flex;
    margin-bottom: 4%;
}

.preco{
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 30px;
color: #402B19;
margin-left: 40%;
margin-top: 2%;
}

.excluir {
font-family: 'Outfit';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;
color: #FF0000;
border: none;
cursor: pointer;
}

.resumo-pedido {
    background: #f1ede8;
    border-radius: 8px;
    padding: 15px;
    height: 225px;
}

.resumo-pedido h4 {
    margin: 0 0 15px;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #402B19;
    margin-left: 10%;
}

.espacomento-resumo {
    margin-top: 5%;
}

.total-dois {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #5F7B5B;
    margin-left: 10%;
    margin-top: 5%;
}

.total {
    display: flex;
    font-weight: bold;
    margin-bottom: 15px;
}

.total-tres {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #402B19;
    margin-left: 52%;
    margin-top: 5%;
}

.finalizar {
    background: #4e6b4e;
    color: white;
    border: none;
    padding: 12px;
    width: 80%;
    border-radius: 6px;
    cursor: pointer;
    height: 100%;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    justify-self: center;
    justify-content: center;
}
</style>