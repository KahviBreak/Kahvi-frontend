<template>
  <div class="container">
    <h1>Pedidos</h1>

    <div class="cards">
      <div
        v-for="(pedido, index) in pedidos"
        :key="index"
        class="card"
      >
        <div class="image-container">
          <img
            src="@/assets/foccacia 1.png"
          />
          <span
            class="tag"
            :class="pedido.tipo === 'Delivery' ? 'delivery' : 'local'"
          >
            {{ pedido.tipo }}
          </span>
        </div>

        <div class="card-content">
          <p>2x Focaccia de Alecrim</p>
          <p>Obs: Sem alecrim</p>
          <p>2x Café Expresso</p>
          <p>1x Água sem gás</p>

          <div class="buttons">
            <button class="btn-ver">Ver pedido</button>
            <button class="btn-pronto">Pronto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pedidos",
  data() {
    return {
      pedidos: [
        { tipo: "Delivery" },
        { tipo: "No local" },
        { tipo: "Delivery" },
        { tipo: "Delivery" },
        { tipo: "No local" },
        { tipo: "Delivery" },
        { tipo: "Delivery" },
        { tipo: "No local" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #f2eee9;
  min-height: 100vh;
  padding: 30px;
  font-family: "Segoe UI", sans-serif;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 25px;
  color: #333;
}

/* 4 cards por linha */
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Responsividade */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

/* Card */
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

/* Imagem */
.image-container {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

/* Tag */
.tag {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 10px;
}

.delivery {
  background-color: #d3f3c2;
  color: #2d6b2f;
}

.local {
  background-color: #c9e4f8;
  color: #205b7a;
}

/* Conteúdo */
.card-content {
  padding: 12px 16px 18px;
  font-size: 14px;
  color: #444;
  line-height: 1.5;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

/* Botões */
.btn-ver {
  background-color: #f1e1a6;
  color: #333;
  border: none;
  padding: 6px 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-ver:hover {
  background-color: #e9d98f;
}

.btn-pronto {
  background-color: #b5d6a3;
  color: #333;
  border: none;
  padding: 6px 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-pronto:hover {
  background-color: #a1c38f;
}
</style>
