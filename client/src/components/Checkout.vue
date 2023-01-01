<template>
  <div class="main-wrapper">
    <div class="panel-wrapper">
      <div class="basket-header panel-header">
        <h2
          class="text-align-left text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          Checkout
        </h2>
      </div>
      <div class="basket-body panel-body">
        <form>
          <div class="row column-titles">
            <div class="name text-align-left">Name</div>
            <div class="quantity text-align-left">Quantity</div>
            <div class="price text-align-left">Price</div>
          </div>
          <div
            v-for="item in ItemStore.data.selectedItem"
            :key="item.id"
            class="row product"
          >
            <div class="name text-align-left">{{ item.name }}</div>
            <div class="quantity text-align-left">{{ item.quantity }}</div>
            <div class="price text-align-left">
              {{ calculateTotalPrice(item) }}
              <div>
                <!-- ${{ calculateTotalPrice(item) }} -->
                <span class="price-label">${{ item.price }} for each</span>
              </div>
              <button
                class="remove-button text-transform-uppercase"
                @click="remove(item)"
              >
                Remove
              </button>
            </div>
          </div>
        </form>
        <div
          class="total-price text-align-right text-word-spacing-3 text-shadow-2"
        >
          Total: ${{ totalPrice }}
        </div>
      </div>
    </div>
    <div class="panel-wrapper">
      <div class="creditcard-header panel-header">
        <h2
          class="text-align-left text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          Payment
        </h2>
      </div>
      <div class="creditcard-body panel-body">
        <button
          @click="Notify"
          class="text-align-center text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          Confirm Order
        </button>
        <h1
          class="text-align-center text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          Add a previous order list
        </h1>
        <div>
          <div class="previous-orders">
            <h2>Previous Orders</h2>
            <ul v-for="order in previousOrders" :key="order.id">
              <li>{{ order.name }}</li>
              <li>{{ order.quantity }}</li>
              <li>{{ order.price }}</li>
            </ul>
          </div>
        </div>
        <h1
          class="text-align-center text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          Add a decrease quantity and increase quantity button so they make
          changes on here instead
        </h1>
        <h1
          class="text-align-center text-word-spacing-3 text-transform-uppercase text-shadow-2"
        >
          also make sure that the remove removes from the database,
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Swal from "sweetalert2";

// TODO: when the Confirm Order button is clicked take them back to the home page and reset everything including what the previous order
// TODO: for future update maybe add a previous order List
// TODO: add a new button that will decrease the quantity and that should update the price as well

import {
  set,
  ref,
  computed,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import { useItemStore } from "../Stores/Items";

export default {
  setup() {
    const previousOrders = ref([]);
    const ItemStore = useItemStore();

    const totalPrice = computed(() => {
      let total = 0;
      for (const item of ItemStore.data.selectedItem) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    });

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2);
    }

    const remove = (item) => {
      const index = ItemStore.data.selectedItem.indexOf(item);
      ItemStore.data.selectedItem.splice(index, 1);
    };

    function Notify() {
      for (const item of this.ItemStore.data.selectedItem) {
        this.previousOrders.push(item);
      }
      // clear the current order
      this.ItemStore.data.selectedItem = [];
      this.ItemStore.data.itemsInBasket = 0;
      return Swal.fire({
        text: "Thank you for placing an Order",
        icon: "success",
        confirmButtonText: "Great",
      });
    }

    onMounted(() => {
      ItemStore;
    });

    return {
      ItemStore,
      onMounted,
      totalPrice,
      calculateTotalPrice,
      remove,
      Notify,
      previousOrders,
    };
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel-wrapper {
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
}

.panel-header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}

.panel-body {
  padding: 20px;
}

.column-titles {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-weight: bold;
}

.product {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.remove-button {
  background-color: tomato;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.total-price {
  margin: 20px 0;
  font-size: 1.5em;
}

.price-label {
  font-size: 0.8em;
  color: #666;
}

.previous-orders {
  width: 80%;
  margin: 20px auto;
}

.previous-orders h2 {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.previous-orders ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.previous-orders li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.previous-orders li:last-child {
  border-bottom: none;
}
</style>
