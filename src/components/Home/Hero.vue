<template>
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
        loading="lazy"
        alt="hot deals"
      />
      <h3
        class="
          w-9/12
          text-center
          mt-32
          text-3xl text-blue-200
          sm:text-6xl
          font-bold
          capitalize
        "
      >
        Blacklabel provides the best wears for your next outing
      </h3>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive } from "vue";

export default {
  setup() {
    const data = reactive({
      myOptions: {
        navButtons: false,

        responsive: [
          {
            breakpoint: 500,
            settings: {
              autoplay: false,
            },
          },
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
  background: rgba(66, 66, 66);
}
.overlay {
  z-index: 100;
}
.carousel_image {
  z-index: -1;
  height: 100%;
}
</style>

<style lang="scss">
div.agile {
  position: relative;
  color: #bfdbfe;
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
