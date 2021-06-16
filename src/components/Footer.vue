<template>
  <footer class="bg-gray-200 border-t-2 border-solid border-red-900">
    <div class="flex justify-around flex-wrap p-8 font-bold text-red-900">
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          Our Address
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <li>50, Ajilore Street, Egan, Igando</li>
          <li>Lagos State</li>
          <li>Nigeria</li>
          <li>four</li>
        </ul>
      </div>
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          Our Address
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <li>50, Ajilore Street, Egan, Igando</li>
          <li>Lagos State</li>
          <li>Nigeria</li>
          <li>four</li>
        </ul>
      </div>
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          Our Address
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <li>50, Ajilore Street, Egan, Igando</li>
          <li>Lagos State</li>
          <li>Nigeria</li>
          <li>four</li>
        </ul>
      </div>
    </div>
    <div class="bg-gray-400 text-md text-center py-2 text-gray-600">
      &#169; Copyright ({{ date }})
    </div>
  </footer>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      date: new Date().getFullYear(),
    });
    <Footer />;
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  ul {
    list-style: none;
    li {
      text-decoration: none;
    }
  }
}
</style>
