<template>
  <d-container fluid class="about-container p-5">
    <d-row>
      <h1 class="title">¿Qué es fria.js?</h1>
    </d-row>
    <d-row>
      <d-col md="6">
        <d-row class="first-row">
          <d-col md="11">
            <d-row>
              <h2 class="description">
                fria.js es un proyecto internacional que busca integrar a los
                profesionales y aficionados de la tecnología en todo
                latinoamérica.
              </h2>
            </d-row>
          </d-col>
        </d-row>
        <d-row>
          <d-col md="11">
            <d-row>
              <h2 class="description">
                A través de diferentes formatos de eventos creamos un ambiente
                acogedor y propicio para el intercambio de ideas y el desarrollo
                de relaciones comerciales.
              </h2>
            </d-row>
          </d-col>
        </d-row>
      </d-col>
      <d-col md="6">
        <d-row class="first-row">
          <d-col md="6" sm="6" class="mt-2 mb-2">
            <d-row align-h="center">
              <stat value="+30" label="Eventos" />
            </d-row>
          </d-col>
          <d-col md="6" sm="6" class="mt-2 mb-2">
            <d-row align-h="center">
              <stat value="+1k" label="Integrantes" />
            </d-row>
          </d-col>
        </d-row>
        <d-row>
          <d-col md="6" sm="6" class="mt-2 mb-2">
            <d-row align-h="center">
              <stat value="1" label="Países" />
            </d-row>
          </d-col>
          <d-col md="6" sm="6" class="mt-2 mb-2">
            <d-row align-h="center">
              <stat value="1" label="Ciudades" />
            </d-row>
          </d-col>
        </d-row>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import { isXs } from "@/util/sizing";
import stat from "../components/stat";

export default {
  methods: {
    isXs
  },
  components: {
    stat
  }
};
</script>

<style scoped lang="scss">
.about-container {
  background-color: black;
}

.title {
  font-family: Montserrat, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
}

.description {
  font-family: Raleway, sans-serif;
  color: white;
  font-weight: 400;
  font-size: 20px;
}

.first-row {
  height: 9.5rem;
}

@media (max-width: 768px) {
  .first-row {
    height: auto;
  }
}

@media (min-width: 992px) {
  .first-row {
    height: auto;
  }
}


</style>
