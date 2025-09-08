<script setup>
</script>

<template>
    <div class="home-container">
        <div class="home-content">
            <img class="logo" src="@/assets/Kahvi! 2.png" alt="Logo Kahvi" />
            <p class="slogan">
                A cafeteria online que transforma qualquer momento comum em uma pausa especial.
            </p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

.home-container {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/fundoHome.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    box-sizing: border-box;
}

.home-content {
    max-width: 600px;
    color: #6b3e2e;
}

.logo {
    width: 1000px;
    max-width: 100%;
}

.slogan {
    font-family: "Varta", sans-serif;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.5;
}

@media  (max-width: 640px) {

     .home-container {
        background-image: url("@/assets/fundoHomemobile.png");

    }

    .logo {
        width: 190px;
    }

    .slogan {
        font-size: 1.2rem;

    }
}

@media  (max-width: 768px) {

     .home-container {
        background-image: url("@/assets/fundoHomemobile.png");

    }

    .logo {
        width: 500px;
    }

    .slogan {
        font-size: 1.8rem;
    }
}

@media  (max-width: 500px) {
    .logo {
        width: 300px;
    }

    .slogan {
        font-size: 1.6rem;
    }
    .home-container {
        background-image: url("@/assets/fundoHomemobile.png");

    }
}

@media (max-width: 200px) {

    .home-container {
        background-image: url("@/assets/fundoHomemobile.png");

    }

    .logo {
        width: 250px;
    }

    .slogan {
        font-size: 1.6rem;
    }
}

/* Group 28 */

/* position: absolute;
width: 1475px;
height: 984px;
left: -18px;
top: 88px; */
</style>
