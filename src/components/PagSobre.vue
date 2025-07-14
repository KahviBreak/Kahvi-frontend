<script setup>
</script>

<template>
    <div class="desktop">
        <img src="@/assets/Group 31.png" alt="">
        <div id="txt">
            <div id="hst">
                <h1>HISTÓRIA DO KAHVI!</h1>
                <p>Em 2025, um grupo de amigos apaixonados por café decidiu transformar suas conversas diárias em algo
                    maior. Eles sempre se encontravam em uma charmosa esquina da cidade para compartilhar ideias,
                    risadas e, claro, uma boa xícara de café. </p>
                <p>Inspirados por esses encontros e pelo desejo de oferecer algo único, nasceu a Kahvi, uma cafeteria
                    que une tradição, inovação e muito sabor.</p>
                <p>Desde o início, a missão da Kahvi foi clara: oferecer cafés de qualidade superior, com sabores
                    marcantes e aromas que despertam memórias. Mesmo jovem, a marca já chegou inovando, com grãos
                    selecionados de pequenos produtores, opções de cafés aromatizados, métodos de preparo diferenciados
                    e um ambiente acolhedor que convida à pausa e à conexão.</p>
                <p>Mais do que uma cafeteria, a Kahvi é um ponto de encontro moderno, onde cada detalhe foi pensado para
                    transformar o simples ato de tomar café em uma experiência sensorial. É o começo de uma história que
                    promete marcar presença no coração de quem ama café.</p>
            </div>
            <div id="paixao">
                <h1>PAIXÃO POR CAFÉ</h1>
                <p>Kahvi! entende que tomar um bom café é um momento especial, e por isso seleciona cuidadosamente os
                    grãos para criar cafés com aromas envolventes e intensos.</p>
                <p>A marca expressa sua paixão por cafés através de uma grande variedade de blends proporcionando
                    sabores marcantes para serem apreciados por consumidores que buscam por uma qualidade superior,
                    transformando café em uma jornada de paixão.</p>
                <p>Kahvi, Paixão por café.</p>
            </div>
        </div>
    </div>

    <div class="mobile">
        <img src="@/assets/785ef4b4-805f-442c-867a-ab4c6cc40d27 2.png" alt="">
        <h1>HISTÓRIA DO KAHVI!</h1>
        <p>Em 2025, um grupo de amigos apaixonados por café decidiu transformar suas conversas diárias em algo maior.
            Eles sempre se encontravam em uma charmosa esquina da cidade para compartilhar ideias, risadas e, claro, uma
            boa xícara de café. </p>
        <p>Inspirados por esses encontros e pelo desejo de oferecer algo único, nasceu a Kahvi, uma cafeteria que une
            tradição, inovação e muito sabor.</p>
        <p>Desde o início, a missão da Kahvi foi clara: oferecer cafés de qualidade superior, com sabores marcantes e
            aromas que despertam memórias. Mesmo jovem, a marca já chegou inovando, com grãos selecionados de pequenos
            produtores, opções de cafés aromatizados, métodos de preparo diferenciados e um ambiente acolhedor que
            convida à pausa e à conexão.</p>
        <p>Mais do que uma cafeteria, a Kahvi é um ponto de encontro moderno, onde cada detalhe foi pensado para
            transformar o simples ato de tomar café em uma experiência sensorial. É o começo de uma história que promete
            marcar presença no coração de quem ama café.</p>
       <div id="txt-2-mobile">
 <h1>PAIXÃO POR CAFÉ</h1>
        <p>Kahvi! entende que tomar um bom café é um momento especial, e por isso seleciona cuidadosamente os grãos para
            criar cafés com aromas envolventes e intensos.</p>
        <p>A marca expressa sua paixão por cafés através de uma grande variedade de blends proporcionando sabores
            marcantes para serem apreciados por consumidores que buscam por uma qualidade superior, transformando café
            em uma jornada de paixão.</p>
        <p style="padding-bottom: 15%;">Kahvi, Paixão por café.</p>
       </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300..700&display=swap');
@media (min-width: 850px) {
    .mobile {
        display: none;
    }

    img {
        width: 100%;
        margin-left: 0%;
        margin-bottom: 0;
        padding: 0;
    }

    * {
        font-family: "Spline Sans", sans-serif;
        background: #402B19;
        color: white;
        margin: 0;
    }

    #txt {
        margin: 0 !important;
        display: grid;
        grid-template-columns: 50% 50%;
    }

    #hst,
    #paixao {
        margin-left: 15%;
        margin-right: 15%;
    }

    #paixao {
        text-align: center;
    }

    h1 {
        margin-top: 15%;
        margin-bottom: 10%;
        text-align: center;
    }

    p {
        margin-bottom: 5%;
        font-size: 18px;
        line-height: 1.5;
    }
}

@media (max-width: 850px) {
    .desktop {
        display: none;
    }

    img {
        width: 100%;
    }

    * {
        font-family: "Spline Sans", sans-serif;
        background: #402B19;
        color: white;
        margin: 0;
    }

    h1{
        text-align: center;
        font-size: 20px;
        margin: 5%;
    }
    p{
        margin-left: 15%;
        margin-right: 10%;
        margin-bottom: 5%;

    }
}

#txt-2-mobile{
    text-align: center;
}
</style>