<script setup>
import '@/assets/main.css'
</script>

<template>
    <div id="menu">
    <img src="@/assets/Kahvi!.png" alt="n deu">
            <p>Início</p>
            <p>Cardápio</p>
            <p>Faça seu pedido</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');
#menu {
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 0px;
    height: 126px;
    padding: 0px;
}
h1{
    background-color: white;
    color: #5F7B5B;
}
p{
    background-color: white;
    color: #5F7B5B;
    font-family: "Varta", sans-serif;
}
img{
    margin-left: 41px;
}
</style>