<template>
  <div class="home">
    <home-body />
  </div>
</template>

<script>
import HomeBody from "@/components/Home/HomeBody.vue";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    HomeBody,
  },
  setup() {
    const store = useStore();
    const data = reactive({});
    (function () {
      return store.dispatch("firstModule/fetchApi");
    })();
    return {
      ...toRefs(data),
    };
  },
};
</script>
