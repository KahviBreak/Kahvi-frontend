<template>
  <div class="pagina">
    <!-- Cabeçalho com título e filtro -->
    <header class="cabecalho">
      <h1>RELATÓRIO DE PEDIDOS</h1>

      <div class="dropdown">
        <button @click="aberto = !aberto" class="dropdown-btn">
          {{ labelSelecionado }}
          <span class="seta">▼</span>
        </button>

        <div v-if="aberto" class="dropdown-content">
          <button
            v-for="opcao in opcoes"
            :key="opcao.valor"
            @click="selecionar(opcao)"
          >
            {{ opcao.label }}
          </button>
        </div>
      </div>
    </header>

    <!-- Conteúdo muda conforme o filtro -->
    <main class="conteudo">
      <div v-if="filtroSelecionado === 'diario'">
        <!-- Resumo Geral -->
         <h2>Resumo Geral Diário</h2>
        <div class="resumo-geral">
          <div class="resumo-item">
            <span>Total de pedidos</span>
            <span>20</span>
          </div>
          <div class="resumo-item">
            <span>Valor total de vendas</span>
            <span>R$: 500,00</span>
          </div>
          <div class="resumo-item">
            <span>Produtos mais vendidos</span>
            <span>{{ produtos }}</span>
          </div>

        </div>
 <div class="pagamento">
            <span>Formas de pagamento</span>
            <span>Dinheiro, Cartão, Pix</span>
          </div>
        <!-- Lista detalhada de pedidos -->
         <h2>Lista Detalhada de Pedidos</h2>
        <div class="order-list">
          <table>
            <thead>
              <tr>
                <th>Nº do Pedido</th>
                <th>Data/Hora</th>
                <th>Produto(s)</th>
                <th>Quantidade</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pedido in pedidos" :key="pedido.numero">
                <td>{{ pedido.numero }}</td>
                <td>{{ pedido.dataHora }}</td>
                <td>{{ pedido.produtos.join(', ') }}</td>
                <td>{{ pedido.quantidade.join(', ') }}</td>
                <td>{{ pedido.pagamento }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Indicadores de Vendas -->
         <h2>Indicadores de Vendas</h2>
        <div class="indicadores-vendas">
          <div class="indicador-item">
            <span>Produto mais lucrativo:</span>
            <span>{{ indicadores.produtoMaisLucrativo }}</span>
          </div>
          <div class="indicador-item">
            <span>Horário de pico:</span>
            <span>{{ indicadores.horarioPico }}</span>
          </div>
          <div class="indicador-item">
            <span>Itens com menor saída:</span>
            <span>{{ indicadores.itensMenorSaida }}</span>
          </div>
        </div>

        <!-- Observações -->
         <h2>Reclamações ou elogios recebidos</h2>
        <div class="observacoes">
          <ul>
            <li v-for="(obs, index) in observacoes" :key="index">{{ obs }}</li>
          </ul>
        </div>
      </div>

      <div v-else-if="filtroSelecionado === 'semanal'">
          <!-- Resumo Geral -->
         <h2>Resumo Geral Semanal</h2>
        <div class="resumo-geral">
          <div class="resumo-item">
            <span>Total de pedidos</span>
            <span>20</span>
          </div>
          <div class="resumo-item">
            <span>Valor total de vendas</span>
            <span>R$: 500,00</span>
          </div>
          <div class="resumo-item">
            <span>Produtos mais vendidos</span>
            <span>{{ produtos }}</span>
          </div>

        </div>
 <div class="pagamento">
            <span>Formas de pagamento</span>
            <span>Dinheiro, Cartão, Pix</span>
          </div>
        <!-- Lista detalhada de pedidos -->
         <h2>Lista Detalhada de Pedidos</h2>
        <div class="order-list">
          <table>
            <thead>
              <tr>
                <th>Nº do Pedido</th>
                <th>Data/Hora</th>
                <th>Produto(s)</th>
                <th>Quantidade</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pedido in pedidos" :key="pedido.numero">
                <td>{{ pedido.numero }}</td>
                <td>{{ pedido.dataHora }}</td>
                <td>{{ pedido.produtos.join(', ') }}</td>
                <td>{{ pedido.quantidade.join(', ') }}</td>
                <td>{{ pedido.pagamento }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Indicadores de Vendas -->
         <h2>Indicadores de Vendas</h2>
        <div class="indicadores-vendas">
          <div class="indicador-item">
            <span>Produto mais lucrativo:</span>
            <span>{{ indicadores.produtoMaisLucrativo }}</span>
          </div>
          <div class="indicador-item">
            <span>Horário de pico:</span>
            <span>{{ indicadores.horarioPico }}</span>
          </div>
          <div class="indicador-item">
            <span>Itens com menor saída:</span>
            <span>{{ indicadores.itensMenorSaida }}</span>
          </div>
        </div>

        <!-- Observações -->
         <h2>Reclamações ou elogios recebidos</h2>
        <div class="observacoes">
          <ul>
            <li v-for="(obs, index) in observacoes" :key="index">{{ obs }}</li>
          </ul>
        </div>
      </div>

      <div v-else-if="filtroSelecionado === 'mensal'">
          <!-- Resumo Geral -->
         <h2>Resumo Geral Mensal</h2>
        <div class="resumo-geral">
          <div class="resumo-item">
            <span>Total de pedidos</span>
            <span>20</span>
          </div>
          <div class="resumo-item">
            <span>Valor total de vendas</span>
            <span>R$: 500,00</span>
          </div>
          <div class="resumo-item">
            <span>Produtos mais vendidos</span>
            <span>{{ produtos }}</span>
          </div>

        </div>
 <div class="pagamento">
            <span>Formas de pagamento</span>
            <span>Dinheiro, Cartão, Pix</span>
          </div>
        <!-- Lista detalhada de pedidos -->
         <h2>Lista Detalhada de Pedidos</h2>
        <div class="order-list">
          <table>
            <thead>
              <tr>
                <th>Nº do Pedido</th>
                <th>Data/Hora</th>
                <th>Produto(s)</th>
                <th>Quantidade</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pedido in pedidos" :key="pedido.numero">
                <td>{{ pedido.numero }}</td>
                <td>{{ pedido.dataHora }}</td>
                <td>{{ pedido.produtos.join(', ') }}</td>
                <td>{{ pedido.quantidade.join(', ') }}</td>
                <td>{{ pedido.pagamento }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Indicadores de Vendas -->
         <h2>Indicadores de Vendas</h2>
        <div class="indicadores-vendas">
          <div class="indicador-item">
            <span>Produto mais lucrativo:</span>
            <span>{{ indicadores.produtoMaisLucrativo }}</span>
          </div>
          <div class="indicador-item">
            <span>Horário de pico:</span>
            <span>{{ indicadores.horarioPico }}</span>
          </div>
          <div class="indicador-item">
            <span>Itens com menor saída:</span>
            <span>{{ indicadores.itensMenorSaida }}</span>
          </div>
        </div>

        <!-- Observações -->
         <h2>Reclamações ou elogios recebidos</h2>
        <div class="observacoes">
          <ul>
            <li v-for="(obs, index) in observacoes" :key="index">{{ obs }}</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const produtos = ref('Bolo, Pão de Queijo, Focaccia');

const aberto = ref(false);
const filtroSelecionado = ref("diario");

const opcoes = [
  { label: "Diário", valor: "diario" },
  { label: "Semanal", valor: "semanal" },
  { label: "Mensal", valor: "mensal" },
];

const labelSelecionado = ref("Diário");

function selecionar(opcao) {
  filtroSelecionado.value = opcao.valor;
  labelSelecionado.value = opcao.label;
  aberto.value = false;
}

const pedidos = ref([
  { numero: '001', dataHora: '25/08 09:50', produtos: ['Cappuccino'], quantidade: ['1'], pagamento: 'Pix' },
  { numero: '002', dataHora: '25/08 09:55', produtos: ['Cappuccino', 'Pão de Queijo'], quantidade: ['1', '3'], pagamento: 'Cartão' },
  { numero: '003', dataHora: '25/08 10:05', produtos: ['Cappuccino'], quantidade: ['1'], pagamento: 'Cartão' },
  { numero: '004', dataHora: '25/08 11:00', produtos: ['Mousse de Maracujá'], quantidade: ['2'], pagamento: 'Pix' }
]);

const indicadores = ref({
  produtoMaisLucrativo: 'Cappuccino',
  horarioPico: '9h às 10h',
  itensMenorSaida: 'Água'
});

const observacoes = ref([
  'Essa cafeteria é a melhor da região!',
  'Cappuccino excelente.',
  'Os baristas controlam as demandas muito bem.',
  'O cardápio transborda variedades sem contar que a apresentação é ótima.'
]);
</script>

<style scoped>
.pagina {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #fdfaf6;
}

H2{
  margin-bottom: 1%;
  color: #2F402C;
}

/* Cabeçalho */
.cabecalho {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  color: #2F402C;
}

.cabecalho h1 {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-btn {
  background: #C2E0BD;
  border: 1px solid #5F7B5B;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  color: #5F7B5B;
}

.dropdown-btn .seta {
  margin-left: 8px;
  font-size: 12px;
}

.dropdown-content {
  position: absolute;
  top: 120%;
  left: 0;
  min-width: 160px;
  background: #5F7B5B;
  border: 1px solid #5F7B5B;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 1000;
  color: white !important;
}


.dropdown-content button {
  display: block;
  width: 100%;
  padding: 10px 14px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
}

.dropdown-content button:hover {
  background-color: #f2f2f2;
}

/* Conteúdo */
.conteudo {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

/* Resumo Geral */
.resumo-geral {
  background-color: #dbe6d1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.resumo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
}

.pagamento {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: #5F7B5B;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

/* Lista de Pedidos */
.order-list {
  background-color: rgba(95, 123, 91, 0.2);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: rgba(95, 123, 91, 0.2);
  font-weight: bold;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #BC9E85;
}

/* Indicadores de vendas */
.indicadores-vendas {
  background-color: #dbe6d1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.indicador-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
}

/* Observações */
.observacoes {
  background-color: rgba(95, 123, 91, 0.2);
  padding: 20px;
  border-radius: 8px;
}

.observacoes ul {
  list-style: none;
  padding: 0;
}

.observacoes li {
  background-color: #5F7B5B;
  color: #fff;
  margin-bottom: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  width: fit-content;
}
</style>
