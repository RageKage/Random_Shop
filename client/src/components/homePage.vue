<template>
  <div>
    <div v-if="showContent" class="container">
      
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

    function showContent() {
      showContent = true;
    }
    onMounted(() => {
      ItemsStore.fetchMenuData();
      showContent();
    });

    function AddQuantity(item, quantity) {
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
      showContent,
      // decrease,
      // ItemsStore
      // addItemToSelected,
    };
  },
};
</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 3px 15px -1px; */
  box-shadow: 5px 5px grey;
  padding: 10px;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
  /* background-color: #AED3E3; */
  background-color: #f2f2f2;
  padding-top: 10px;
  margin-top: 30px;
}

.card:hover {
  transform: scale(1.05);
  background-color: #aed3e3;
  /* background-color: #F9A81A; */
  /* box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 3px 15px -1px;
  font-size: 90%;
}

.card div:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.card div:nth-child(2) {
  font-size: 14px;
  color: #49516f;
  /* color: red; */
  margin-bottom: 10px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card div:last-child {
  font-size: 16px;
  font-weight: bold;
  /* color: #e74c3c; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 650px;
  overflow: auto;
}



@media only screen and (min-width: 375px) and (max-width: 414px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 550px;
    overflow: auto;
  }
}
@media only screen and (min-width: 390px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 700px;
    overflow: auto;
  }
}

@media only screen and (min-width: 414px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 750px;
    overflow: auto;
  }
}

@media only screen and (min-width:1000px) and (max-width: 1500px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 650px;
    overflow: auto;
  }
}
</style>
