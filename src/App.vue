<template>
  <div>
    <the-navigation />
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
    Footer,
  },
  setup() {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
body {
  font-family: "Lato", sans-serif !important;
  letter-spacing: 0.1em;
}
</style>
