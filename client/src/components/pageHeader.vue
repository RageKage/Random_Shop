<template>
  <div>
    <!-- <div class="navs">
      <router-link class="nav-link" to="/">Home</router-link>

      <router-link class="nav-link" to="/Checkout">
        <span class="material-icons" style=""> add_shopping_cart </span>
        <q-tooltip class="bg-accent">Checkout</q-tooltip>
        {{ NumOfItems }}
      </router-link>

      <router-link class="nav-link" to="/Orders">Your Orders</router-link>
    </div> -->
    <header>
      <h1 class="header-h1">On-the-Go Bites</h1>
      <nav>
        <ul>
          <li class="nav-link">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-link">
            <router-link class="nav-link" to="/Checkout">
              <span class="material-icons" style=""> add_shopping_cart </span>
              <q-tooltip class="bg-accent">Checkout</q-tooltip>
              {{ NumOfItems }}
            </router-link>
          </li>
          <li class="nav-link">
            <router-link class="nav-link" to="/Orders">Your Orders</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { onMounted, $refs, computed } from "@vue/runtime-core";

export default {
  name: "Navs",
  setup() {
    const ItemsStore = useItemStore();

    // a computed property that returns the length of the selectedItem array
    const NumOfItems = computed(() => ItemsStore.data.selectedItem.length);

    return {
      NumOfItems,
      onMounted,
    };
  },
};
</script>

<style>
body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #172d13;
}

header {
  background-color: #1f1f1f;
  color: #fff;
  padding: 20px;
  padding: 10px;
  margin-bottom: 10px;

  /*  */

  box-shadow: 5px 5px #fdf5df;
  transition: all 0.7s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #6bb77b;

  /*  */

  top: 0;
  left: 0;
  right: 0;
  height: -40px; 

  z-index: 999;
}

.header-h1 {
  margin: 0;
  font-size: 29px;
  font-weight: normal;
  line-height: 2rem;
  letter-spacing: -0.01562em;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
}

.nav-link:hover {
  cursor: pointer;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-family: "Paytone One", sans-serif;
  color: black;
  background-color: white;
}

nav a {
  display: block;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  background-color: #333;
}
</style>
