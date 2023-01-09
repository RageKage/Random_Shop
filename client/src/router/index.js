import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "@/components/homePage.vue";
import AboutSite from "@/components/AboutSite.vue";
import Checkout from "@/components/Checkout.vue";
import OrdersPage from "@/components/OrdersPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

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
    {
      path: "/Orders",
      name: "OrdersPage",
      component: OrdersPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: ErrorPage,
    }
  ],
});
