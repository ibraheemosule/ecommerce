import firebase from "firebase/app";

export default {
  namespaced: true,
  state() {
    return {
      signin: false,
      image: "",
      user: "",
      email: "",
      error: "",
      name: "",
      bank: "",
      bank_account: "",
    };
  },

  //GETTERS
  getters: {
    signin: (state) => state.signin,
    user: (state) => state.user,
    image: (state) => state.image,
    email: (state) => state.email,
    error: (state) => state.error,
    name: (state) => state.name,
    bank: (state) => state.bank,
    bank_account: (state) => state.bank_account,
  },

  //ACTIONS
  actions: {
    async createUser(
      { dispatch },
      { email, password, profilePicture, name, account, bank }
    ) {
      try {
        const cred = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await dispatch("storeImage", {
          userId: cred.user.uid,
          picture: profilePicture,
        });

        await firebase.firestore().collection("users").doc(cred.user.uid).set({
          name,
          account,
          bank,
        });

        // await firebase
        //   .storage()
        //   .ref("users/" + cred.user.uid + "/profile.jpg")
        //   .put(profilePicture);
      } catch (err) {
        console.log(err.message);
      }
    },
    async signout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit("setSignin", false);
        commit("setUser", "");
        commit("setImage", "");
      } catch (err) {
        console.log(err.message);
      }
    },
    // eslint-disable-next-line
    async signin({ state, commit }, { userEmail, userPassword }) {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(userEmail, userPassword);

        commit("setError", "");
      } catch (err) {
        console.log(err);
        commit("setError", "Incorrect Email/Password");
      }
    },

    async storeImage({ dispatch }, { userId, picture }) {
      try {
        await firebase
          .storage()
          .ref("users/" + userId + "/profile.jpg")
          .put(picture);
        await dispatch("getImage", { userInfo: userId });
      } catch (err) {
        console.log(err.message);
      }
    },

    async getImage({ commit }, { userInfo }) {
      if (userInfo) {
        try {
          const imageUrl = await firebase
            .storage()
            .ref(`users/${userInfo}/profile.jpg`)
            .getDownloadURL();
          await commit("setImage", imageUrl);
        } catch (err) {
          console.log(err.message);
        }
      }
    },
    async fetchInfo({ commit }, { userId }) {
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
          const info = doc.data();
          commit("setName", info.name);
          commit("setBank", info.bank);
          commit("setBankAccount", info.account);
        });
    },
  },
  mutations: {
    setSignin: (state, val) => (state.signin = val),
    setUser: (state, val) => (state.user = val),
    setImage: (state, val) => (state.image = val),
    setEmail: (state, val) => (state.email = val),
    setError: (state, val) => (state.error = val),
    setName: (state, val) => (state.name = val),
    setBank: (state, val) => (state.bank = val),
    setBankAccount: (state, val) => (state.bank_account = val),
  },
};
