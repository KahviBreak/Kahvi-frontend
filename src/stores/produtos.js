import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProdutoStore = defineStore('produto', () => {
    const produtos = ref([
            {id: 1, nome: 'Espresso de Brigadeiro', descricao: 'Espresso com leite cremoso, calda de brigadeiro e granulado de chocolate belga.', preco: 10.00, img: '@/public/images/expressobrigadeiro.png'},
            {id: 2, nome: 'Cokie Chocolate', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '@/public/images/cookie.png'},
            {id: 3, nome: 'Croassant', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '@/public/images/croassant.png'},
            {id: 4, nome: 'Cappuccino', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '@/public/images/cappuccino.png'},
            {id: 5, nome: 'Pão de Queijo', descricao: 'Tradicional mineiro, crocante por fora e macio por dentro, feito com queijo artesanal.', preco: 10.00, img: '@/public/images/paoqueijo.png'},
            {id: 6, nome: 'Bolo de Paçoca', descricao: 'Massa fofa com paçoca e cobertura de doce de leite e amendoim.', preco: 10.00, img: '@/public/images/bolopaçoca.png'},
            {id: 7, nome: 'Croassant', descricao: 'loren', preco: 10.00, img: '@/public/images/croassant.png'},
            {id: 8, nome: 'Sanduíche Natural', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '@/public/images/sanduíchenatural.png'},
            {id: 9, nome: 'Croassant', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00, img: '@/public/images/croassant.png'},
            {id: 10, nome: 'Mousse de Marácuja', descricao: 'Cremosa, com polpa natural de maracujá e toque cítrico refrescante.', preco: 10.00, img: '@/public/images/moussemaracuja.png'},
            {id: 11, nome: 'Bolo Red Velvet', descricao: 'Massa amanteigada com mix de frutas vermelhas frescas e cobertura de geleia artesanal.', preco: 10.00, img: '@/public/images/boloredvelvet.png'},
            {id: 12, nome: 'Pão de Mel Recheado', descricao: 'Massa de especiarias com recheio cremoso e cobertura de chocolate ao leite.', preco: 10.00, img: '@/public/images/paodemel.png'},
    ])
    return { produtos };
})
export default useProdutoStore