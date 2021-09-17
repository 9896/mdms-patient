<template>
  <div id="app">
    <vue-page-transition name="">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
//import { MainLayout } from "@/App/Common/Helpers/Layout";

export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
