import { createStore } from "vuex";
import firstModule from "./modules/firstModule";

export default createStore({
  modules: {
    firstModule,
  },
});
