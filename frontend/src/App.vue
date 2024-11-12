<template>
  <div id="app">
    <!-- Header component -->
    <HeaderComponent />

    <!-- Router view to display the current route component -->
    <router-view></router-view>

    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script>
// Import Header and Footer components
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Global styles for mobile responsiveness */
@media (max-width: 768px) {
  #app {
    padding: 10px;
  }
}
</style>
