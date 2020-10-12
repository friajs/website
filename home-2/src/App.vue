<template>
  <div>
    <Hero></Hero>
    <About></About>
  </div>
</template>

<script>
import Hero from "./sections/hero";
import About from "./sections/about";

export default {
  components: {
    Hero,
    About
  }
};
</script>

<style lang="scss">
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
