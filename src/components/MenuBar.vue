<script setup>
import '@/assets/main.css'
import { ref } from 'vue'

const showMobileMenu = ref(false)
function toggleMenu() {
    showMobileMenu.value = !showMobileMenu.value
}

</script>

<template>
    <div id="menu">
          <div id="togglemenu" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img src="@/assets/Kahvi!.png" alt="n deu" id="logo">
        <div id="menu-links">
            <p>Início</p>
            <p>Sobre nós</p>
            <p>Cardápio</p>
            <p>Faça seu pedido</p>
        </div>
        <div id="pesquisa">
            <h1>Buscar</h1>
            <img src="@/assets/Iconpesquisa.png" alt="n funcionou" id="icon-pesquisa">
        </div>
        <div id="icons-end">
            <img src="@/assets/circle.png" alt="" id="basket">
            <img src="@/assets/user-profile-03.png" alt="" id="user">
        </div>
      
        <div v-if="showMobileMenu" id="mobile-menu">
            <p @click="toggleMenu">Início</p>
            <p @click="toggleMenu">Sobre nós</p>
            <p @click="toggleMenu">Cardápio</p>
            <p @click="toggleMenu">Faça seu pedido</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');
#menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    margin: 0px;
    height: 100px;
    padding: 0px;
    position: relative;
}
#menu-links {
    display: flex;
    flex-direction: row;
    flex: 1;
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
    justify-content: space-between;
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
    cursor: pointer;
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

#togglemenu {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
}
#togglemenu span {
    display: block;
    width: 30px;
    height: 4px;
    background: #5F7B5B;
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.3s;
}
#mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100vw;
    background: white;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
#mobile-menu p {
    margin: 20px;
    font-size: 24px;
}

@media (max-width: 900px) {
    #pesquisa {
        width: 200px;
        font-size: 18px;
    }
    h1 {
        font-size: 18px;
    }
    #logo {
        width: 70px;
        height: 70px;
    }
    #basket, #user {
        width: 36px;
        height: 36px;
    }
    p {
        font-size: 18px;
    }
}

@media (max-width: 700px) {
    #menu {
        flex-direction: row;
        height: auto;
        padding: 5px 0;
    }
    #menu-links, #icons-end {
        display: none;
    }
    #togglemenu {
        display: flex;
        margin-left: 50px;
    }
    #logo {
        margin-left: 80px;
    }
}

@media (max-width: 400px) {
    #logo {
        width: 70px;
        height: 70px;
        justify-content: center;
    }
    #mobile-menu p {
        font-size: 18px;
        display: flex;
        justify-content: center;
    }
}
</style>

