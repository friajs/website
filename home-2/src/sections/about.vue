<template>
  <d-container fluid class="about-container p-5">
    <d-row>
      <d-col md="6">
        <h1 class="title">¿Qué es fria.js?</h1>
      </d-col>
    </d-row>
    <d-row>
      <d-col md="6">
        <h2 class="description">
          fria.js es un proyecto internacional que busca integrar a los
          profesionales y aficionados de la tecnología en todo latinoamérica.
        </h2>
      </d-col>
      <d-col md="3">
        <h2 class="stat-num">+30</h2>
        <hr class="stat-divider" />
        <h3 class="stat-label">Eventos</h3>
      </d-col>
      <d-col md="3">
        <h2 class="stat-num">+1000</h2>
        <hr class="stat-divider" />
        <h3 class="stat-label">Integrantes</h3>
      </d-col>
    </d-row>
    <d-row class="mt-4">
      <d-col md="6">
        <h2 class="description">
          A través de diferentes formatos de eventos creamos un ambiente
          acogedor y propicio para el intercambio de ideas y el desarrollo de
          relaciones comerciales.
        </h2>
      </d-col>
      <d-col md="3">
        <h2 class="stat-num">1</h2>
        <hr class="stat-divider" />
        <h3 class="stat-label">Países</h3>
      </d-col>
      <d-col md="3">
        <h2 class="stat-num">1</h2>
        <hr class="stat-divider" />
        <h3 class="stat-label">Ciudades</h3>
      </d-col>
    </d-row>
  </d-container>
</template>

<style scoped lang="scss">
.about-container {
  background-color: black;
}

.title {
  font-family: Montserrat, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 48px;
}

.description {
  font-family: Raleway, sans-serif;
  color: white;
  font-weight: 400;
  font-size: 20px;
}

.stat-num {
  font-family: Montserrat, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 42px;
}

.stat-label {
  font-family: Raleway, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 26px;
}

.stat-divider {
  color: #387948;
  border-top: 0.3rem solid;
  width: 7rem;
  margin-left: 0;
  margin-bottom: 0.3rem;
}
</style>
