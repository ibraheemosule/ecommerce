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
import firebase from "firebase/app";
import { useStore } from "vuex";
import { reactive, toRefs } from "vue";

export default {
  components: {
    TheNavigation,
    Footer,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      user: "",
    });

    (function () {
      return store.dispatch("firstModule/fetchApi");
    })();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        data.user = user;
        console.log(user);
        store.commit("Firebase/setSignin", true);
        store.commit("Firebase/setEmail", user.email);
        store.commit("Firebase/setUser", data.user);
        store.dispatch("Firebase/getImage", { userInfo: data.user.uid });
        store.dispatch("Firebase/fetchInfo", { userId: data.user.uid });
        console.log(store.state.Firebase.email, "working");
      }
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
body {
  font-family: "Lato", sans-serif !important;
  letter-spacing: 0.1em;
}
</style>
