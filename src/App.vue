<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <link rel="shortcut icon" type="image/png" href="@/assets/arco-iris-no-final-de-uma-paisagem-rodoviaria.jpg"/>
</template>

<script>
import HelloWorld from './components/MenuPrincipal.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
