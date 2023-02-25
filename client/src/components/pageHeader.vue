<template>
  <div>
    <div id="mySidenav" class="navs">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <router-link class="nav-link" to="/">Home</router-link>

      <router-link class="nav-link" to="/Checkout">
        <span class="material-icons" style=""> add_shopping_cart </span>
        <q-tooltip class="bg-accent">Checkout</q-tooltip>
        {{ NumOfItems }}
      </router-link>

      <router-link class="nav-link" to="/Orders">Your Orders</router-link>
    </div>

    <!--  -->
    <!--  -->
    <!--  -->
    <span
      style="font-size: 30px; cursor: pointer; color: #ebece9"
      class="menu-button"
      @click="openNav()"
      >&#9776;</span
    >
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { onMounted, $refs, computed } from "@vue/runtime-core";

export default {
  name: "Navs",
  setup() {
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    const ItemsStore = useItemStore();

    // function toggleDropdown() {
    //   document.querySelector("#myDropdown").classList.toggle("show");
    // }

    // onMounted(() => {
    //   window.addEventListener("click", (event) => {
    //     console.log(event.target);
    //     if (!event.target.matches("#dropbtn")) {
    //       let dropdowns = document.querySelector("#myDropdown");

    //       if (dropdowns.classList.contains("show")) {
    //         dropdowns.classList.remove("show");
    //       }
    //     }
    //   });
    // });

    // a computed property that returns the length of the selectedItem array
    const NumOfItems = computed(() => ItemsStore.data.selectedItem.length);

    return {
      NumOfItems,
      // toggleDropdown,
      onMounted,
      openNav,
      closeNav,
    };
  },
};
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.tooltip:hover {
}

body {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: rgb(241 245 249); */
  /* background-color: #d4d4d4; */
  background-color: #172d13;
}

.nav-link {
  text-decoration: none;
  margin: 0 20px;
  padding: 0 20px;
  width: 40px;
  height: 25px;
  font-size: 18px;
  border: none;
  box-shadow: 5px 5px #fdf5df;
  transition: all 0.7s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #6bb77b;
}

.nav-link:hover {

  cursor: pointer;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border: none;
  color: rgb(255, 255, 255);
  transition: all 0.4s ease-in-out;
  background-color: #0077c8;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;
  font-family: "Paytone One", sans-serif;
  color: white;
  box-shadow: 0 -50px 15px;
  transform: scale(0.9);
  box-shadow: 5px 5px #fdf5df;



}

.nav-link:active {
  /* transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
  transition: all 0.4s ease-in-out; */
}

.router-link-exact-active {
  border-radius: 1rem;
}

:root {
  --secondary-color: #c1632b;
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
  font-size: 0.9rem;
  box-shadow: 5px 5px grey;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;
  font-family: "Paytone One", sans-serif;
  color: white;
  box-shadow: 5px 5px #fdf5df;
}

.menu-button,
.closebtn {
  display: none;
}

@media only screen and (min-width: 375px) and (max-width: 375px) {
  .menu-button,
  .closebtn {
    /* display: contents; */
    display: block;
    padding: 10px 5px;
    /* text-decoration: none; */
    padding-right: 280px;
  }
  body {
    font-family: "Lato", sans-serif;
  }

  .navs {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .navs a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .navs a:hover {
    color: #f1f1f1;
  }

  .navs .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .navs {
    padding-top: 15px;
  }
  .navs a {
    font-size: 18px;
  }
}
</style>
