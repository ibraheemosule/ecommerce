<template>
  <Disclosure as="nav" class="bg-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="@/assets/Images/cart.png"
              alt="Workflow"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <template v-for="item in navigation" :key="item">
                <router-link
                  :to="{ name: item }"
                  class="
                    navList
                    text-gray-600
                    hover:bg-gray-700 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  >{{ item }}</router-link
                >
              </template>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <router-link
              :to="{ name: 'Cart' }"
              class="bg-gray-200 p-0 focus:p-0 focus:m-0 m-0"
            >
              <button
                class="
                  flex
                  p-1
                  rounded-full
                  text-gray-600
                  hover:text-gray-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-900
                  focus:ring-white
                "
              >
                <span class="sr-only">Cart</span>
                <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
                <span class="text-xs ml-1 text-red-600">{{
                  selectedProducts ? selectedProducts : ""
                }}</span>
              </button>
            </router-link>

            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="
                    max-w-xs
                    text-gray-600
                    bg-gray-200
                    rounded-full
                    flex
                    items-center
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-offset-gray-600
                    focus:ring-white
                  "
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    v-if="image"
                    class="h-8 w-8 rounded-full"
                    :src="image"
                    alt=""
                  />
                  <img
                    v-else
                    class="h-8 w-8 rounded-full"
                    src="@/assets/Images/person.jpg"
                    alt="profile picture"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <MenuItem v-if="signin" v-slot="{ active }">
                    <router-link
                      to="/profile"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-600 option',
                      ]"
                      >Profile</router-link
                    >
                  </MenuItem>

                  <MenuItem v-if="signin" v-slot="{ active }">
                    <router-link
                      @click="signout"
                      to="/login"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-600 option',
                      ]"
                      >Sign Out</router-link
                    >
                  </MenuItem>
                  <MenuItem v-if="!signin" v-slot="{ active }">
                    <router-link
                      to="/login"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-600 option',
                      ]"
                      >Sign In</router-link
                    >
                  </MenuItem>
                  <MenuItem v-if="!signin" v-slot="{ active }">
                    <router-link
                      to="/signup"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-600 option',
                      ]"
                      >Sign Up</router-link
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <DisclosureButton
            class="
              bg-gray-200
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-600
              hover:text-white hover:bg-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="item in navigation" :key="item">
          <router-link
            :to="{ name: item }"
            class="
              text-gray-600
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >{{ item }}</router-link
          >
        </template>
      </div>
      <div class="pt-4 pb-3 border-t border-blue-300">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              v-if="image"
              class="h-10 w-10 rounded-full"
              :src="image"
              alt="profile picture"
            />
            <img
              v-else
              class="h-10 w-10 rounded-full"
              src="@/assets/Images/person.jpg"
              alt="profile picture"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none">{{ name }}</div>
            <div class="text-sm font-medium leading-none text-gray-400">
              {{ email }}
            </div>
          </div>
          <router-link
            :to="{ name: 'Cart' }"
            class="ml-auto bg-gray-200 p-0 focus:p-0 focus:m-0 m-0"
          >
            <button
              class="
                flex
                p-1
                rounded-full
                text-gray-600
                hover:text-gray-900
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-900
                focus:ring-white
              "
            >
              <span class="sr-only">Cart</span>
              <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
              <span class="text-xs ml-1 text-red-600">{{
                selectedProducts ? selectedProducts : ""
              }}</span>
            </button>
          </router-link>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <router-link
            v-if="signin"
            to="/profile"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-gray-600
              hover:text-white hover:bg-gray-700
            "
            >Profile</router-link
          >
          <router-link
            v-if="signin"
            @click="signout"
            to="/login"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-gray-600
              hover:text-white hover:bg-gray-700
            "
            >Sign Out</router-link
          >
          <router-link
            v-if="!signin"
            to="/login"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-gray-600
              hover:text-white hover:bg-gray-700
            "
            >Sign In</router-link
          >
          <router-link
            v-if="!signin"
            to="/signup"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-gray-600
              hover:text-white hover:bg-gray-700
            "
            >Sign Up</router-link
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ShoppingCartIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      navigation: ["Homepage", "About Us", "Our Products", "Contact Us"],
      signin: computed(() => store.getters["Firebase/signin"]),
      open: false,
      name: computed(() => store.getters["Firebase/name"]),
      image: computed(() => store.getters["Firebase/image"]),
      email: computed(() => store.getters["Firebase/email"]),
      selectedProducts: computed(
        () => store.state.firstModule.selectedProducts.length
      ),
    });

    const signout = () => store.dispatch("Firebase/signout");

    return {
      ...toRefs(data),
      signout,
    };
  },
};
</script>

<style>
.origin-top-right {
  z-index: 10;
}
.router-link-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
  border-radius: 0.375rem;
  padding: 0.5em 0.75em;
  color: rgba(255, 255, 255) !important;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
a.option {
  background-color: white;
  color: black !important;
  border-style: none;
  cursor: pointer;
}
a.option:hover {
  color: gray !important;
}
</style>
