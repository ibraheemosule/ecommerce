<template>
  <div class="checkout">
    <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
      <h1
        class="
          text-red-900
          capitalize
          max-w-2xl
          sm:text-4xl
          text-2xl text-center
        "
      >
        Sign In
      </h1>
    </header>
    <form
      class="flex my-20 flex-col justify-center w-80 mx-auto"
      @submit.prevent="signin"
    >
      <span class="mx-auto w-100 text-sm text-red-500">{{ error }}</span>
      <div class="sm:text-center text-left my-2">
        <label class="capitalize sr-only font-semibold" for="email">
          >Email:
        </label>
        <div
          class="
            flex-grow
            ml-1
            rounded-lg
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <input
            v-model="email"
            class="box-border w-full py-1 px-3 border-0"
            type="email"
            required
            id="email"
            name="email"
            placeholder="Input Email"
          />
        </div>
      </div>
      <div class="sm:text-center text-left my-2">
        <label class="capitalize sr-only font-semibold" for="password">
          >Password:
        </label>
        <div
          class="
            flex-grow
            relative
            ml-1
            rounded-lg
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <input
            v-model="password"
            class="box-border w-full py-1 px-3 border-0"
            type="password"
            required
            id="password"
            name="password"
            placeholder="Input Password"
          />
          <img
            v-if="display"
            @click="show"
            id="image"
            class="absolute top-1 right-2 cursor-pointer h-50 w-50"
            src="@/assets/Images/visible.svg"
            alt="visiblity"
          />
          <img
            v-if="!display"
            @click="show"
            id="image"
            class="absolute top-1 right-2 cursor-pointer h-50 w-50"
            src="@/assets/Images/notVisible.svg"
            alt="visiblity"
          />
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="
            mt-5
            border-2 border-solid border-green-400
            bg-green-400
            rounded
            px-2
            py-1
            font-bold
            text-gray-600
            hover:bg-gray-400 hover:text-red-900 hover:border-gray-400
          "
        >
          Sign In
        </button>
        <div class="text-gray-600 mt-6 text-sm">
          Don't Have An Account?
          <router-link :to="{ name: 'SignUp' }" class="text-red-600"
            >Sign Up Here</router-link
          >
        </div>
      </div>
    </form>
    <Modal
      @close="toggle"
      :modalText="modalText"
      :modal="modalToggle"
      :signup="signup"
    />
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const signup = ref(false);
    const store = useStore();
    const data = reactive({
      modalToggle: false,
      modalText: "Signing In... Please Wait",
      email: "",
      password: "",
      display: false,
      error: computed(() => store.getters["Firebase/error"]),
    });

    watch(signup, () => {
      if (signup.value == true) {
        data.modalText = "Signing In... Please Wait";
        window.disabled = true;
      } else {
        data.modalText = "Done";
      }
    });
    const toggle = () => {
      data.modalToggle = !data.modalToggle;
    };

    const signin = async () => {
      signup.value = true;
      toggle();
      await store.dispatch("Firebase/signin", {
        userEmail: data.email,
        userPassword: data.password,
      });
      signup.value = false;
    };

    const show = () => {
      data.display = !data.display;
      if (data.display) {
        document.getElementById("password").type = "text";
      }
      if (!data.display) {
        document.getElementById("password").type = "password";
      }
    };

    return {
      ...toRefs(data),
      signin,
      show,
      toggle,
      signup,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  display: inline;
}
input:focus-visible {
  outline: none;
}
</style>
