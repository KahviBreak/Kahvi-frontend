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
    background-color: #F9ECDD;
    width: 100%;
}

#logokahvi {
    width: 80px;
    height: 80px;
    margin: 1% 22% 1% 2%
}

#logo-insta {
    width: 30px;
    height: 30px;
    margin-top: 0.5%;
    justify-content: center;
    margin-left: 18.5%;

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
    background-color: #F9ECDD;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: "Spline Sans", sans-serif;
    color: #402B19;
    width: 100%;
}

#info h1 {
    margin-top: 1%;
    font-weight: 500;
    font-size: 15px;
}

#info p {
    font-size: 15px;
    margin-bottom: 1%;
}

@media (max-width: 500px) {
    #footer {
    background-color: #F9ECDD;
    flex-direction: column;
    height: 50px;
    display: flex;
    align-items: center;
}


#logokahvi {
    width: 40px;
    height: 40px;
}

#logo-insta {
    width: 20px;
    height: 20px;
    margin-left: 9%;

}

#logo-tiktok {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

#info h1 {
    font-size: 14px;
}

#info p {
    font-size: 12px;
}
}

@media (max-width: 800px) {

#logokahvi {
    width: 40px;
    height: 40px;
}


#logo-tiktok {
    margin-left: 10px;
    width: 20px;
    height: 20px;
}

#logo-insta {
    margin-left: 18%;
    width: 20px;
    height: 20px;
}

}

@media (max-width: 1300px) {

#logokahvi {
    width: 55px;
    height: 55px;
}


#logo-tiktok {
    margin-left: 10px;
    width: 30px;
    height: 30px;
}

#logo-insta {
    margin-left: 19.5%;
    width: 30px;
    height: 30px;
}
}
</style>
