<script setup>
import '@/assets/main.css'
</script>

<template>
    <div id="menu">
    <img src="@/assets/Kahvi!.png" alt="n deu" id="logo">
            <p>Início</p>
            <p>Sobre nós</p>
            <p>Cardápio</p>
            <p>Faça seu pedido</p>
            <div id="pesquisa">
            <h1>Buscar</h1>
            <img src="@/assets/Iconpesquisa.png" alt="n funcionou" id="icon-pesquisa">
            </div>
            <div id="icons-end">
                <img src="@/assets/circle.png" alt="" id="basket">
                <img src="@/assets/user-profile-03.png" alt="" id="user">
            </div>

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');
#menu {
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 0px;
    height: 100px;
    padding: 0px;
}
#pesquisa{
    background-color: #5F7B5B;
    margin-left: 6%;
    height: 43px;
    width: 432px;
    border-radius: 15px;
    margin-top: 1.8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}
#icon-pesquisa{
    height: 24px;
    width: 24px;
    margin: 2%;
    margin-right:5%;
}
#icons-end{
    display: flex;
    gap: 30%;
    margin-top: 1.5%;
    margin-left: 4%;
}
h1{
    color: white;
    font-family: "Varta", sans-serif;
    font-size: 28px;
    margin-left: 5%;
    margin-top: 1%;
    font-weight: 200;
}
p{
    background-color: white;
    color: #5F7B5B;
    font-family: "Varta", sans-serif;
    font-size: 28px;
    margin-left: 5%;
    margin-top: 2%;
}
#logo{
    margin-left: 3%;
    width: 100px;
    height: 100px;
    margin-top: 1%;
}
#basket, #user{
    height: 56px;
    width: 56px;
}

</style>