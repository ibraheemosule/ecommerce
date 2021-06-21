import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      allShirts: "",
      allShoes: "",
      allPants: "",
      carouselSlide: "",
      cant: "long",
    };
  },
  getters: {
    carouselSlide: (state) => state.carouselSlide,
  },
  actions: {
    async fetchApi({ state, commit }) {
      try {
        const allShirts = await axios
          .get("https://api.pexels.com/v1/search?query=shirt", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            return res.data.photos.map((photo) => {
              return photo.src.landscape;
            });
          });
        const allShoes = await axios
          .get("https://api.pexels.com/v1/search?query=shoe", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            return res.data.photos.map((photo) => {
              return photo.src.landscape;
            });
          });
        const allPants = await axios
          .get("https://api.pexels.com/v1/search?query=pant", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            return res.data.photos.map((photo) => {
              return photo.src.landscape;
            });
          });

        const i = Math.floor(Math.random() * 4);
        commit("setAllPants", allPants);
        commit("setAllShirts", allShirts);
        commit("setAllShoes", allShoes);
        commit("setCarouselSlide", [allPants[i], allShirts[i], allShoes[i]]);
        console.log(state.carouselSlide);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    setAllShirts: (state, val) => (state.allShirts = val),
    setAllShoes: (state, val) => (state.allShoes = val),
    setAllPants: (state, val) => (state.allPants = val),
    setCarouselSlide: (state, val) => (state.carouselSlide = val),
  },
};
