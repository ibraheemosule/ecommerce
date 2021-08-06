import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      allShirts: "",
      allShoes: "",
      allPants: "",
      allCaps: "",
      rootShirts: "",
      rootShoes: "",
      rootPants: "",
      rootCaps: "",
      selectedProducts: [],
      homeImage: "",
    };
  },
  getters: {
    totalAmount: (state) => {
      let amount = 0;
      state.selectedProducts.forEach(
        (val) => (amount += Math.round(val.height / 100) * 100)
      );
      return amount;
    },
  },
  actions: {
    async fetchApi({ commit }) {
      try {
        const allShirts = await axios
          .get("https://api.pexels.com/v1/search?query=shirt", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            const rootPhoto = res.data.photos;
            commit("setRootShirts", rootPhoto);
            commit(
              "setHomeImage",
              rootPhoto[Math.round(Math.random() * 10)].src.original
            );

            return res.data.photos.map((photo) => {
              return photo.src.medium;
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
            const rootPhoto = res.data.photos;
            commit("setRootShoes", rootPhoto);
            return res.data.photos.map((photo) => {
              return photo.src.medium;
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
            const rootPhoto = res.data.photos;
            commit("setRootPants", rootPhoto);
            return res.data.photos.map((photo) => {
              return photo.src.medium;
            });
          });
        const allCaps = await axios
          .get("https://api.pexels.com/v1/search?query=CAP", {
            headers: {
              Authorization:
                "563492ad6f91700001000001d67fa52bb87043faaddbf31f8919cdb5",
            },
          })
          .then((res) => {
            const rootPhoto = res.data.photos;
            commit("setRootCaps", rootPhoto);
            return res.data.photos.map((photo) => {
              return photo.src.medium;
            });
          });

        commit("setAllPants", allPants);
        commit("setAllShirts", allShirts);
        commit("setAllShoes", allShoes);
        commit("setAllCaps", allCaps);
      } catch (err) {
        console.log(err);
      }
    },
    selected({ state, commit }, { product }) {
      const selectedProducts = state.selectedProducts;
      const checkProduct = selectedProducts.some(
        (val) => val.id === product[0].id
      );
      if (!checkProduct) {
        commit("setSelectedProducts", [...selectedProducts, ...product]);
      }

      return;
    },
    removed({ state, commit }, { product }) {
      const remove = state.selectedProducts.filter(
        (val) => val.id !== product[0].id
      );
      commit("setSelectedProducts", [...remove]);
    },
  },
  mutations: {
    setAllShirts: (state, val) => (state.allShirts = val),
    setRootShirts: (state, val) => (state.rootShirts = val),
    setAllShoes: (state, val) => (state.allShoes = val),
    setRootShoes: (state, val) => (state.rootShoes = val),
    setAllPants: (state, val) => (state.allPants = val),
    setRootPants: (state, val) => (state.rootPants = val),
    setCarouselSlide: (state, val) => (state.carouselSlide = val),
    setRootCaps: (state, val) => (state.rootCaps = val),
    setAllCaps: (state, val) => (state.allCaps = val),
    setSelectedProducts: (state, val) => (state.selectedProducts = val),
    setHomeImage: (state, val) => (state.homeImage = val),
  },
};
