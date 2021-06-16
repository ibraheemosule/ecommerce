<template><all-products /></template>

<script>
import { reactive, toRefs } from "vue";
import AllProducts from "../components/Products/AllProducts.vue";

export default {
  components: { AllProducts },
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped></style>
