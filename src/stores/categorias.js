import { defineStore } from 'pinia'

export const useCategoriaStore = defineStore('categoria', {
    state: () => ({
        categorias: [
            {id: 1, nome: 'tudo'},
            {id: 2, nome: 'bolos'},
            {id: 3, nome: 'sobremesas'},
            {id: 4, nome: 'salgados'},
            {id: 5, nome: 'bebidas geladas'},
            {id: 6, nome: 'bebidas quentes'},
            {id: 7, nome: 'outros'}
        ]
    })
})
export default useCategoriaStore;