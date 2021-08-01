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
    <hot-deal-card
      v-for="hotdeal in hotdeals"
      :key="hotdeal.item"
      :image="hotdeal.image"
      :item="hotdeal.item"
    />
  </article>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import HotDealCard from "./HotDealsCard.vue";
import { useStore } from "vuex";

export default {
  components: {
    HotDealCard,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      hotdeals: computed(() => [
        {
          item: "Shirts",
          image: store.state.firstModule.allShirts[4],
        },
        {
          item: "Pants",
          image: store.state.firstModule.allPants[2],
        },
        {
          item: "Shoes",
          image: store.state.firstModule.allShoes[4],
        },
        {
          item: "Caps",
          image: store.state.firstModule.allCaps[1],
        },
      ]),
    });

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
