<template>
  <section
    class="
      card
      relative
      sm:w-auto
      px-2
      py-12
      my-12
      lg:mx-1
      xl:mx-4
      md:mx-8
      mx-4
      w-10/12
      rounded-lg
      overflow-hidden
    "
  >
    <img
      :src="image"
      loading="lazy"
      class="image object-cover absolute top-0 left-0 h-full w-full opacity-20"
      alt="hot deals"
    />
    <div
      class="
        overlay
        font-black
        text-lg
        pt-12
        pb-4
        px-4
        text-blue-200 text-center
      "
    >
      <h3 class="mb-4 text-3xl sm:text-xl">Latest Offers</h3>
      <h3 class="mb-12 text-2xl sm:text-lg">Our Best {{ item }} Deals</h3>
      <button
        @click="checkout"
        class="
          mx-auto
          border-2 border-solid border-gray-300
          bg-red
          rounded
          px-1
          py-1
          z-10
          bg-gray-200
          text-red-900
          hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
        "
      >
        Click Here
      </button>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    image: String,
    item: String,
  },

  setup() {
    const data = reactive({});
    const router = useRouter();
    const checkout = () => router.push("/products");

    return {
      ...toRefs(data),
      checkout,
    };
  },
};
</script>

<style lang="scss" scoped></style>
