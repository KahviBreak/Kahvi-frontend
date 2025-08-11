<script setup>

import '@/assets/main.css'
import { ref } from 'vue'

const showMobileMenu = ref(false)
function toggleMenu() {
    showMobileMenu.value = !showMobileMenu.value
}


function closeMenu() {
    showMobileMenu.value = false
}


</script>

<template>
    <div id="menu">
        <img src="@/assets/Kahvi!.png" alt="Logo" id="logo" />

        <div id="togglemenu" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="menu-links">
            <p>Início</p>
            <p>Sobre nós</p>
            <p>Cardápio</p>
            <p>Faça seu pedido</p>
            <div id="pesquisa">
                <h1>Buscar</h1>
                <img src="@/assets/Iconpesquisa.png" alt="Buscar" id="icon-pesquisa">
            </div>
              <div id="icons-end">
            <img src="@/assets/circle.png" alt="Carrinho" id="basket">
            <img src="@/assets/user-profile-03.png" alt="Usuário" id="user">
        </div>
        </div>

      



        <div v-if="showMobileMenu" id="mobile-menu">
            <button id="close-menu" @click="closeMenu"><img src="@/assets/images/close.png" alt=""></button>
            <ul id="ul-links">
                <router-link>
                    <li @click="toggleMenu">INÍCIO</li>
                </router-link>
                <router-link>
                    <li @click="toggleMenu">SOBRE NÓS</li>
                </router-link>
                <router-link>
                    <li @click="toggleMenu">CARDÁPIO</li>
                </router-link>
                <router-link>
                    <li @click="toggleMenu">FAÇA SEU PEDIDO</li>
                </router-link>
            </ul>
            <p>ACOMPANHE <span style="color: rgba(39, 54, 37, 1);">KAHVI!</span> NAS REDES SOCIAIS</p>
            <div id="redes-sociais">
                <button id="button-logo"><img src="@/assets/images/logoinsta.png" alt="insta"
                        id="logo-sociais"></button>
                <button id="button-logo"><img src="@/assets/images/Vector.png" alt="tiktok" id="logo-sociais"></button>

            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

* {
    text-decoration: none;
}

#menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    position: relative;
    justify-content: space-between;
}

#logo {
    width: 80px;
    height: 80px;
    margin-left: 70px;
}

#menu-links {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

#menu-links p {
    background-color: white;
    color: #5F7B5B;
    font-family: "Varta", sans-serif;
    font-size: 25px;
    cursor: pointer;
}

#menu-links :hover {
    color: #273625;
    font-size: 25px;
}

#pesquisa {
    background-color: #5F7B5B;
    height: 38px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    min-width: 100px;
    max-width: 332px;
    flex: 1;
}

#icon-pesquisa {
    height: 24px;
    width: 24px;
}

#icons-end {
    display: flex;
    align-items: center;
    margin-left: 70px;
    gap: 30px;
}

h1 {
    color: white;
    font-family: "Varta", sans-serif;
    font-size: 25px;
    font-weight: 200;
    margin: 10px 5px 5px 5px;
}

#basket,
#user {
    height: 50px;
    width: 50px;
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
    background: #FFFFFF;
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.3s;
}

#mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #5F7B5B;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


#mobile-menu p {
    background-color: #5F7B5B;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 100px 50px 15px 50px;
    text-align: left;
}


#ul-links {
    font-size: 20px;
    background-color: #5F7B5B;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    margin-bottom: 20px;
}

#ul-links :hover {
    color: #273625;
    font-size: 18px;
}


#ul-links li {
    margin: 15px;
    color: #FFFFFF;

}


#close-menu {
    background-color: #5F7B5B;
    border: none;
    color: white;
    font-size: 24px;
    width: 20px;
    margin: 5px 15px 5px auto;
}


#close-menu img {
    width: 28px;
}


#redes-sociais {
    display: flex;
    margin-left: 35px;
}

#button-logo {
    background-color: #2f402cc5;
    border: none;
    width: 110px;
    height: 110px;
    margin: 0 5px 20px 10px;
    border-radius: 3px;
}


#logo-sociais {
    width: 30px;
}


@media (max-width: 900px) {

    h1,
    p {
        font-size: 22px;
    }

    #menu{
        background-color: #5F7B5B;
    }

    #logo {
        width: 80px;
        height: 80px;
        content: url('@/assets/Kahvi!9.png');
    }

    #basket,
    #user {
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


}

@media (max-width: 500px) {
    #logo {
        width: 60px;
        height: 60px;
    }

    h1,
    #mobile-menu p {
        font-size: 20px;
    }
}
</style>
