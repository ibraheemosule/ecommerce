<template>
  <div
    class="
      shirt
      md:w-1/6
      sm:w-64 sm:mx-2
      mb-16
      flex flex-col
      items-center
      text-red-900
      h-full
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
        h-64
        bg-gray-600
      "
    >
      <img class="w-full h-full object-cover" :src="itemImage" alt="shoe" />
    </div>
    <div
      class="
        bg-blue-200
        border-solid border-b-2 border-gray-400
        rounded-lg
        my-6
        p-6
        h-64
      "
    >
      <h4 class="sm:text-xl text-lg uppercase text-center font-bold">
        {{ item }}
        <hr class="w-6 mt-2 border-1 border-solid border-gray-400 mx-auto" />
      </h4>
      <p class="description my-3 text-gray-600 text-center">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    item: String,
    itemImage: String,
    description: String,
  },

  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped></style>
