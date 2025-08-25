import { defineStore } from 'pinia';

export const useCardapioStore = defineStore('cardapio', {
  state: () => ({
    sobremesas: [
      'Brownie',
    'Cheesecake de Frutas Vermelhas',
        'Torta de Limão com Merengue',
        'Cookie Chocolate',
        'Pudim de Leite',
        'Mousse de Maracujá',
    'Donuts Artesanais (sabores variados)',
    ],
    salgados: [
      'Pão de Queijo',
        'Croissant de Presunto e Queijo',
        'Sanduíche Natural',
        'Focaccia de Alecrim',
        'Esfiha Vegana',
        'pinto',
    ],
    bolos: [
      'Bolo de Paçoca',
        'Bolo Red Velvet',
        'Bolo de Laranja',
        'Bolo de Chocolate com Brigadeiro',
        'Bolo de Banana com Canela',
    ],
    cafes: [
      'Espresso de Brigadeiro',
        'Café Coado',
       'Macchiato',
        'Cappuccino',
        'Mocha',
        'Latte',
        'Affogato',
        'Iced Coffee',
        'Frappuccino',
    ]
  })
});
