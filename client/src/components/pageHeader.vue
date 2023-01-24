<template>
  <div class="navs">
    <router-link class="nav-link" to="/">Home</router-link>

    <router-link class="nav-link" to="/Checkout">
      <span class="material-icons" style=""> add_shopping_cart </span>
      <q-tooltip class="bg-accent">Checkout</q-tooltip>
      {{ NumOfItems }}
    </router-link>

    <router-link class="nav-link" to="/Orders">Your Orders</router-link>
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { onMounted, ref, computed } from "@vue/runtime-core";

export default {
  name: "Navs",
  setup() {
    const ItemsStore = useItemStore();

    // a computed property that returns the length of the selectedItem array
    const NumOfItems = computed(() => ItemsStore.data.selectedItem.length);

    return {
      NumOfItems,
    };
  },
};
</script>

<style>

.tooltip:hover {

}



body {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
 font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: rgb(241 245 249); */
  /* background-color: #d4d4d4; */
  background-color:  #172D13;
}

.nav-link {
  text-decoration: none;
  margin: 0 20px;
  padding: 0 20px;
  width: 40px;
  height: 25px;
  font-size: 18px;
  border: none;
  box-shadow: 5px 5px #FDF5DF;
  transition: all 0.7s ease-in-out;
  /* background-color: #4d4d4d; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #6BB77B;
}

.nav-link:hover {
  background-color: 
#c1632b;
  border-radius: 1rem;
}

.nav-link:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.router-link-exact-active {
  border-radius: 1rem;
}

:root {
  --secondary-color: 
#c1632b;
  --text-color: #ffffff;
}

.navs {
  background-color: var(--primary-color);
  height: 70px;
  border-radius: 1rem;
  padding-top: 20px;
}

.nav-link {
  color: var(--text-color);
}

.router-link-exact-active {
  background-color: var(--secondary-color);
}
@media only screen and (min-width: 375px) and (max-width: 375px) {
  .nav-link {
    text-decoration: none;
    margin: 0 10px;
    padding: 0px 10px;
    width: 40px;
    height: 25px;
    font-size: 15px;
  }

  .navs {
    background-color: var(--primary-color);
    height: 60px;
  }
}

@media only screen and (min-width: 390px) and (max-width: 414px) {
  .nav-link {
    text-decoration: none;
    margin: 0 10px;
    padding: 0px 12px;
    width: 40px;
    height: 25px;
    font-size: 18px;
  }
  .navs {
    height: 60px;
  }
}
</style>
