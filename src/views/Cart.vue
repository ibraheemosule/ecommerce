<template>
  <div class="cart text-red-900">
    <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
      <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
        Cart
      </h1>
    </header>
    <div
      v-if="selectedProducts.length > 0"
      class="addedProducts sm:m-20 mx-4 my-20"
    >
      <div class="flex justify-around flex-wrap">
        <div
          v-for="photo in selectedProducts"
          :key="photo.id"
          class="
            md:w-1/2
            xl:w-1/3
            w-full
            px-5
            py-10
            sm:flex
            my-8
            mx-2
            block
            items-center
            bg-gray-200
            rounded
          "
        >
          <div
            class="
              sm:w-1/2
              w-full
              xl:h-32
              lg:h-44
              sm:h-32
              h-60
              rounded-full
              overflow-hidden
            "
          >
            <img
              class="sm:w-full w-9/12 mx-auto rounded-full h-full object-fill"
              :src="photo.src.medium"
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
              <span class="text-red-600 text-sm font-bold">{{
                photo.photographer
              }}</span>
            </p>
            <p>
              Item ID:
              <span class="text-red-600 text-sm font-bold">{{ photo.id }}</span>
            </p>
            <p>
              Description:
              <span class="text-red-600 text-sm font-bold">This shoe</span>
            </p>
            <p>
              Price:
              <span class="text-red-600 text-sm font-bold">
                &#x20A6;{{
                  Math.round(Math.floor(photo.height) / 100) * 100
                }}</span
              >
            </p>
            <button
              @click="remove"
              :id="photo.id"
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
          Total amount:
          <span class="text-red-600 font-bold"> &#x20A6;{{ totalAmount }}</span>
        </p>

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
            text-gray-600
            hover:bg-gray-400 hover:text-red-900 hover:border-gray-400
          "
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
    <div v-else class="sm:m-20 mx-4 my-20 text-center text-gray-600">
      <h2 class="capitalize sm:text-4xl text-2xl text-center">Cart Is Empty</h2>
      <button
        @click="products"
        class="
          my-20
          border-2 border-solid border-gray-400
          rounded
          px-4
          py-2
          font-extrabold
          bg-gray-300
          text-red-900
          hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
        "
      >
        Start Shopping
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const data = reactive({
      selectedProducts: computed(
        () => store.state.firstModule.selectedProducts
      ),
      totalAmount: computed(() => store.getters["firstModule/totalAmount"]),
    });

    const remove = (e) => {
      let element = e.currentTarget;
      element.clicks = (element.clicks || 0) + 1;
      const remove = data.selectedProducts.filter(
        (val) => val.id == element.id
      );
      store.dispatch("firstModule/removed", { product: remove });
    };

    const checkout = () => router.push("/checkout");
    const products = () => router.push("/products");

    return {
      ...toRefs(data),
      checkout,
      remove,
      products,
    };
  },
};
</script>

<style lang="scss" scoped></style>
