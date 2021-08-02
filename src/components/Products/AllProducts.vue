<template>
  <div class="products text-red-900">
    <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
      <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
        our products
      </h1>
    </header>
    <main class="my-20 px-12">
      <article class="male-wears text-gray-600">
        <ShoeProducts />
        <ShirtProducts />
        <PantProducts />
        <CapProducts />
      </article>
    </main>
  </div>
</template>

<script>
import ShoeProducts from "./ShoeProducts.vue";
import ShirtProducts from "./ShirtProducts.vue";
import PantProducts from "./PantProducts.vue";
import CapProducts from "./CapProducts.vue";

export default {
  components: {
    ShoeProducts,
    ShirtProducts,
    PantProducts,
    CapProducts,
  },
};
</script>

<style lang="scss" scoped></style>
