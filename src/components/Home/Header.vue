<template>
  <header
    class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold text-red-900"
  >
    <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
      we have the best wears for every occasion
    </h1>
  </header>
  <h2 class="text-center text-red-900 font-extrabold text-3xl mt-20">
    Hot Deals
    <hr class="w-16 mt-4 border-1 border-solid border-gray-400 mx-auto" />
  </h2>
  <article class="hot-deals mx-8 mb-12 mt-4 flex flex-wrap justify-around">
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
        src="@/assets/Images/about.jpg"
        class="image absolute top-0 left-0 h-full w-full opacity-20"
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
          text-gray-200
          bg-blue
          text-center
        "
      >
        <h3 class="mb-4 text-3xl sm:text-xl">Best Shoe Deals</h3>
        <h3 class="mb-12 text-2xl sm:text-lg">Buy Now</h3>
        <button
          type="button"
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
    <section
      class="
        card
        relative
        sm:w-auto
        px-2
        py-12
        my-12
        md:mx-8
        mx-4
        lg:mx-1
        xl:mx-4
        w-10/12
        rounded-lg
        overflow-hidden
      "
    >
      <img
        src="@/assets/Images/about.jpg"
        class="image absolute top-0 left-0 h-full w-full opacity-20"
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
          text-gray-200
          bg-blue
          text-center
        "
      >
        <h3 class="mb-4 text-3xl sm:text-xl">Best Shoe Deals</h3>
        <h3 class="mb-12 text-2xl sm:text-lg">Buy Now</h3>
        <button
          type="button"
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
    <section
      class="
        card
        relative
        sm:w-auto
        w-10/12
        lg:mx-1
        xl:mx-4
        px-2
        py-12
        my-12
        md:mx-8
        mx-4
        rounded-lg
        overflow-hidden
      "
    >
      <img
        src="@/assets/Images/about.jpg"
        class="image absolute top-0 left-0 h-full w-full opacity-20"
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
          text-gray-200
          bg-blue
          text-center
        "
      >
        <h3 class="mb-4 text-3xl sm:text-xl">Best Shoe Deals</h3>
        <h3 class="mb-12 text-2xl sm:text-lg">Buy Now</h3>
        <button
          type="button"
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
    <section
      class="
        card
        relative
        sm:w-auto
        w-10/12
        lg:mx-1
        xl:mx-4
        px-2
        py-12
        my-12
        md:mx-8
        mx-4
        rounded-lg
        overflow-hidden
      "
    >
      <img
        src="@/assets/Images/about.jpg"
        class="image absolute top-0 left-0 h-full w-full opacity-20"
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
          text-gray-200
          bg-blue
          text-center
        "
      >
        <h3 class="mb-4 text-3xl sm:text-xl">Best Shoe Deals</h3>
        <h3 class="mb-12 text-2xl sm:text-lg">Buy Now</h3>
        <button
          type="button"
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
  </article>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
.card {
  z-index: 1;
  background: rgb(66, 66, 66);
}
.overlay {
  z-index: 100;
}
.image {
  z-index: -1;
}
@media (min-width: 788px) and (max-width: 1100px) {
  section.card {
    margin-right: 5px !important;
    margin-left: 5px !important;
  }
  @media (max-width: 940px) {
    section.card {
      margin-right: 50px !important;
      margin-left: 50px !important;
    }
  }
}
</style>
