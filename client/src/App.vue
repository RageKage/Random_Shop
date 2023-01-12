<template>
  <div>
    <pageHeader></pageHeader>
    <router-view></router-view>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from "./components/pageHeader.vue";
import pageFooter from "./components/pageFooter.vue";
import homePage from "./components/homePage.vue";

export default {
  name: "App",
  components: {
    pageFooter,
    pageHeader,
    homePage,
  },
};
</script>

<style scoped >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: red; 
}
</style>
