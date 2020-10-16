<template>
  <div id="app">
    <Todos/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Todos from "./components/todos.vue";


@Component({
  components: {
    Todos
  },
})
export default class App extends Vue {}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
