<script setup>
import '@/assets/main.css'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const showMobileMenu = ref(false)
function toggleMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
function closeMenu() {
  showMobileMenu.value = false
}
const store = useAuthStore()
</script>

<template>
  <!-- MENU ADMIN -->
  <div id="menuAdmin" v-if="store.user?.is_superuser === true">
    <img src="@/assets/Kahvi!white.png" alt="Logo" id="logo-admin" />

    <!-- Botão hamburguer -->
    <div id="togglemenu-admin" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Links desktop -->
    <div id="menu-links-admin">
      <router-link to="">Categorias</router-link>
      <router-link to="">Produtos</router-link>
      <router-link to="/pedido">Pedidos</router-link>
      <router-link to="/relatorio">Relatórios</router-link>
      <div id="pesquisa-admin">
        <h1>Buscar</h1>
        <img src="@/assets/Iconpesquisa-green.png" alt="Buscar" id="icon-pesquisa" />
      </div>
    </div>

    <div id="icons-end-admin">
      <img src="@/assets/user-profile-03-white.png" alt="Usuário" id="user" />
    </div>

    <!-- Menu mobile -->
    <div v-if="showMobileMenu" id="mobile-menu-admin">
      <button id="close-menu-admin" @click="closeMenu">
        <img src="@/assets/images/close.png" alt="Fechar" />
      </button>
      <ul id="ul-links-admin">
        <router-link>
          <li @click="toggleMenu">Categorias</li>
        </router-link>
        <router-link>
          <li @click="toggleMenu">Produtos</li>
        </router-link>
        <router-link to="/pedido">
          <li @click="toggleMenu">Pedidos</li>
        </router-link>
        <router-link to="/relatorios">
          <li @click="toggleMenu">Relatórios</li>
        </router-link>
      </ul>
    </div>
  </div>

  <!-- MENU USUÁRIO -->
  <div id="menu" v-else>
    <img src="@/assets/Kahvi!.png" alt="Logo" id="logo" />

    <div id="togglemenu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="menu-links">
      <router-link to="/"><p>Início</p></router-link>
      <router-link to="/sobre"><p>Sobre nós</p></router-link>
      <router-link to="/pedido"><p>Cardápio</p></router-link>
      <router-link to="/localizacao"><p>Localização</p></router-link>
      <div id="pesquisa">
        <h1>Buscar</h1>
        <img src="@/assets/Iconpesquisa.png" alt="Buscar" id="icon-pesquisa" />
      </div>
    </div>
    <div id="icons-end">
      <router-link to="/cart">
        <img src="@/assets/circle.png" alt="Carrinho" id="basket" />
      </router-link>
      <router-link to="/login">
        <img src="@/assets/user-profile-03.png" alt="Usuário" id="user" />
      </router-link>
    </div>

    <div v-if="showMobileMenu" id="mobile-menu">
      <button id="close-menu" @click="closeMenu">
        <img src="@/assets/images/close.png" alt="" />
      </button>
      <ul id="ul-links">
        <router-link><li @click="toggleMenu">INÍCIO</li></router-link>
        <router-link><li @click="toggleMenu">SOBRE NÓS</li></router-link>
        <router-link><li @click="toggleMenu">CARDÁPIO</li></router-link>
        <router-link><li @click="toggleMenu">FAÇA SEU PEDIDO</li></router-link>
      </ul>
      <p>
        ACOMPANHE <span style="color: rgba(39, 54, 37, 1)">KAHVI!</span> NAS REDES SOCIAIS
      </p>
      <div id="redes-sociais">
        <button id="button-logo">
          <img src="@/assets/images/logoinsta.png" alt="insta" id="logo-sociais" />
        </button>
        <button id="button-logo">
          <img src="@/assets/images/Vector.png" alt="tiktok" id="logo-sociais" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

* {
  text-decoration: none;
}

/* -------- MENU USUÁRIO -------- */
#menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  position: relative;
  justify-content: space-between;
}

/* -------- MENU ADMIN -------- */
#menuAdmin {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #5f7b5b;
  padding: 10px 20px;
  position: relative;
  justify-content: space-between;
}

#logo,
#logo-admin {
  width: 60px;
  height: 60px;
  margin-left: 70px;
}

/* Links usuário */
#menu-links {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  align-content: space-between;
}

#menu-links a {
  background-color: white;
  color: #5f7b5b;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin-top: 0.5%;
}

#menu-links :hover {
  color: #c8f7c2;
  font-size: 22px;
}

/* Links admin */
#menu-links-admin {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  align-content: space-between;
}

#menu-links-admin :deep(a) {
  color: white;
  text-decoration: none;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  cursor: pointer;
}

#menu-links-admin :deep(a:hover) {
  color: #c8f7c2;
}

/* Busca */
#pesquisa,
#pesquisa-admin {
  height: 38px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  min-width: 100px;
  max-width: 300px;
  flex: 1;
}

#pesquisa {
  background-color: #5f7b5b;
}

#pesquisa-admin {
  background-color: #ffffff;
}

/* Ícones */
#icons-end,
#icons-end-admin {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 4%;
}

#icon-pesquisa {
  height: 24px;
  width: 24px;
}

h1 {
  color: white;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  font-weight: 200;
  margin: 10px 5px 5px 5px;
}

#basket,
#user {
  height: 50px;
  width: 50px;
}

/* Hamburguer usuário */
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
  background: #ffffff;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}

/* Hamburguer admin */
#togglemenu-admin {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

#togglemenu-admin span {
  display: block;
  width: 30px;
  height: 4px;
  background: #ffffff;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}

/* Mobile menu usuário */
#mobile-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #5f7b5b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

#mobile-menu p {
  background-color: #5f7b5b;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin: 100px 50px 15px 50px;
  text-align: left;
}

/* Mobile menu admin */
#mobile-menu-admin {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #5f7b5b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

#ul-links,
#ul-links-admin {
  font-size: 20px;
  background-color: #5f7b5b;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-bottom: 20px;
}

#ul-links li,
#ul-links-admin li {
  margin: 15px;
  color: #ffffff;
  cursor: pointer;
}

#ul-links li:hover,
#ul-links-admin li:hover {
  color: #c8f7c2;
}

/* Fechar */
#close-menu,
#close-menu-admin {
  background-color: #5f7b5b;
  border: none;
  color: white;
  font-size: 24px;
  width: 20px;
  margin: 5px 15px 5px auto;
}

#close-menu img,
#close-menu-admin img {
  width: 28px;
}

/* Redes sociais (usuário) */
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

/* Responsividade usuário */
@media (max-width: 900px) {
  h1,
  p {
    font-size: 22px;
  }
  #menu {
    background-color: #5f7b5b;
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
  #icons-end,
  #menu-links-admin,
  #icons-end-admin {
    display: none;
  }
  #togglemenu,
  #togglemenu-admin {
    display: flex;
  }
}

@media (max-width: 500px) {
  #logo,
  #logo-admin {
    width: 60px;
    height: 60px;
  }
  h1,
  #mobile-menu p {
    font-size: 20px;
  }
}
</style>
