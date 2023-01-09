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
            <div class="quantity text-align-left">
              {{ item.quantity }}
              <!-- <button @click="decrementQuantity(item.quantity, item.name)">-</button>
              {{ item.quantity }}
              <button @click="incrementQuantity(item.quantity, item.name)">+</button> -->
            </div>
            <div class="price text-align-left">
              ${{ calculateTotalPrice(item) }}
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
          class="Confirm-Button"
          @click="confirmOrder(ItemStore.data.selectedItem)"
        >
          Confirm Order
        </button>
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
    // const previousOrders = ref([]);
    const ItemStore = useItemStore();

    const PreviousOrder = ItemStore.data.SaveOrders;

    // console.log(PreviousOrder);

    const totalPrice = computed(() => {
      // a computed property that returns the total price of the items in cart
      let total = 0;
      for (const item of ItemStore.data.selectedItem) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    });

    console.log(totalPrice);

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    const remove = ItemStore.remove;

    const incrementQuantity = ItemStore.increaseQuantity;

    const decrementQuantity = ItemStore.decreaseQuantity;

    const confirmOrder = ItemStore.Notify;

    onMounted(() => {
      ItemStore;
    });

    return {
      ItemStore,
      onMounted,
      totalPrice,
      calculateTotalPrice,
      remove,
      confirmOrder,
      PreviousOrder,
      incrementQuantity,
      decrementQuantity,
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

.remove-button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.total-price {
  margin: 20px 0;
  font-size: 1.5em;
}

.price-label {
  font-size: 0.6em;
  color: #666;
}

.Confirm-Button {
  /* width: 40px; */
  height: 30px;
  font-size: 20px;
  border: none;
  /* border: 2px solid black; */
  box-shadow: 5px 5px grey;
  color: white;
  transition: all 0.3s ease-in-out;
  background-color: lightblue;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
}

.Confirm-Button:hover {
  background-color: #43a6c6;
}
.Confirm-Button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}
</style>
