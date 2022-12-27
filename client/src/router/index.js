import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "@/components/homePage.vue";
import AboutSite from "@/components/AboutSite.vue";
import Checkout from "@/components/Checkout.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "menuList",
      component: homePage,
    },
    {
      path: "/AboutSite",
      name: "aboutSite",
      component: AboutSite,
    },
    {
        path: "/Checkout",
        name: "Checkout",
        component: Checkout,
      },
  ],
});
