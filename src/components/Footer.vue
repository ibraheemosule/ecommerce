<template>
  <footer class="bg-gray-200 border-t-2 border-solid border-red-900">
    <div class="flex justify-around flex-wrap p-8 font-bold text-red-900">
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          Our Address
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <p>
            50, Ibraheem Musa Street, Off Idimu/Ejigbo Road, Opposite Chrisland
            College, Lagos State, Nigeria
          </p>
        </ul>
      </div>
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          About The Company
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <p>
            Founded in 2020, We are a fashion oriented company that provides the
            most affordable wears produced from the best materials
          </p>
        </ul>
      </div>
      <div class="sm:w-1/4 w-full p-12">
        <h2 class="text-red-900 font-bold text-xl">
          Our Contact
          <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
        </h2>
        <ul class="mt-4 font-normal text-gray-600">
          <p>
            Click on the social media icon below of your choice to contact us
          </p>
          <li class="flex flex-wrap items-baseline justify-between mt-8">
            <a href="https://twitter.com/ibraheemsulay" class="w-8 h-full"
              ><img src="@/assets/Images/twitter.png" alt="twitter logo"
            /></a>
            <a
              href="https://facebook.com/sulayibraheem"
              class="w-8 h-8 align-baseline"
              ><img src="@/assets/Images/facebook.png" alt="facebook logo"
            /></a>
            <a href="https://instagram.com/ibraheemsulay" class="w-8 h-full"
              ><img src="@/assets/Images/instagram.png" alt="instagram logo"
            /></a>
            <a
              href="https://wa.me/+2348067153177"
              target="_blank"
              class="w-8 h-full"
              ><img src="@/assets/Images/whatsapp.png" alt="whatsapp logo"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-gray-400 text-md text-center py-2 text-gray-600">
      &#169; Copyright ({{ date }})
    </div>
  </footer>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      date: new Date().getFullYear(),
    });
    <Footer />;
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  ul {
    list-style: none;
    li {
      text-decoration: none;
    }
  }
}
</style>
