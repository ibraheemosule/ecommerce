<template>
  <div class="home">
    <home-body />
  </div>
</template>

<script>
import HomeBody from "@/components/Home/HomeBody.vue";
import { reactive, toRefs } from "vue";

export default {
  components: {
    HomeBody,
  },
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
};
</script>
