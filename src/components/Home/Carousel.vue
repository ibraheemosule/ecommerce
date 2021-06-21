<template>
  <VueAgile :autoplay="true" :autoplaySpeed="3000" :options="options">
    <div class="slide w-full flex">
      <div
        class="carousel w-full h-full relative flex justify-center items-center"
      >
        <img
          src="@/assets/Images/Shoes.jpg"
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
            w-9/12
            text-center
            mt-32
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Explore Our Shoes, Available In Different Sizes
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
          src="@/assets/Images/Shirts.jpg"
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
            w-9/12
            text-center
            mt-32
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          We Have The Best Casual and Corporate Shirts
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
          src="@/assets/Images/Trouser.jpg"
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
            w-9/12
            text-center
            mt-32
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Fitting Pants To Match Your Shirt Selection
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
          src="@/assets/Images/Cap.jpg"
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
            w-9/12
            text-center
            mt-32
            text-3xl text-gray-200
            sm:text-6xl
            font-bold
          "
        >
          Perfect Your Appearance With Our Befitting Caps
        </h3>
      </div>
    </div>
  </VueAgile>
</template>
<script>
import { toRefs, reactive, computed } from "vue";
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
      carouselSlide: computed(() => store.getters["firstModule/carouselSlide"]),
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
    const slid = async () =>
      await console.log(data.carouselSlide, "this is a man of a man");
    slid();

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
  background: rgba(66, 66, 66);
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
      top: 40%;
      font-size: 2.5em;
      opacity: 0.3;
    }
    .agile__nav-button--prev:hover,
    .agile__nav-button--next:hover {
      opacity: 1;
    }
    .agile__nav-button--next {
      position: absolute;
      top: 40%;
      right: 0;
      font-size: 2.5em;
      opacity: 0.3;
    }
  }
}
@media (max-width: 768px) {
  .agile__nav-button--prev,
  .agile__nav-button--next {
    display: none;
  }
}
</style>
