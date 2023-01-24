<template>
  <div>
    <div class="container">
      <MenuData
        class="card"
        v-for="item in ItemsStore.data.menuItem"
        v-bind:key="item.id"
        :item="item"
        v-on:increment-Quantity="AddQuantity"
        v-on:decrement-Quantity="SubtractQuantity"
        v-on:addToSelected="addItemToSelected"
      />
    </div>
  </div>
</template>

<script>
import MenuData from "./menuData.vue";

import { useItemStore } from "../Stores/Items";
import { onMounted } from "@vue/runtime-core";

// TODO: update the database so you can sort them categorize like drinks, desserts, or main dish etc. or find a food api that does this
export default {
  name: "menu_list",
  components: {
    MenuData,
  },
  setup() {
    const ItemsStore = useItemStore();

    // function showContent() {
    //   showContent = false; // forgot what this does
    //   console.log(showContent);
    // v-if="showContent"
    // }
    onMounted(() => {
      ItemsStore.fetchMenuData();
    });

    function AddQuantity(item, quantity) {
      console.log(item, quantity);
      ItemsStore.increaseQuantity(quantity, item); // this will add quantity
    }
    function SubtractQuantity(item, quantity) {
      ItemsStore.decreaseQuantity(quantity, item); // this will decrease quantity
    }

    function addItemToSelected(itemName, quantity) {
      ItemsStore.selectItem(itemName, quantity); // this will add item to selected so it can be shown in the checkout page
    }

    return {
      ItemsStore,
      onMounted,
      SubtractQuantity,
      AddQuantity,
      addItemToSelected,
      // showContent,
      // decrease,
      // ItemsStore
      // addItemToSelected,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap');

.card {
  flex-wrap: wrap;
  align-items: center;
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin: 1rem;
  transition: all 0.5s ease-in-out;
  background-color: #D76F30;
}

.card:hover {
  transform: scale(1.05);
  background-color: #aed3e3;

  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 3px 15px -1px;
  font-size: 99%;
  transition: all 0.4s ease-in-out;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 0px;
  overflow: auto;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 1.5rem;
  /* background-color: red; */
  /* border: #49516f 1px solid; */
  border-radius: 1rem;
}

@media only screen and (min-width: 375px) and (max-width: 414px) {
  .container {
    height: 540px;
    margin-left: 0;
  margin-right: 0;
  }
}
@media only screen and (min-width: 390px) {
  .container {
    height: 700px;
    margin-left: 0;
  margin-right: 0;
  }
}

@media only screen and (min-width: 414px) {
  .container {
    height: 750px;
    margin-left: 10rem;
  margin-right: 10rem;
  }
}

@media only screen and (min-width: 390px) and (max-width: 414px) {
  .container {
    height: 770px;
    margin-left: 0;
  margin-right: 0;
  }
  .card {
    width: 210px;
    margin-left: 0;
  margin-right: 0;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1500px) {
  .container {
    height: 650px;
    /* margin-left: 0;
  margin-right: 0; */
  }
}
</style>
