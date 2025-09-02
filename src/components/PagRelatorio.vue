<template>
  <div class="pagina">
    <!-- Cabeçalho com título e filtro -->
    <header class="cabecalho">
      <h1>RELATÓRIO DE  PEDIDOS</h1>

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
        <h2>Resumo geral</h2>
        <div>
          <p>Total de pedidos</p>
          <p>Valor Total de Vendas</p>
          <p>Produtos mais vendidos</p>
        </div>
        <div>
          <p>20</p>
          <p>R$: 500,00</p>
          <li v-for="(produto, index) in produtos" :key="index">{{ produto }}</li>
        </div>
      </div>

      <div v-else-if="filtroSelecionado === 'semanal'">
        <h2>📊 Relatório Semanal</h2>
        <p>Aqui vai o conteúdo completo do relatório semanal.</p>
      </div>

      <div v-else-if="filtroSelecionado === 'mensal'">
        <h2>📈 Relatório Mensal</h2>
        <p>Aqui vai o conteúdo completo do relatório mensal.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
const produtos = ref(["Bolo", "Pão de Queijo", "Focaccia"]);

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
</script>

<style scoped>
.pagina {
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* Cabeçalho */
.cabecalho {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; /* espaço entre título e dropdown */
  margin-bottom: 30px;
  color: #402B19;
}

.cabecalho h1 {
  margin: 0;
  font-size: 24px;
  text-align: center;
}

/* Dropdown */
.dropdown {
  position: relative;
  color: #402B19;}

.dropdown-btn {
  background: #fff;
  border: 1px solid #402B19;
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  color: #402B19;
}

.dropdown-btn .seta {
  margin-left: 8px;
  font-size: 12px;
}

.dropdown-content {
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 140px;
  background: #fff;
  border: 1px solid #402B19;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  z-index: 1000;
}

.dropdown-content button {
  display: block;
  width: 100%;
  padding: 8px 12px;
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
  text-align: center;
}
</style>
