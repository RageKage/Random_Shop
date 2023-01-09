<template>
  <div class="navs">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/Checkout"
      >CheckOut ({{ NumOfItems }})
      <!-- <img src="@/assets/checkout.png" alt="" /> -->
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
.navs {
  background-color: #000000;
  height: 50px;
}

.nav-link {
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 20px;
  padding: 0 20px;
  width: 40px;
  height: 25px;
  font-size: 18px;
  border: none;
  box-shadow: 5px 5px grey;
  transition: all 0.3s ease-in-out;
  background-color: lightblue;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
}

.nav-link:hover {
  background-color: #cccccc;
  border-radius: 1rem;
  box-shadow: 0 3px 15px -2px;
  transform: scale(0.9);
}

.nav-link:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.router-link-exact-active {
  background-color: #cccccc;
  border-radius: 1rem;
}

:root {
  --primary-color: #000000;
  --secondary-color: #cccccc;
  --text-color: #ffffff;
}

.navs {
  background-color: var(--primary-color);
  height: 40px;
  border-radius: 1rem;
  padding-top: 20px;
  /* position: absolute; */
}

.nav-link {
  color: var(--text-color);
  font-size: 1rem;
}

.nav-link:hover {
  background-color: var(--secondary-color);
  border-radius: 1rem;
}

.router-link-exact-active {
  background-color: var(--secondary-color);
}
</style>
