<template>
  <div>
    <carousel />
    <Header />
    <products />
    <article class="hot-deals sm:mx-16 my-12 flex flex-wrap bg-gray-200">
      <div class="w-1/2">
        <img
          class="w-full h-full object-cover"
          src="@/assets/Images/five.jpg"
          alt="another image"
        />
      </div>
      <div
        class="
          w-1/2
          flex
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
            sm:mr-20 sm:h-1/2
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
          type="button"
          class="
            my-12
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
import { reactive, toRefs } from "vue";
import Carousel from "./Carousel.vue";
import Header from "./Header.vue";
import Products from "./Products.vue";
import NewsLetter from "./NewsLetter.vue";

export default {
  components: {
    Carousel,
    Header,
    Products,
    NewsLetter,
  },
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
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
