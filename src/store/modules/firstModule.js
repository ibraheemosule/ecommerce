import axios from "axios";

export default {
  state() {
    return {
      shirt: "one",
      shoes: "",
    };
  },
  getters: {
    shirt: (state) => state.shirt,
    shoes: (state) => state.shoes,
  },
  actions: {
    async fetchApi({ commit }) {
      try {
        let data = await axios
          .get("https://api.pexels.com/v1/search?query=shoe", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            return res.data.photos.map((photo, index) => {
              if (index > 5) return;
              return photo.src.landscape;
            });
          });
        data = data.filter((val) => val !== undefined);
        commit("setShirt", data);
        // console.log(state.shirt);
      } catch (err) {
        console.log(err);
      }
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  },
  mutations: {
    setShirt: (state, val) => (state.shirt = val),
  },
};
