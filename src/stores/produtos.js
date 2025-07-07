import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProdutoStore = defineStore('produto', () => {
    const produtos = ref([
            {id: 4, nome: 'Espresso de Brigadeiro', descricao: 'Espresso com leite cremoso, calda de brigadeiro e granulado de chocolate belga.', preco: 10.00, img: '../src/assets/images/expressobrigadeiro.png'},
            {id: 5, nome: 'Cokie Chocolate', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '../src/assets/images/cookie.png'},
            {id: 6, nome: 'Croassant', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '../src/assets/images/croassant.png'},
            {id: 7, nome: 'Cappuccino', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '../src/assets/images/cappuccino.png'},
            {id: 8, nome: 'Pão de Queijo', descricao: 'Tradicional mineiro, crocante por fora e macio por dentro, feito com queijo artesanal.', preco: 10.00, img: '../src/assets/images/paoqueijo.png'},
            {id: 9, nome: 'Bolo de Paçoca', descricao: 'Massa fofa com paçoca e cobertura de doce de leite e amendoim.', preco: 10.00, img: '../src/assets/images/bolopaçoca.png'},
            {id: 10, nome: 'Bolo de Goiaba com Canela', descricao: 'Bolo de canela com massa leve e toque de açúcar dourado.', preco: 10.00, img: '../src/assets/images/bologoiaba.png'},
            {id: 11, nome: 'Sanduíche Natural', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '../src/assets/images/sanduíchenatural.png'},
            {id: 12, nome: 'Bolo de Pistache', descricao: 'Pistache e amendoim juntos em um bolo leve e saboroso.', preco: 10.00, img: '../src/assets/images/bolopistache.png'},
            {id: 13, nome: 'Mousse de Marácuja', descricao: 'Cremosa, com polpa natural de maracujá e toque cítrico refrescante.', preco: 10.00, img: '../src/assets/images/moussemaracuja.png'},
            {id: 14, nome: 'Bolo Red Velvet', descricao: 'Massa amanteigada com mix de frutas vermelhas frescas e cobertura de geleia artesanal.', preco: 10.00, img: '../src/assets/images/boloredvelvet.png'},
            {id: 15, nome: 'Pão de Mel Recheado', descricao: 'Massa de especiarias com recheio cremoso e cobertura de chocolate ao leite.', preco: 10.00, img: '../src/assets/images/paodemel.png'},
    ])
    return { produtos };
})
export default useProdutoStore