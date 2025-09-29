<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import axios from 'axios'

const cartStore = useCartStore()

// lista de produtos do carrinho
const produtos = computed(() => cartStore.items)
const total = computed(() => cartStore.totalPrice)

// funções de controle
const aumentarQuantidade = (item) => {
  cartStore.addCart(item, 1)
}

const diminuirQuantidade = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const excluirProduto = (id) => {
  cartStore.removeCart(id)
}

// ✅ Enviar carrinho para o backend
const finalizarPedido = async () => {
  try {
    const pedido = {
      produtos: produtos.value.map(p => ({
        id: p.id,
        nome: p.nome,
        quantidade: p.quantity,
        preco: p.preco
      })),
      total: total.value
    }

    const response = await axios.post('https://kahvi-back.onrender.com/api/compras/', pedido)

    alert('✅ Pedido enviado com sucesso!')
    console.log('📦 Resposta do servidor:', response.data)

    // Limpa carrinho depois de finalizar
    cartStore.clearCart()
  } catch (error) {
    console.error('❌ Erro ao enviar pedido:', error)
    alert('Erro ao finalizar pedido.')
  }
}
</script>

<template>
  <div class="carrinho">
    <div class="lista-produtos">
      <div class="card-produto" v-for="item in produtos" :key="item.id">
        <img :src="item.imagem" class="img-produto" />

        <div class="info-produto">
          <h3>{{ item.nome }}</h3>
          <p class="descricao">{{ item.descricao }}</p>

          <div class="number">
            <div class="quantidade">
              <button @click="diminuirQuantidade(item)" :disabled="item.quantity <= 1">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="aumentarQuantidade(item)">+</button>
            </div>
            <p class="preco">R$ {{ item.preco }}</p>
          </div>
          <button class="excluir" @click="excluirProduto(item.id)">Excluir</button>
        </div>
      </div>
    </div>

    <div class="resumo-pedido">
      <div class="espacomento-resumo">
        <h4>Produtos ({{ produtos.length }})</h4>
        <div class="total">
          <span class="total-dois">Total</span>
          <p class="total-tres">R$ {{ total }}</p>
        </div>
        <button class="finalizar" @click="finalizarPedido">Finalizar Pedido</button>
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
    width: 100%;
    margin: 0 ;
}

.lista-produtos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
}

.card-produto {
    display: flex;
    background: #f1ede8;
    border-radius: 8px;
    padding: 15px;
    align-items: center;
    height: 225px;
    width: 100%;
    margin-left: 10%;
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

.descricao {
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

.number {
    display: flex;
    margin-bottom: 4%;
}

.preco {
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
    width: 500px;
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

@media (max-width: 500px) {

    .card-produto {
        height: 200px;
        width: 350px;
        margin: auto;
        margin-top: 4%;
        background: #ffff;
        border-radius: 8px;
        border:  solid 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


    }

    .carrinho {
        display: grid;
        grid-template-columns: none;
        background-color: #FDE9D0;
        justify-content: center;

    }

    /*93755C*/

    .img-produto {
        height: 190px;
    }



    .info-produto h3 {
        font-size: 18px;
        font-weight: 700;

    }

    .descricao {
        font-size: 12px;
        margin-bottom: 2%;
    }

    .number {
        display: grid;
        justify-content: space-between;
        flex-direction: column-reverse;

    }

    .preco {
        font-size: 15px;
        margin-left: 10%;
        line-height: normal;
        grid-row: 1;
    }

    .resumo-pedido {
        background: #ffff;
        border-radius: 8px;
        padding: 15px;
        height: 150px;
        width: 300px;
        justify-content: center;
        justify-self: center;
        border-radius: 8px;
        border:  solid 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);



    }

    .excluir {
        background-color: #ffff;
    }

    .resumo-pedido h4 {

        font-size: 18px;

    }

    .quantidade {
        border-radius: 9px;

    }

    .quantidade button {
        width: 18px;
        height: 28px;
        border-radius: 10px;
    }

    .total {
        width: 60px;
    }

    .finalizar {
        width: 80%;
        height: 40px;
        border-radius: 8px;
        padding: 6px;
        font-weight: 300;
    }

    .total-dois {
    font-size: 18px;
    line-height: 30px;
    color: #5F7B5B;
    margin: 0;
}

.total {
    display: flex;
    font-weight: bold;
    margin-bottom: 2px;
    margin: auto;
    width: 70%;
    gap: 110px;
}

.total-tres {
    font-size: 18px;
    line-height: 30px;
    color: #402B19;
    margin: 0;
}
}
@media (max-width: 400px) {

    .card-produto {
        height: 200px;
        width: 300px;
        margin: auto;
        margin-top: 4%;
        background: #ffff;
        border-radius: 8px;
        border:  solid 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);


    }

    .carrinho {
        display: grid;
        grid-template-columns: none;
        background-color: #FDE9D0;
        justify-content: center;

    }

    /*93755C*/

    .img-produto {
        height: 190px;
    }



    .info-produto h3 {
        font-size: 18px;
        font-weight: 700;

    }

    .descricao {
        font-size: 12px;
        margin-bottom: 2%;
    }

    .number {
        display: grid;
        justify-content: space-between;
        flex-direction: column-reverse;

    }

    .preco {
        font-size: 15px;
        margin-left: 10%;
        line-height: normal;
        grid-row: 1;
    }

    .resumo-pedido {
        background: #ffff;
        border-radius: 8px;
        padding: 15px;
        height: 150px;
        width: 300px;
        justify-content: center;
        justify-self: center;
        border-radius: 8px;
        border:  solid 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);



    }

    .excluir {
        background-color: #ffff;
    }

    .resumo-pedido h4 {

        font-size: 18px;

    }

    .quantidade {
        border-radius: 9px;

    }

    .quantidade button {
        width: 18px;
        height: 28px;
        border-radius: 10px;
    }

    .total {
        width: 60px;
    }

    .finalizar {
        width: 80%;
        height: 40px;
        border-radius: 8px;
        padding: 6px;
        font-weight: 300;
    }

    .total-dois {
    font-size: 18px;
    line-height: 30px;
    color: #5F7B5B;
    margin: 0;
}

.total {
    display: flex;
    font-weight: bold;
    margin-bottom: 2px;
    margin: auto;
    width: 70%;
    gap: 110px;
}

.total-tres {
    font-size: 18px;
    line-height: 30px;
    color: #402B19;
    margin: 0;
}
}

</style>