<template>
  <div class="profile">
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
        Checkout
      </h1>
    </header>
    <form
      @submit.prevent="createUser"
      class="flex my-20 mx-8 flex-col items-center"
    >
      <div>
        <!-- NAME -->
        <div class="flex text-left my-2">
          <label for="account_name" class="mx-2 font-bold text-gray-600"
            >Name:
          </label>
          <input
            v-model="account_name"
            disabled
            class="
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
              -mt-1
            "
            type="text"
            required
            id="account_name"
            name="account_name"
            placeholder="Name"
          />
        </div>

        <!-- EMAIL -->
        <div class="flex my-2">
          <label for="email" class="mx-2 font-bold text-gray-600"
            >Email:
          </label>
          <input
            v-model="email"
            disabled
            class="
              -mt-1
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
            "
            type="email"
            required
            id="email"
            name="email"
            placeholder="Input Email"
          />
        </div>

        <!-- PHONE -->
        <div class="flex my-2">
          <label for="tel" class="mx-2 font-bold text-gray-600"
            >Phone Number:
          </label>
          <input
            v-model="phone"
            disabled
            class="
              -mt-1
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
            "
            type="tel"
            required
            id="tel"
            name="tel"
            placeholder="telephone"
          />
        </div>

        <!-- BANK NAME -->
        <div class="my-2 flex">
          <label for="bank_name" class="mx-2 font-bold text-gray-600"
            >Bank Name:
          </label>
          <input
            v-model="bank"
            disabled
            class="
              -mt-1
              flex-grow
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
            "
            type="text"
            required
            id="bank_name"
            name="bank_name"
            placeholder="Bank Name"
          />
        </div>

        <!-- ACCOUNT NUMBER -->
        <div class="my-2 flex">
          <label for="account_number" class="mx-2 font-bold text-gray-600"
            >Account Number:
          </label>
          <input
            v-model="account_number"
            disabled
            class="
              -mt-1
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
            "
            type="text"
            required
            id="account_number"
            name="account_number"
            placeholder="Input Bank Account Number"
          />
        </div>
        <!-- SELECTED PRODUCTS-->
        <div class="my-2 flex">
          <label class="mx-2 font-bold text-gray-600">Number Of Items: </label>
          <input
            v-model="selectedProducts"
            disabled
            class="
              -mt-1
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
            "
            type="text"
            required
          />
        </div>

        <!-- ADDRESS -->
        <div class="flex my-2">
          <label for="address" class="mx-2 font-bold text-gray-600"
            >Home Address:
          </label>
          <div
            class="
              -mt-1
              break-words
              bg-gray-100
              border-gray-500
              mx-2
              rounded-lg
              py-1
              px-3
              sm:w-72
              w-full
              focus:outline-none
              flex-grow
            "
          >
            {{ address }}
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
            PROCEED TO PAY &#x20A6;5000
          </button>
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
import { reactive, toRefs, watch, ref, computed } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const store = useStore();
    const signup = ref(false);
    const data = reactive({
      modalToggle: false,
      selectedProducts: computed(
        () => store.state.firstModule.selectedProducts.length
      ),
      modalText: "Signing Up... Please Wait",
      image: computed(() => store.getters["Firebase/image"]),
      email: computed(() => store.getters["Firebase/email"]),
      placeholder: "Upload Profile Picture",
      account_number: computed(() => store.getters["Firebase/bank_account"]),
      account_name: computed(() => store.getters["Firebase/name"]),
      bank: computed(() => store.getters["Firebase/bank"]),
      phone: computed(() => store.getters["Firebase/phone"]),
      address: computed(() => store.getters["Firebase/address"]),
    });

    watch(signup, () => {
      if (signup.value == true) {
        data.modalText = "Payment Integration Coming Soon";
        window.disabled = true;
      } else {
        data.modalText = "Payment Integration Coming Soon";
      }
    });

    const updateImageData = (e) => {
      data.profilePicture = e.target.files[0];
      data.placeholder = e.target.files[0].name;
    };
    const createUser = async () => {
      signup.value = true;
      toggle();
      setTimeout(() => {
        signup.value = false;
      }, 3000);
    };
    const toggle = () => {
      data.modalToggle = !data.modalToggle;
    };
    document.addEventListener(
      "click",
      (e) => {
        if (signup.value) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      true
    );
    return {
      ...toRefs(data),
      createUser,
      updateImageData,
      toggle,
      signup,
    };
  },
};
</script>

<style lang="scss" scoped></style>
