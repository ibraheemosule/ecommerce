<template>
  <div class="bg-blue-200 px-12 sm:px-6 py-6 mt-12">
    <p v-if="verify" class="text-sm text-red-500 text-center italics">
      Input a valid email
    </p>
    <form class="w-full md:w-3/4 mx-auto" @submit.prevent="submit">
      <input
        v-model.lazy="email"
        class="
          emailValue
          mr-4
          newsletter
          border-gray-400
          sm:w-3/4
          p-1
          px-4
          border-solid
          rounded
          border-2
          focus:bg-gray-100 focus:border-gray-300
        "
        type="email"
        name="newsletter"
        placeholder="Subscribe To Our Emailing List"
        @focus="verify = false"
      />
      <button
        class="
          my-4
          w-40
          border-2 border-solid border-gray-400
          bg-red
          rounded
          px-1
          py-1
          font-bold
          bg-gray-300
          text-red-900
          hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
        "
        type="submit"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

export default {
  setup() {
    const data = reactive({
      email: "",
      verify: computed(() => {
        let details = data.email.trim();
        if (
          details.includes("@") &&
          details.includes(" ") == false &&
          details.includes(".")
        ) {
          if (details.lastIndexOf(".") < details.lastIndexOf("@")) {
            return true;
          }
          return false;
        }
        return details;
      }),
    });
    const submit = () => {
      console.log(data.email);
    };

    return {
      ...toRefs(data),
      submit,
    };
  },
};
</script>

<style lang="scss">
@media (max-width: 511px) {
  input.newsletter {
    min-width: 100%;
  }
}
</style>
