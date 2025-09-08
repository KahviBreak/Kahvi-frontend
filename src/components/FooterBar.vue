<script setup>

</script>

<template>
    <div id="footer">
        <div id="footer-top">
            <img src="@/assets/Kahvi!.png" alt="logo" id="logokahvi">
            <img src="@/assets/Group 7.png" alt="logo-insta" id="logo-insta">
            <img src="@/assets/Vector.png" alt="logo-tiktok" id="logo-tiktok">
        </div>
        <div id="info">
            <h1>Gerenciar cookies</h1>
            <p>© 2025 KAHVI!. Todos os direitos reservados.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300..700&display=swap');

#footer {
    background-color: #F9ECDD;
    flex-direction: column;
    height: 100px;
    display: flex;
    align-items: center;
}

#footer-top {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #F9ECDD;
    padding: 3%;
}

#logokahvi {
    width: 80px;
    height: 80px;
    margin: 0 22% 0 2%
}

#logo-insta {
    width: 30px;
    height: 30px;
    margin-top: 0.5%;
    justify-content: center;
    margin-left: 18%;

}

#logo-tiktok {
    width: 30px;
    height: 30px;
    margin-left: 30px;
    margin-top: 0.8%;
    justify-content: center;

}

#info {
    border-top: 2px solid #BC9E85;
    width: 100%;
    background-color: #F9ECDD;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: "Spline Sans", sans-serif;
    padding: 1%;
    color: #402B19;
}

#info h1 {
    margin-top: 1%;
    font-weight: 500;
    font-size: 15px;
}

#info p {
    font-size: 15px;
}

@media (max-width: 500px) {
    #footer {
        background-color: #5F7B5B;
        flex-direction: column;
        height: 50px;
        display: flex;
        align-items: center;
    }

    #footer-top,
    #info{
        display: none;
    }


}
</style>
