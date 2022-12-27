<template>
  <div>
    <div class="container">
      <MenuData
        class="card"
        v-for="item in data.menuItem"
        v-bind:key="item.id"
        :item="item"
        v-on:incrementQuantity="increaseQuantity"
        v-on:decrementQuantity="decreaseQuantity"
        v-on:addToSelected="addItemToSelected"
      />
    </div>
    <Checkout
      v-for="selected in data.selectedItem"
      :key="selected.id"
      v-bind:ItemSelected="selected"
    />
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { getCurrentInstance } from "vue";
import MenuData from "./menuData.vue";
import Checkout from "./Checkout.vue";

// TODO: set up props for the checkout and display all that is selected on there
// TODO: setup a request to the server to get only the current selected items and then add the Checkout component
export default {
  name: "menu_list",
  components: {
    MenuData,
    Checkout,
  },
  setup() {
    const service = useService();
    function useService() {
      const ctx = getCurrentInstance();
      return ctx.appContext.config.globalProperties.$Service;
    }
    const data = reactive({
      menuItem: [],
      selectedItem: [],
    });

    onMounted(() => {
      fetchMenuData();
    });

    function fetchMenuData() {
      service.Allmenuitems().then((menu) => (data.menuItem = menu));
    }

    function increaseQuantity(item, quantity) {
      service.updateQuantity(quantity, item).then(() => {
        fetchMenuData();
      });
    }

    function decreaseQuantity(item, quantity) {
      service.updateQuantity(quantity, item).then(() => {
        fetchMenuData();
      });
    }

    function addItemToSelected(itemName) {
      service
        .getOneItem(itemName)
        .then((item) => data.selectedItem.push(item), fetchMenuData());
    }

    return {
      fetchMenuData,
      onMounted,
      data,
      useService,
      increaseQuantity,
      decreaseQuantity,
      addItemToSelected,
    };
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  padding: 10px;
  margin: 1rem;
  transition: all 0.3s ease-in-out;

}

.card:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}

.card div:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.card div:nth-child(2) {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card div:last-child {
  font-size: 16px;
  font-weight: bold;
  color: #e74c3c;
}

.card .contain {
  display: block;
  align-items: center;
}

.card .add-button,
.card .remove-button {
  width: 30px;
  height: 30px;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  background-color: #333;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
}

.card .add-button:hover,
.card .remove-button:hover {
  background-color: rgb(155, 151, 151);
}

.card .count {
  margin: 0 10px;
  font-size: 24px;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}



</style>
