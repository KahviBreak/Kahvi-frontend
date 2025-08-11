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
        <img src="@/assets/Kahvi!.png" alt="Logo" id="logo" />
        <div id="menu-links">
            <p>Início</p>
            <p>Sobre nós</p>
            <p>Cardápio</p>
            <p>Faça seu pedido</p>
        </div>
        <div id="pesquisa">
            <h1>Buscar</h1>
            <img src="@/assets/Iconpesquisa.png" alt="Buscar" id="icon-pesquisa">
        </div>
        <div id="icons-end">
            <img src="@/assets/circle.png" alt="Carrinho" id="basket">
            <img src="@/assets/user-profile-03.png" alt="Usuário" id="user">
        </div>

        <div v-if="showMobileMenu" id="mobile-menu">
            <p @click="toggleMenu"><router-link to="/">Início</router-link></p>
            <p @click="toggleMenu"><router-link to="/">Sobre nós</router-link></p>
            <p @click="toggleMenu"><router-link to="/cardapio">Cardápio</router-link></p>
            <p @click="toggleMenu"><router-link to="/pedido">Faça seu pedido</router-link></p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

#menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    position: relative;
    justify-content: space-between;
    gap: 10px;
}

#logo {
    width: 100px;
    height: 100px;
}

#menu-links {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

#menu-links p,
#mobile-menu p {
    background-color: white;
    color: #5F7B5B;
    font-family: "Varta", sans-serif;
    font-size: 28px;
    margin: 0;
    cursor: pointer;
}

#pesquisa {
    background-color: #5F7B5B;
    height: 43px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    min-width: 200px;
    max-width: 432px;
    flex: 1;
}

#icon-pesquisa {
    height: 24px;
    width: 24px;
}

#icons-end {
    display: flex;
    align-items: center;
    gap: 20px;
}

h1 {
    color: white;
    font-family: "Varta", sans-serif;
    font-size: 28px;
    font-weight: 200;
    margin: 0;
}

#basket, #user {
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
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 10px 0;
}

#mobile-menu p {
    padding: 10px 20px;
    font-size: 20px;
    text-align: center;
}

@media (max-width: 900px) {
    h1, p {
        font-size: 22px;
    }
    #logo {
        width: 80px;
        height: 80px;
    }
    #basket, #user {
        width: 42px;
        height: 42px;
    }
    #pesquisa {
        width: 60%;
    }
}

@media (max-width: 1300px) {
    #menu-links,
    #icons-end {
        display: none;
    }
    #togglemenu {
        display: flex;
    }
    #logo {
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 500px) {
    #logo {
        width: 60px;
        height: 60px;
    }
    h1, #mobile-menu p {
        font-size: 18px;
    }
}
</style>
