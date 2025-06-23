<script setup>
const products = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    price: 'XX,XX',
    image: '/src/assets/bolos/bolo-chocolate.png'
  },
  {
    id: 2,
    name: 'Bolo de Cenoura',
    price: 'XX,XX',
    image: '/src/assets/bolos/bolo-cenoura.png'
  },
  {
    id: 3,
    name: 'Bolo Red Velvet',
    price: 'XX,XX',
    image: '/src/assets/bolos/red-velvet.png'
  },
  {
    id: 4,
    name: 'Bolo cu verde',
    price: 'XX,XX',
    image: '/src/assets/bolos/red-velvet.png'
  },
  // ... Adicione quantos produtos quiser
]
</script>

<template>
  <div class="product-grid">
    <div v-for="product in products" :key="product.id" class="product-card">
      
      <img :src="product.image" :alt="product.name" class="product-image" />

      <h3 class="product-name">{{ product.name }}</h3>

      <p class="product-price">R$ {{ product.price }}</p>

      <button class="add-button">ADD 🛒</button>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 15px;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #333;
}

.product-price {
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}

.add-button {
  background-color: #2e5e34; /* Verde escuro (igual ao da navbar) */
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #1e3d23;
}
</style>