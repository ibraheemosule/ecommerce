import { createStore } from "vuex";
import firstModule from "./modules/firstModule";
import Firebase from "./modules/Firebase";

export default createStore({
  modules: {
    firstModule,
    Firebase,
  },
});
