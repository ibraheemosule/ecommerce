<template>
  <div class="products mt-20 mb-12 sm:px-0 px-24">
    <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
      Our Products
      <hr class="w-16 mt-4 border-1 border-solid border-gray-400 mx-auto" />
    </h2>
    <div class="shirt-trousers flex justify-around flex-wrap">
      <div
        class="
          shirt
          md:w-1/6
          sm:w-64 sm:mx-2
          mb-16
          flex flex-col
          items-center
          text-red-900
        "
      >
        <div
          class="
            imgContainer
            rounded-full
            border-solid
            overflow-hidden
            xl:w-64
            lg:w-48
            md:w-40
            w-64
            h-auto
          "
        >
          <img
            class="max-w-full max-h-full"
            src="@/assets/Images/three.jpg"
            alt="shoe"
          />
        </div>
        <div class="bg-blue-200 border-solid rounded-lg my-6 p-6">
          <h4 class="sm:text-xl text-lg uppercase text-center font-bold">
            Shoes
            <hr
              class="w-6 mt-2 border-1 border-solid border-gray-400 mx-auto"
            />
          </h4>
          <p class="description my-3 text-gray-600">
            We have the best shoes for that matches different occasions, ranging
            from sneaker to corporates
          </p>
        </div>
      </div>
      <div
        class="shirt md:w-1/6 sm:w-64 sm:mx-2 mb-16 flex flex-col items-center"
      >
        <div
          class="
            imgContainer
            rounded-full
            border-solid
            overflow-hidden
            xl:w-64
            lg:w-48
            md:w-40
            w-64
            h-auto
          "
        >
          <img
            class="max-w-full max-h-full"
            src="@/assets/Images/three.jpg"
            alt="shoe"
          />
        </div>
        <div class="bg-blue-200 border-solid rounded-lg my-6 p-6 text-red-900">
          <h4 class="sm:text-xl text-lg uppercase text-center font-bold">
            Shoes
            <hr
              class="w-6 mt-2 border-1 border-solid border-gray-400 mx-auto"
            />
          </h4>
          <p class="description my-3 text-gray-600">
            We have the best shoes for that matches different occasions, ranging
            from sneaker to corporates
          </p>
        </div>
      </div>
      <div
        class="shirt md:w-1/6 sm:w-64 sm:mx-2 mb-16 flex flex-col items-center"
      >
        <div
          class="
            imgContainer
            rounded-full
            border-solid
            overflow-hidden
            xl:w-64
            lg:w-48
            md:w-40
            w-64
            h-auto
          "
        >
          <img
            class="max-w-full max-h-full"
            src="@/assets/Images/three.jpg"
            alt="shoe"
          />
        </div>
        <div class="bg-blue-200 border-solid rounded-lg my-6 p-6 text-red-900">
          <h4 class="sm:text-xl text-lg uppercase text-center font-bold">
            Shoes
            <hr
              class="w-6 mt-2 border-1 border-solid border-gray-400 mx-auto"
            />
          </h4>
          <p class="description my-3 text-gray-600">
            We have the best shoes for that matches different occasions, ranging
            from sneaker to corporates
          </p>
        </div>
      </div>
      <div
        class="shirt md:w-1/6 sm:w-64 sm:mx-2 mb-16 flex flex-col items-center"
      >
        <div
          class="
            imgContainer
            rounded-full
            border-solid
            overflow-hidden
            xl:w-64
            lg:w-48
            md:w-40
            w-64
            h-auto
          "
        >
          <img
            class="max-w-full max-h-full"
            src="@/assets/Images/three.jpg"
            alt="shoe"
          />
        </div>
        <div class="bg-blue-200 border-solid rounded-lg my-6 p-6 text-red-900">
          <h4 class="sm:text-xl text-lg uppercase text-center font-bold">
            Shoes
            <hr
              class="w-6 mt-2 border-1 border-solid border-gray-400 mx-auto"
            />
          </h4>
          <p class="description my-3 text-gray-600">
            We have the best shoes for that matches different occasions, ranging
            from sneaker to corporates
          </p>
        </div>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped></style>
