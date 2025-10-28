<template>
  <div class="localizacao-container">
    <!-- Banner -->
    <section class="banner">
      <p class="titulo1">NOSSA <br> LOCALIZAÇÃO</p>
      <img src="@/assets/cafe1.png" alt="Cafeteria Kahvi" />
    </section>

    <!-- Conteúdo -->
    <section class="content">
      <h2 class="titulo">Joinville - SC</h2>
      <div class="linha-title"></div>


      <div class="grid">
        <!-- Informações -->
        <div class="info">
          <div class="bloco">
            <div class="titulo-info">
<img src="@/assets/marker-02.png" alt="" class="marker">
            </div>
            <h3>Onde estamos</h3>
            <p>Rua dos Abacates, Glória - 111</p>
            <p style="margin-bottom: 8%;">Joinville/SC</p>

            <div style="display: flex;">
              <img src="@/assets/mail-03.png" alt="" style="width: 25px; height: 25px;">
            <p style="margin-left: 1%;">kahvicafeteria@gmail.com</p>
            </div>
            <div style="display: flex;">
            <img src="@/assets/phone-call-01.png" alt="" style="width: 25px; height: 25px;">
            <p style="margin-left: 1%;">+55 (47) 4002-8922</p>
            </div>
          </div>

          <div class="bloco">
            <div class="titulo-info">
              <img src="@/assets/Icon.png" alt="" class="marker02">
            </div>
            <strong>Horários de funcionamento</strong>
            <p>Seg. a Sáb.: 8h às 23h</p>
            <p>Dom.: 12h às 22h</p>
          </div>
        </div>

        <!-- Fotos -->
        <div class="fotos">
          <img src="@/assets/fachada.png" alt="Fachada da cafeteria" />
          <img src="@/assets/interior.png" alt="Interior da cafeteria" />
        </div>
      </div>

      <!-- Linha separadora -->
      <div class="linha"></div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Tai+Le&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Archivo+Black&family=Bebas+Neue&display=swap');

p{
   font-family: "Noto Sans Tai Le", sans-serif;
  font-weight: 100 !important;
  color: rgba(255, 255, 255, 0.699);
}

.localizacao-container {
  font-family: Arial, sans-serif !important;
  background-color: #2f3e2f;
  color: #fff;
}

.banner{
  position: relative;
  display: flex;}

.banner img {
  width: 100%;
  height: auto;
  display: block;
}

.titulo1{
position: absolute;
font-family: 'Alatsi';
margin-top: 30%;
margin-left: 5%;
font-size: 180px;
color: #FAE8D2;
line-height: 100%;
font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
}

.marker02{
  width: 30px;
  background: rgba(95, 123, 91, 0.4);
  padding: 3%;
  border-radius: 2px;
  margin-bottom: 1%;
}

.marker{
  width: 40px;
  background: rgba(95, 123, 91, 0.4);
  padding: 2%;
  border-radius: 2px;
  margin-bottom: 1%;
}

/* Conteúdo */
.content {
  background-color: #2f3e2f;
  padding: 40px 20px;
  margin-left: 5%;
  margin-top: 1%;
}

.titulo {
  font-size: 28px;
  margin-bottom: 30px;
  color: #f5f0e6;
}

/* Grid desktop */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Informações */
.info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 16px;
  line-height: 1.4;
}

.bloco {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.titulo-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.icon {
  font-size: 18px;
}

/* Fotos */
.fotos {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: -18%
}

.fotos img {
  width: 80%;
  border-radius: 6px;
  object-fit: cover;
}

/* Linha separadora */
.linha {
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.linha-title{
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 5%;
  width: 15%;
  margin-top: -1%;
}

/* Responsivo */
@media (max-width: 768px) {
.titulo1 {
    font-size: 70px;
    margin-top: 30%;
    margin-left: 7%;
    line-height: 95%;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .titulo {
    text-align: left;
  }


  .linha-title{
    display: none;
  }
  .info {
    text-align: left;
    align-items: left;
  }

  .titulo-info {
    justify-content: left;
  }

  .fotos img {
    max-width: 90%;
    margin: 0 auto !important;
    border-radius: 2px !important;
  }

  .fotos{
    margin-top: 3%;
    margin-left: 0 !important;
    margin-right: 7%;
  }
}
</style>
