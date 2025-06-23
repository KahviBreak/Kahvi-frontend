import { defineStore } from 'pinia'

export const useProdutoStore = defineStore('produto', {
    state: () => ({
        produtos: [
            {id: 1, nome: 'Espresso de Brigadeiro', descricao: 'Espresso com leite cremoso, calda de brigadeiro e granulado de chocolate belga.', preco: 10.00},
            {id: 2, nome: 'Cokie Chocolate', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00},
            {id: 3, nome: 'Croassant', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00},
            {id: 4, nome: 'Cappuccino', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00},
            {id: 5, nome: 'Pão de Queijo', descricao: 'Tradicional mineiro, crocante por fora e macio por dentro, feito com queijo artesanal.', preco: 10.00},
            {id: 6, nome: 'Bolo de Paçoca', descricao: 'Massa fofa com paçoca e cobertura de doce de leite e amendoim.', preco: 10.00},
            {id: 7, nome: 'Croassant', descricao: 'loren', preco: 10.00},
            {id: 8, nome: 'Sanduíche Natural', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00},
            {id: 9, nome: 'Croassant', descricao: 'Massa folhada amanteigada, leve e crocante, assada diariamente.', preco: 10.00},
            {id: 10, nome: 'Mousse de Marácuja', descricao: 'Cremosa, com polpa natural de maracujá e toque cítrico refrescante.', preco: 10.00},
            {id: 11, nome: 'Bolo Red Velvet', descricao: 'Massa amanteigada com mix de frutas vermelhas frescas e cobertura de geleia artesanal.', preco: 10.00},
            {id: 12, nome: 'Pão de Mel Recheado', descricao: 'Massa de especiarias com recheio cremoso e cobertura de chocolate ao leite.', preco: 10.00},
        ]
    })
})