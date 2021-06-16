<template>
  <div class="home">
    <home-body />
  </div>
</template>

<script>
import HomeBody from "@/components/Home/HomeBody.vue";
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    HomeBody,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      first: "another",
      shirt: computed(() => store.getters.shirt),
    });
    (function () {
      return store.dispatch("fetchApi");
    })();
    return {
      ...toRefs(data),
    };
  },
};
</script>
