<template>
  <VueAgile :autoplay="true" :autoplaySpeed="3000" :options="options">
    <div class="slide w-full flex">
      <div
        class="
          carousel
          w-full
          h-full
          bg-yellow-500
          relative
          flex
          justify-center
          items-center
        "
      >
        <img
          src="@/assets/Images/about.jpg"
          class="
            carousel_image
            absolute
            top-0
            object-cover
            left-0
            md:h-auto
            h-full
            w-full
            opacity-20
          "
          alt="hot deals"
        />
        <h3
          class="
            md:w-1/2
            text-center
            mt-52
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Best Shoe Deals
        </h3>
      </div>
    </div>
    <div class="slide w-full flex">
      <div
        class="
          carousel
          w-full
          h-full
          bg-yellow-500
          relative
          flex
          justify-center
          items-center
        "
      >
        <img
          src="@/assets/Images/two.jpg"
          class="
            carousel_image
            absolute
            top-0
            object-cover
            left-0
            md:h-auto
            h-full
            w-full
            opacity-20
          "
          alt="hot deals"
        />
        <h3
          class="
            md:w-1/2
            text-center
            mt-52
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Best Shoe Deals
        </h3>
      </div>
    </div>
    <div class="slide w-full flex">
      <div
        class="
          carousel
          w-full
          h-full
          bg-yellow-500
          relative
          flex
          justify-center
          items-center
        "
      >
        <img
          src="@/assets/Images/three.jpg"
          class="
            carousel_image
            absolute
            top-0
            object-cover
            left-0
            md:h-auto
            h-full
            w-full
            opacity-20
          "
          alt="hot deals"
        />
        <h3
          class="
            md:w-1/2
            text-center
            mt-52
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Best Shoe Deals
        </h3>
      </div>
    </div>
  </VueAgile>
</template>
<script>
import { toRefs, reactive } from "vue";
import { useStore } from "vuex";
import { VueAgile } from "vue-agile";

export default {
  components: {
    VueAgile,
  },

  setup() {
    const store = useStore();
    const data = reactive({
      comment: "this is my comment",
      shoe: store.state.shoes,
      myOptions: {
        navButtons: false,

        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            },
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: true,
            },
          },
        ],
      },
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped>
.slide,
.carousel {
  min-height: 100vmin;
}
.carousel {
  z-index: 1;
  background: rgb(66, 66, 66);
}
.overlay {
  z-index: 100;
}
.carousel_image {
  z-index: -1;
}
</style>

<style lang="scss">
div.agile {
  position: relative;
  color: #e5e7eb;
  .agile__actions {
    font: {
      size: 2em;
      weight: 600;
    }
    .agile__nav-button--prev {
      position: absolute;
      top: 50%;
      font-size: 2.5em;
      opacity: 0.3;
    }
    .agile__nav-button--prev:hover,
    .agile__nav-button--next:hover {
      opacity: 1;
    }
    .agile__nav-button--next {
      position: absolute;
      top: 50%;
      right: 0;
      font-size: 2.5em;
      opacity: 0.3;
    }
  }
}
</style>
