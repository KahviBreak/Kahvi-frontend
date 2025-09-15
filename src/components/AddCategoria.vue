<template>
    <div class="container">
        <h1> Adicionar Categoria</h1>
        <div class="input">
            <label for="">Nome categoria</label>
            <input type="text" name="" id="" placeholder="Ex: bolos">
        </div>
        <div class="buttons">
            <button>Salvar Categoria</button>
            <button>Remover Categoria</button>
        </div>
    </div>
</template>

<style scoped>



label {
  font-weight: 500;
  font-size: 18px;
  color: #5F7B5B;
}

input[type="text"] {
  box-sizing: border-box;
  width: 450px;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #C1B8B0;
  border-radius: 5px;
  margin-top: 0;
  padding: 0;
}

.input {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}

.buttons{
    display: grid;
    grid-template-columns: 1fr;
}

button {
  background-color: #556B4E;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 10%;
  font-family: 'Overpass';
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #FFFFFF;
  align-items: center;
  text-align: center;
}
</style>