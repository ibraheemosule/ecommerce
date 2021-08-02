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
        Profile
      </h1>
    </header>
    <form
      @submit.prevent="createUser"
      class="flex my-20 mx-8 flex-col items-center"
    >
      <div>
        <div
          class="
            mt-2
            mb-12
            text-center
            h-40
            w-40
            mx-auto
            shadow-md
            rounded-full
            ring-1
          "
        >
          <img
            v-if="image"
            class="w-full h-full cover rounded-full"
            :src="image"
            alt=""
          />
          <img
            v-else
            class="w-full h-full cover rounded-full"
            src="@/assets/Images/person.jpg"
            alt="profile picture"
          />
        </div>

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
        <div class="my-2 flex">
          <label for="bank_name" class="mx-2 font-bold text-gray-600"
            >Bank Name:
          </label>
          <input
            v-model="bank_name"
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

        <div class="my-2 flex">
          <label for="phone" class="mx-2 font-bold text-gray-600"
            >Telephone Number:
          </label>
          <input
            v-model="phone"
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
            type="tel"
            required
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
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
        <div class="my-2 flex">
          <label for="address" class="mx-2 font-bold text-gray-600"
            >Address:
          </label>
          <textarea
            v-model="address"
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
            id="address"
            name="address"
            placeholder="Address"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const data = reactive({
      modalToggle: false,
      modalText: "Signing Up... Please Wait",
      image: computed(() => store.getters["Firebase/image"]),
      email: computed(() => store.getters["Firebase/email"]),
      placeholder: "Upload Profile Picture",
      account_number: computed(() => store.getters["Firebase/bank_account"]),
      account_name: computed(() => store.getters["Firebase/name"]),
      bank_name: computed(() => store.getters["Firebase/bank"]),
      password: "",
      address: computed(() => store.getters["Firebase/address"]),
      phone: computed(() => store.getters["Firebase/phone"]),
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
