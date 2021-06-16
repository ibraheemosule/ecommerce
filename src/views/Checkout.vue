<template>
  <div class="checkout">
    <form>
      
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped></style>
