<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <h1 class="h1">Remebmer, Vue 3</h1>
    <p>Memorize and open all green cells</p>
    <RememberBoard/>
  </div>
</template>

<script>
import RememberBoard from "./components/RememberBoard.vue";

export default {
  name: 'App',
  components: {
    RememberBoard,
  }
}
</script>

<style scoped>
  .app{
    font-family: Helvetica, sans-serif;
    text-align:center;
    margin-top: 40px;
  }
  .logo {
    width: 100px;
  }
</style>
