<template>
  <div class="cart text-red-900">
    <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
      <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
        Cart
      </h1>
    </header>
    <div class="addedProducts sm:m-20 mx-4 my-20">
      <div class="flex space-around wrap">
        <div
          class="
            md:w-1/2
            xl:w-1/3
            w-full
            px-5
            py-10
            sm:flex
            block
            items-center
            bg-gray-200
            rounded
            wrap
          "
        >
          <div class="lg:w-1/2 sm:w-1/2 w-full">
            <img
              class="sm:w-full w-9/12 rounded-full mx-auto"
              src="@/assets/Images/three.jpg"
              alt="product image"
            />
          </div>
          <div
            class="
              product-details
              text-gray-600
              ml-8
              my-8
              lg:w-1/2
              xl:w-9/12
              sm:w-1/2
              w-full
            "
          >
            <p>
              Product Name:
              <span class="text-red-600 text-sm font-bold">This shoe</span>
            </p>
            <p>
              Item ID:
              <span class="text-red-600 text-sm font-bold">1223</span>
            </p>
            <p>
              Description:
              <span class="text-red-600 text-sm font-bold">This shoe</span>
            </p>
            <p>
              Price:
              <span class="text-red-600 text-sm font-bold"> &#x20A6;5000</span>
            </p>
            <button
              type="button"
              class="
                mt-3
                border-2 border-solid border-gray-400
                bg-red
                rounded
                px-2
                py-1
                font-extrabold
                bg-gray-300
                text-red-900
                hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
              "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div class="checkout my-12 text-center">
        <p class="uppercase text-gray-600">
          Total amount: <span class="text-red-600 font-bold">1223</span>
        </p>
        <router-link :to="{ name: Homepage }" class="p-0">
          <button
            @click="checkout"
            class="
              mt-5
              border-2 border-solid border-green-400
              bg-green-400
              rounded
              px-2
              py-1
              font-extrabold
              bg-gray-300
              text-gray-600
              hover:bg-gray-400 hover:text-red-900 hover:border-gray-400
            "
          >
            Proceed To Checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const data = reactive({});
    const router = useRouter();

    const checkout = () => router.push("/checkout");

    return {
      ...toRefs(data),
      checkout,
    };
  },
};
</script>

<style lang="scss" scoped></style>
