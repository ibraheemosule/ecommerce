<template>
  <div class="products text-red-900">
    <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
      <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
        our products
      </h1>
    </header>
    <main class="my-20 px-12">
      <article class="male-wears text-gray-600">
        <section class="shoes">
          <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
            Footwears
            <hr
              class="w-6 mt-4 border-1 border-solid border-gray-400 mx-auto"
            />
          </h2>
          <div class="flex flex-wrap justify-around">
            <div
              v-for="photo in rootShoes"
              :key="photo.id"
              class="
                flex
                w-full
                sm:w-1/3
                lg:w-1/4
                flex-col
                my-6
                mx-2
                rounded-lg
                pb-6
                bg-gray-200
                shadow
              "
            >
              <div class="rounded h-64 w-full">
                <img
                  class="
                    border-solid border-b-2 border-red-900
                    rounded-t-lg
                    w-full
                    h-full
                  "
                  :src="photo.src.medium"
                  alt="first image"
                />
              </div>
              <div class="info mt-2 ml-4">
                <p class="uppercase font-bold text-sm mt-2">
                  Name:
                  <span class="capitalize font-medium">{{
                    photo.photographer
                  }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Description:
                  <span class="lowercase font-medium"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Item ID:
                  <span class="capitalize font-medium">{{ photo.id }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Price:
                  <span class="text-red-600 capitalize font-medium">
                    &#x20A6;{{ Math.round(photo.height / 100) * 100 }}</span
                  >
                </p>
                <button
                  :id="photo.id"
                  @click="addShoes"
                  class="
                    mt-3
                    border-2 border-solid border-gray-400
                    rounded
                    px-2
                    py-1
                    font-extrabold
                    bg-gray-300
                    text-red-900
                    hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
                  "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <hr
            class="mt-8 mb-16 border-1 border-solid border-gray-200 mx-auto"
          />
        </section>
        <section class="shirts">
          <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
            Shirts
            <hr
              class="w-6 mt-4 border-1 border-solid border-gray-400 mx-auto"
            />
          </h2>
          <div class="flex flex-wrap justify-around">
            <div
              v-for="photo in rootShirts"
              :key="photo.id"
              class="
                flex
                w-full
                sm:w-1/3
                lg:w-1/4
                flex-col
                my-6
                mx-2
                rounded-lg
                pb-6
                bg-gray-200
                shadow
              "
            >
              <div class="rounded h-64 w-full">
                <img
                  class="
                    border-solid border-b-2 border-red-900
                    rounded-t-lg
                    w-full
                    h-full
                  "
                  :src="photo.src.medium"
                  alt="first image"
                />
              </div>
              <div class="info mt-2 ml-4">
                <p class="uppercase font-bold text-sm mt-2">
                  Name:
                  <span class="capitalize font-medium">{{
                    photo.photographer
                  }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Description:
                  <span class="lowercase font-medium"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Item ID:
                  <span class="capitalize font-medium">{{ photo.id }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Price:
                  <span class="text-red-600 capitalize font-medium">
                    &#x20A6;{{ Math.round(photo.height / 100) * 100 }}</span
                  >
                </p>
                <button
                  :id="photo.id"
                  @click="addShirts"
                  class="
                    mt-3
                    border-2 border-solid border-gray-400
                    bg-red
                    rounded
                    px-2
                    py-1
                    font-extrabold
                    bg-gray-300
                    text-red-900
                    hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
                  "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <hr
            class="mt-8 mb-16 border-1 border-solid border-gray-200 mx-auto"
          />
        </section>
        <section class="shoes">
          <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
            Pants
            <hr
              class="w-6 mt-4 border-1 border-solid border-gray-400 mx-auto"
            />
          </h2>
          <div class="flex flex-wrap justify-around">
            <div
              v-for="photo in rootPants"
              :key="photo.id"
              class="
                flex
                w-full
                sm:w-1/3
                lg:w-1/4
                flex-col
                my-6
                mx-2
                rounded-lg
                pb-6
                bg-gray-200
                shadow
              "
            >
              <div class="rounded h-64 w-full">
                <img
                  class="
                    border-solid border-b-2 border-red-900
                    rounded-t-lg
                    w-full
                    h-full
                  "
                  :src="photo.src.medium"
                  alt="first image"
                />
              </div>
              <div class="info mt-2 ml-4">
                <p class="uppercase font-bold text-sm mt-2">
                  Name:
                  <span class="capitalize font-medium">{{
                    photo.photographer
                  }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Description:
                  <span class="lowercase font-medium"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Item ID:
                  <span class="capitalize font-medium">{{ photo.id }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Price:
                  <span class="text-red-600 capitalize font-medium">
                    &#x20A6;{{ Math.round(photo.height / 100) * 100 }}</span
                  >
                </p>
                <button
                  :id="photo.id"
                  @click="addPants"
                  class="
                    mt-3
                    border-2 border-solid border-gray-400
                    bg-red
                    rounded
                    px-2
                    py-1
                    font-extrabold
                    bg-gray-300
                    text-red-900
                    hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
                  "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <hr
            class="mt-8 mb-16 border-1 border-solid border-gray-200 mx-auto"
          />
        </section>
        <section class="shoes">
          <h2 class="text-center text-red-900 font-extrabold text-3xl mb-8">
            Caps
            <hr
              class="w-6 mt-4 border-1 border-solid border-gray-400 mx-auto"
            />
          </h2>
          <div class="flex flex-wrap justify-around">
            <div
              v-for="photo in rootCaps"
              :key="photo.id"
              class="
                flex
                w-full
                sm:w-1/3
                lg:w-1/4
                flex-col
                my-6
                mx-2
                rounded-lg
                pb-6
                bg-gray-200
                shadow
              "
            >
              <div class="rounded h-64 w-full">
                <img
                  class="
                    border-solid border-b-2 border-red-900
                    rounded-t-lg
                    w-full
                    h-full
                  "
                  :src="photo.src.medium"
                  alt="first image"
                />
              </div>
              <div class="info mt-2 ml-4">
                <p class="uppercase font-bold text-sm mt-2">
                  Name:
                  <span class="capitalize font-medium">{{
                    photo.photographer
                  }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Description:
                  <span class="lowercase font-medium"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Item ID:
                  <span class="capitalize font-medium">{{ photo.id }}</span>
                </p>
                <p class="uppercase font-bold text-sm mt-2">
                  Price:
                  <span class="text-red-600 capitalize font-medium">
                    &#x20A6;{{ Math.round(photo.height / 100) * 100 }}</span
                  >
                </p>
                <button
                  :id="photo.id"
                  @click="addCaps"
                  class="
                    mt-3
                    border-2 border-solid border-gray-400
                    bg-red
                    rounded
                    px-2
                    py-1
                    font-extrabold
                    bg-gray-300
                    text-red-900
                    hover:bg-gray-400 hover:text-red-500 hover:border-gray-600
                  "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const data = reactive({
      rootShirts: computed(() => store.state.firstModule.rootShirts),
      rootPants: computed(() => store.state.firstModule.rootPants),
      rootShoes: computed(() => store.state.firstModule.rootShoes),
      rootCaps: computed(() => store.state.firstModule.rootCaps),
      prices: computed(() => store.getters["firstModule/prices"]),
    });

    const addShoes = (e) => {
      let element = e.currentTarget;
      element.clicks = (element.clicks || 0) + 1;

      if (element.clicks % 2 === 1) {
        const added = data.rootShoes.filter((val) => val.id == element.id);
        store.dispatch("firstModule/selected", { product: added });
        element.innerHTML = "Added To Cart";
      } else {
        const remove = data.rootShoes.filter((val) => val.id == element.id);
        store.dispatch("firstModule/removed", { product: remove });
        element.innerHTML = "Add To Cart";
      }
    };
    const addShirts = (e) => {
      let element = e.currentTarget;
      element.clicks = (element.clicks || 0) + 1;

      if (element.clicks % 2 === 1) {
        const added = data.rootShirts.filter((val) => val.id == element.id);
        store.dispatch("firstModule/selected", { product: added });
        element.innerHTML = "Added To Cart";
      } else {
        const remove = data.rootShirts.filter((val) => val.id == element.id);
        store.dispatch("firstModule/removed", { product: remove });
        element.innerHTML = "Add To Cart";
      }
    };

    const addPants = (e) => {
      let element = e.currentTarget;
      element.clicks = (element.clicks || 0) + 1;

      if (element.clicks % 2 === 1) {
        const added = data.rootPants.filter((val) => val.id == element.id);
        store.dispatch("firstModule/selected", { product: added });
        element.innerHTML = "Added To Cart";
      } else {
        const remove = data.rootPants.filter((val) => val.id == element.id);
        store.dispatch("firstModule/removed", { product: remove });
        element.innerHTML = "Add To Cart";
      }
    };

    const addCaps = (e) => {
      let element = e.currentTarget;
      element.clicks = (element.clicks || 0) + 1;

      if (element.clicks % 2 === 1) {
        const added = data.rootCaps.filter((val) => val.id == element.id);
        store.dispatch("firstModule/selected", { product: added });
        element.innerHTML = "Added To Cart";
      } else {
        const remove = data.rootCaps.filter((val) => val.id == element.id);
        store.dispatch("firstModule/removed", { product: remove });
        element.innerHTML = "Add To Cart";
      }
    };

    return {
      ...toRefs(data),
      addShoes,
      addShirts,
      addPants,
      addCaps,
    };
  },
};
</script>

<style lang="scss" scoped></style>
