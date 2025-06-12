<script setup>
import '@/assets/main.css'
</script>

<template>
    <img src="@/assets/Group 1.png" alt="" id="g1">
    <div id="cadastro">
        <img src="@/assets/Kahvi!.png" alt="" id="kahvi">
        <input type="text" placeholder="Nome completo">
        <input type="text" placeholder="E-mail">
        <input type="text" placeholder="Nome de usuário">
        <input type="text" placeholder="Criar senha">
        <input type="text" placeholder="Confirmar senha">
        <button>CADASTRAR</button>
        <div class="botao-cadastro">
                    <a href="">Já possuo cadastro
        </a><img src="@/assets/Group 3.png" alt="" id="img">
        </div>

    </div>
    <img src="@/assets/Group 2.png" alt="" id="g2">
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300..700&display=swap');

#cadastro {
    display: flex;
    flex-direction: column;
    padding-left: 38%;
    padding-right: 38%;
    font-family: "Varta", sans-serif;


}

input {
    margin-top: 5%;
    padding: 4%;
    border-radius: 12px;
    border: #BFBDA6 solid 1px;
    font-size: 16px;
}
.botao-cadastro{
display: flex;
flex-direction: row;
align-self: center;
  white-space: nowrap;
  margin-top: 2%;
}
a {
    margin: 0;
    text-decoration: none;
    color: #2F402C;

    font-family: "Varta", sans-serif;
    font-size: 20px;
    margin-top: 2%;
    text-align: center;
    margin-left: 5%;
}

    #img{
        margin: 0;
        margin-top: 5%;
       height: 17px;
        width: 31px;
        margin-left: 0%;
    }


button {
    margin-top: 5%;
    padding: 4%;
    border-radius: 7px;
    border: #2F402C solid 1px;
    background: #2F402C;
    color: white;
    font-size: 20px;
}


#kahvi {
    width: 354px;
}

#g1 {
    margin: 0;
    padding: 0;
}

#g2 {
    display: grid;
    justify-content: end;
    align-items: end;
    align-self: flex-end;
    align-content: end;
}

h1 {
    background-color: white;
    color: #5F7B5B;
}

p {
    background-color: white;
    color: #5F7B5B;
    font-family: "Varta", sans-serif;
}

img {
    margin-left: 41px;
}
</style>