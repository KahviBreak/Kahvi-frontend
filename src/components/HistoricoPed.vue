<template>
    <div class="fundo">
    <div class="container">
        <div class="titulo">
            <h1>HISTORICO DE PEDIDOS ANTERIORES <svg width="24" height="32" viewBox="0 0 24 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.4062 14.1875L4.5625 0.5625L0.90625 5.59375L18.1875 17.25L0.90625 28.25L4.6875 33.5625L25.6875 19.5625L24.4062 14.1875Z"
                        fill="#2F402C" />
                </svg>
            </h1>
        </div>
        <div class="data"> xx/xx/xxxx</div>
        <div class="pipo">
            <div class="produtos">
                <div>
                    <img src="../assets/Frame 18.png" alt="">
                    <p class="descricao">xxxxxxxxxx</p>
                </div>
                <div>
                    <img src="../assets/Frame 18.png" alt="">
                    <p class="descricao">xxxxxxxxxx</p>
                </div>
                <div>
                    <img src="../assets/Frame 18.png" alt="">
                    <p class="descricao">xxxxxxxxxx</p>
                </div>
                <div>
                    <img src="../assets/Frame 18.png" alt="">
                    <p class="descricao">xxxxxxxxxx</p>
                </div>
            </div>
            <div class="total">
                <p class="prod">Produtos (X)</p>
                <div class="preco">
                    <p class="tot">Total</p>
                    <p class="rs">R$XX</p>
                    <button>Pedir Novamente</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.fundo{
    background-color: #F1EDE8;
    padding-top: 3%;
}
.container {
    margin-left:5%;
    padding-bottom: 3%;
}

.titulo {
    width: 702px;
    font-family: 'NATS';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #2F402C;
}

.data {
    font-family: 'Varta';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #2F402C;
    margin-top: 3%;
}

.pipo {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.preco {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 7%;
}

.produtos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.prod {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #402B19;
}

.tot {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #5F7B5B;
}

.rs {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #402B19;
}

.total{
    margin-left: 20%;
}


button {
    width: 120%;
    height: 68px;
    background: #5F7B5B;
    border-radius: 8px;
    color: white;
    border: none;
font-family: 'Overpass';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
}
.descricao{
font-family: 'Overlock';
font-style: normal;
font-weight: 700;
font-size: 22px;
text-align: center;
color: #402B19;
}


</style>