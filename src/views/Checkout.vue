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
        Checkout
      </h1>
    </header>
    <form class="flex my-20 mx-8 flex-col justify-center">
      <div class="sm:text-center text-left my-2">
        <label for="bank_name" class="mx-2 sr-only font-bold text-gray-600"
          >Bank Name:
        </label>
        <select
          v-model="bank_name"
          class="
            mx-2
            bg-white
            rounded-lg
            border-solid border-2 border-gray-500
            py-1
            px-3
            sm:w-72
            w-full
            focus:outline-none
          "
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
      <div class="sm:text-center text-left my-2">
        <label for="account_name" class="mx-2 sr-only font-bold text-gray-600"
          >Account Name:
        </label>
        <input
          v-model="account_name"
          class="
            border-solid border-2 border-gray-500
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
          id="account_name"
          name="account_name"
          placeholder="Bank Account Name"
        />
      </div>
      <div class="sm:text-center text-left my-2">
        <label for="account_number" class="mx-2 sr-only font-bold text-gray-600"
          >Account Number:
        </label>
        <input
          v-model="account_number"
          class="
            border-solid border-2 border-gray-500
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
          id="account_number"
          name="account_number"
          placeholder="Input Bank Account Number"
        />
      </div>
      <div class="sm:text-center text-left my-2">
        <label for="email" class="mx-2 sr-only font-bold text-gray-600"
          >Email:
        </label>
        <input
          v-model="email"
          class="
            border-solid border-2 border-gray-500
            mx-2
            rounded-lg
            py-1
            px-3
            sm:w-72
            w-full
            focus:outline-none
          "
          type="email"
          required
          id="email"
          name="email"
          placeholder="Input Bank Email"
        />
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
            bg-gray-300
            text-gray-600
            hover:bg-gray-400 hover:text-red-900 hover:border-gray-400
          "
        >
          PROCEED TO PAY &#x20A6;5000
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      email: "",
      account_number: "",
      account_name: "",
      bank_name: "",
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

    return {
      ...toRefs(state),
      banks,
    };
  },
};
</script>

<style lang="scss" scoped></style>
