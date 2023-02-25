<template>
  <div>
    <div class="container">
      <!-- class="card" -->
      <MenuData

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

// TODO FUTURE: update the database so you can sort them categorize like drinks, desserts, or main dish etc. or find a food api that does this
export default {
  name: "menu_list",
  components: {
    MenuData,
  },
  setup() {
    const ItemsStore = useItemStore();

    onMounted(() => {
      ItemsStore.fetchMenuData(); // get all menu items from our store
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
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap");

.container {
  display: flex;
  flex-wrap: wrap;
  height: 650px;
  overflow: auto;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 1.5rem;
  border-radius: 1rem;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: stretch;
}

.card {
  padding: 0.3rem;
  border-radius: 10px;
  width: 350px;
  margin: 1rem;
  justify-content: space-between;
  background: blanchedalmond;

}


.card:hover {
    background: lightgrey;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    /* cursor: pointer; */
}
</style>
