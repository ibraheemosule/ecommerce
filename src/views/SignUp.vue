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
        Sign Up
      </h1>
    </header>
    <form
      @submit.prevent="createUser"
      class="flex my-20 flex-col justify-center w-80 mx-auto"
    >
      <div class="flex items-center my-2 text-gray-600">
        <label class="capitalize sr-only font-semibold" for="picture">
          {{ placeholder }}</label
        >
        <div
          class="
            flex-grow
            ml-1
            rounded-full
            overflow-hidden
            border-solid border-2 border-gray-500
            relative
          "
        >
          <label
            class="
              capitalize
              font-semibold
              block
              h-full
              cursor-pointer
              w-full
              px-3
              py-0.5
            "
            for="picture"
          >
            {{ placeholder }}
            <input
              class="box-border w-1 h-1 absolute rounded-xl border-0"
              type="file"
              accept="image/jpg, image/jpeg"
              id="picture"
              name="picture"
              placeholder="placeholder title"
              @change="updateImageData"
            />
          </label>
        </div>
      </div>

      <div class="flex items-center my-2 text-gray-600">
        <label class="capitalize sr-only font-semibold" for="account_name">
          Name:</label
        >
        <div
          class="
            flex-grow
            ml-1
            rounded-full
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <input
            v-model="account_name"
            class="box-border w-full py-1 px-3 rounded-xl border-0"
            type="text"
            required
            id="account_name"
            name="account_name"
            placeholder="Name"
          />
        </div>
      </div>

      <div class="flex items-center my-2 text-gray-600">
        <label class="capitalize sr-only font-semibold" for="email">
          Email:</label
        >
        <div
          class="
            flex-grow
            ml-1
            rounded-full
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <input
            v-model="email"
            class="box-border w-full py-1 px-3 rounded-xl border-0"
            type="email"
            required
            id="email"
            name="email"
            placeholder="Input Email"
          />
        </div>
      </div>

      <div
        class="
          flex-grow
          relative
          ml-1
          rounded-full
          overflow-hidden
          border-solid border-2 border-gray-500
        "
      >
        <input
          v-model="password"
          class="box-border w-full py-1 px-3 rounded-xl border-0"
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
          class="absolute top-1 right-2 cursor-pointer z-10 h-50 w-50"
          src="@/assets/Images/notVisible.svg"
          alt="visiblity"
        />
      </div>

      <div class="flex items-center my-2 text-gray-600">
        <label class="capitalize sr-only font-semibold" for="password">
          Bank Name:</label
        >
        <div
          class="
            flex-grow
            ml-1
            rounded-full
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <select
            v-model="bank_name"
            class="box-border w-full py-1 px-3 rounded-xl border-0"
            required
            name="bank_name"
            id="bank_name"
          >
            <option value="" selected disabled>Choose Your Bank</option>
            <option v-for="bank in banks" :key="bank.name" value="bank">
              {{ bank.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex items-center my-2 text-gray-600">
        <label class="capitalize sr-only font-semibold" for="account_number">
          Account Number:</label
        >
        <div
          class="
            flex-grow
            ml-1
            rounded-full
            overflow-hidden
            border-solid border-2 border-gray-500
          "
        >
          <input
            v-model="account_number"
            class="box-border w-full py-1 px-3 rounded-xl border-0"
            type="text"
            required
            id="account_number"
            name="account_number"
            placeholder="Input Bank Account Number"
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
          Complete Sign Up
        </button>
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
import { reactive, toRefs, watch, ref } from "vue";
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
      display: false,
      modalToggle: false,
      modalText: "Signing Up... Please Wait",
      email: "",
      placeholder: "Upload Profile Picture",
      account_number: "",
      account_name: "",
      bank_name: "",
      password: "",
      profilePicture: "",
    });

    const banks = [
      { id: "1", name: "Access Bank", code: "044" },
      { id: "2", name: "Citibank", code: "023" },
      { id: "3", name: "Diamond Bank", code: "063" },
      { id: "4", name: "Dynamic Standard Bank", code: "" },
      { id: "5", name: "Ecobank Nigeria", code: "050" },
      { id: "6", name: "Fidelity Bank Nigeria", code: "070" },
      { id: "7", name: "First Bank of Nigeria", code: "011" },
      { id: "8", name: "First City Monument Bank", code: "214" },
      { id: "9", name: "Guaranty Trust Bank", code: "058" },
      { id: "10", name: "Heritage Bank Plc", code: "030" },
      { id: "11", name: "Jaiz Bank", code: "301" },
      { id: "12", name: "Keystone Bank Limited", code: "082" },
      { id: "13", name: "Providus Bank Plc", code: "101" },
      { id: "14", name: "Polaris Bank", code: "076" },
      { id: "15", name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
      { id: "16", name: "Standard Chartered Bank", code: "068" },
      { id: "17", name: "Sterling Bank", code: "232" },
      { id: "18", name: "Suntrust Bank Nigeria Limited", code: "100" },
      { id: "19", name: "Union Bank of Nigeria", code: "032" },
      { id: "20", name: "United Bank for Africa", code: "033" },
      { id: "21", name: "Unity Bank Plc", code: "215" },
      { id: "22", name: "Wema Bank", code: "035" },
      { id: "23", name: "Zenith Bank", code: "057" },
    ];

    watch(signup, () => {
      if (signup.value == true) {
        data.modalText = "Signing Up... Please Wait";
        window.disabled = true;
      } else {
        data.modalText = "Sign up Successful";
      }
    });

    const show = () => {
      data.display = !data.display;
      if (data.display) {
        document.getElementById("password").type = "text";
      }
      if (!data.display) {
        document.getElementById("password").type = "password";
      }
    };

    const updateImageData = (e) => {
      data.profilePicture = e.target.files[0];
      data.placeholder = e.target.files[0].name;
    };
    const createUser = async () => {
      try {
        signup.value = true;
        toggle();
        await store.dispatch("Firebase/createUser", {
          email: data.email,
          password: data.password,
          profilePicture: data.profilePicture,
          name: data.account_name,
          account: data.account_number,
          bank: data.bank_name,
        });
        signup.value = false;
      } catch (err) {
        data.modalText = err.message;
      }
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
      banks,
      createUser,
      updateImageData,
      toggle,
      signup,
      show,
    };
  },
};
</script>
