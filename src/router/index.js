import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import createStore from "../store/index";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Home,
  },
  {
    path: "/about",
    name: "About Us",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/Contact",
    name: "Contact Us",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/products",
    name: "Our Products",
    component: () => import("../views/Products.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(createStore.state.Firebase.signin);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!createStore.state.Firebase.signin && requiresAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
