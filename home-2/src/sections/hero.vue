<template>
  <div id="app" class="vh-100 min-vh-100 ">
    <d-container fluid class="h-7">
      <d-row no-gutters>
        <d-col>
          <d-row align-h="start" align-v="center">
            <!--            <d-img src="./assets/images/logo.svg" class="mr-3 ml-5" />-->
            <img
              alt="fria.js logo"
              src="../assets/images/logo.svg"
              width="60"
              height="60"
              class="ml-3"
            />
            <span id="nav-title" class="mt-2"> fria.js </span>
          </d-row>
        </d-col>
        <d-col no-gutters>
          <d-navbar toggleable="md" id="navbar">
            <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>

            <d-collapse is-nav id="nav-collapse">
              <d-navbar-nav class="ml-auto horizontal-padding-0">
                <d-nav-item href="#">Algo</d-nav-item>
                <d-nav-item href="#">Algo Mas</d-nav-item>
                <d-nav-item href="#">Otra Vaina</d-nav-item>
                <d-nav-item href="#">Blog</d-nav-item>
              </d-navbar-nav>
            </d-collapse>
          </d-navbar>
        </d-col>
      </d-row>
    </d-container>

    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <!--    <router-view />-->
    <d-container class="h-86">
      <d-row class="h-100">
        <d-col align-self="center">
          <d-row align-h="center">
            <h1 id="headline">fria.js</h1>
          </d-row>
          <d-row align-h="center" class="mt-4">
            <h1 id="slogan">
              Comunidad de profesionales y aficionados de la tecnología. Bebemos
              software y hablamos cerveza.
            </h1>
          </d-row>
          <d-row align-h="center">
            <d-button id="button">Ver Eventos</d-button>
          </d-row>
        </d-col>
      </d-row>
    </d-container>

    <d-container class="h-7">
      <d-row align-h="center">
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="mr-3 ml-3"
          size="2x"
        />
        <font-awesome-icon
          :icon="['fab', 'youtube']"
          class="mr-3 ml-3"
          size="2x"
        />
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          class="mr-3 ml-3"
          size="2x"
        />
        <font-awesome-icon
          :icon="['fab', 'discord']"
          class="mr-3 ml-3"
          size="2x"
        />
      </d-row>
    </d-container>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Montserrat");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,600|Raleway");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;

  background-image: url("https://placeimg.com/1800/1000/tech");

  a {
    font-family: Raleway, sans-serif;
    color: white;
    font-weight: 600;
    text-transform: capitalize;
  }
}

#navbar {
  background: transparent;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-title {
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
}

#headline {
  font-family: Montserrat, serif;
  font-weight: 900;
  color: white;
  font-size: 5.96rem;
}

#slogan {
  font-family: Raleway, serif;
  font-weight: 500;
  color: white;
  font-size: 1.3rem;
}

#button {
  font-family: Montserrat, serif;
  font-weight: 900;
  color: white;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: #387948;
  border-color: #387948;
}
</style>
