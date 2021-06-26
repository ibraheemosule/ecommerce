<template>
  <div>
    <carousel />
    <Header />
    <products />
    <article class="hot-deals sm:mx-16 mb-32 flex bg-gray-200">
      <div class="w-1/2 h-full bg-gray-600">
        <img
          class="w-full h-full object-fill opacity-60"
          :src="image"
          alt="another image"
        />
      </div>
      <div
        class="
          w-1/2
          flex
          h-full
          align-center
          text-red-900
          font-extrabold
          flex-col
          sm:px-16
          p-4
        "
      >
        <div
          class="
            img-container
            w-auto
            sm:mr-20 sm:h-32
            h-24
            relative
            overflow-hidden
          "
        >
          <img
            class="plane w-1/6 h-auto absolute"
            src="@/assets/Images/plane.png"
            alt="plane image"
          />
        </div>
        <h2 class="sm:text-3xl sm:mr-16 text-lg uppercase">
          experience our swift delivery service
        </h2>
        <button
          @click="toProducts"
          class="
            mt-12
            w-40
            border-2 border-solid border-gray-400
            bg-red
            rounded
            px-1
            py-1
            font-extrabold
            bg-gray-300
            text-red-900
            hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
          "
        >
          Explore Our Collections
        </button>
      </div>
    </article>
    <news-letter />
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import Carousel from "./Carousel.vue";
import Header from "./Header.vue";
import Products from "./Products.vue";
import NewsLetter from "./NewsLetter.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Carousel,
    Header,
    Products,
    NewsLetter,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      image: computed(() => store.state.firstModule.allShirts[7]),
    });
    const toProducts = () => router.push("/products");

    return {
      ...toRefs(data),
      toProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
article.hot-deals {
  height: 30rem;
}
.plane {
  bottom: 0;
  left: 0;
  animation-name: fly;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes fly {
  0% {
    bottom: 0%;
    left: 0%;
  }
  100% {
    bottom: 100%;
    left: 100%;
  }
}
h2 {
  line-height: 1.5em;
}
</style>
