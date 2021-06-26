<template>
  <div class="products mt-20 mb-12 sm:px-0 px-24">
    <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
      Our Products
      <hr class="w-16 mt-4 border-1 border-solid border-gray-400 mx-auto" />
    </h2>
    <div class="shirt-trousers flex justify-around flex-wrap">
      <ProductCard
        item="Shirt"
        :description="description[0]"
        :itemImage="shirtImage"
      />
      <ProductCard
        item="Pant"
        :description="description[2]"
        :itemImage="pantImage"
      />
      <ProductCard
        item="Shoe"
        :description="description[1]"
        :itemImage="shoeImage"
      />
      <ProductCard
        item="Cap"
        :description="description[3]"
        :itemImage="capImage"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import ProductCard from "./ProductCard.vue";
import { useStore } from "vuex";

export default {
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      shirtImage: computed(() => store.state.firstModule.allShirts[2]),
      pantImage: computed(() => store.state.firstModule.allPants[3]),
      shoeImage: computed(() => store.state.firstModule.allShoes[1]),
      capImage: computed(() => store.state.firstModule.allCaps[4]),
      description: [
        "We have the best shirts for various occasions ranging from casuals to corporate styles",
        "Our range of shoe collections makes it easy for you to pick a befitting footwear to compliment your dress style",
        "We offer the best and affordable pants to compliment yourshirt selection",
        "Our unisex caps are perfect for any casual outfits",
      ],
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped></style>
