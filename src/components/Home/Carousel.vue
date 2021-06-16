<template>
  <VueAgile :autoplay="true" :autoplaySpeed="3000" :options="options">
    <div class="slide w-full bg-red-500 flex">
      <h3>slide 1</h3>
    </div>
    <div class="slide w-full bg-yellow-500 flex">
      <h3>slide n</h3>
    </div></VueAgile
  >
</template>
<style lang="scss">
div.agile {
  position: relative;
  .agile__actions {
    font: {
      size: 2em;
      weight: 600;
    }
    .agile__nav-button--prev {
      position: absolute;
      top: 50%;
    }
    .agile__nav-button--next {
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
}
</style>
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
.slide {
  min-height: 100vmin;
}
</style>
