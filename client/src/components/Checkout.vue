<template>
  <div class="main-wrapper">
    <div class="panel-wrapper">
      <div>
        <p class="panel-header">Checkout</p>
      </div>
      <div class="item-container">
        <div class="item-header">
          <div class="item-name">Item</div>
          <div class="item-quantity">Quantity</div>
          <div class="item-price">Price</div>
          <div class="empty"></div>
        </div>
        <div
          v-for="item in ItemStore.data.selectedItem"
          :key="item.id"
          :item="item"
          dense
          bordered
          padding
          class="rounded-borders item-row"
        >
          <div class="item-desc">{{ item.name }}</div>
          <div class="item-quantity">
            <button
              class="decrease-button"
              @click="decrementQuantity(item.name, item.quantity)"
            >
              <span class="material-icons"> remove </span>
            </button>

            {{ item.quantity }}
            <button
              class="increase-button"
              @click="incrementQuantity(item.name, item.quantity)"
            >
              <span class="material-icons"> add </span>
            </button>
          </div>
          <div class="item-price">
            ${{ calculateTotalPrice(item) }} <br /><span class="price-label"
              >${{ item.price }} for each</span
            >
          </div>
          <div class="item-price">
            <button class="remove-button" @click="remove(item)">Remove</button>
          </div>
        </div>
        <div class="info">
          <span class="total-price">
            <strong>Total: ${{ totalPrice }}</strong>
          </span>

          <q-btn
            @click="confirmOrder(ItemStore.data.selectedItem)"
            class="Confirm-Button"
            label="Confirm Order"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Swal from "sweetalert2";

import CheckoutTableRows from "./CheckoutTableRows.vue";

// TODO: when the Confirm Order button is clicked take them back to the home page and reset everything including what the previous order
// TODO: for future update maybe add a previous order List
// TODO: add a new button that will decrease the quantity and that should update the price as well

import { computed, onMounted } from "vue";
import { useItemStore } from "../Stores/Items";
// TODO: ! add a button that will remove all the items in cart
// TODO: ! add a fake tax 
// TODO: add a payment method before the order is confirmed

export default {
  components: { CheckoutTableRows },
  setup() {
    const ItemStore = useItemStore();
    const remove = ItemStore.remove;

    const totalPrice = computed(() => {
      // a computed property that returns the total price of the items in cart
      let total = 0;
      for (const item of ItemStore.data.selectedItem) {
        total += item.price * item.quantity;
      }

      return total.toFixed(2);
    });

    // const taxRate = 0.07;
    // const subtotal = totalPrice.value;
    // const tax = subtotal * taxRate;
    // const total = subtotal + tax;



    const confirmOrder = ItemStore.Notify;

    function decrementQuantity(item, quantity) {
      // increases the quantity
      ItemStore.SelectedDecreasing(quantity, item);
    }

    function incrementQuantity(item, quantity) {
      ItemStore.Selectedincrease(quantity, item);
    }

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    onMounted(() => {
      ItemStore;

    });

    return {
      ItemStore,
      onMounted,
      totalPrice,
      confirmOrder,
      remove,
      incrementQuantity,
      decrementQuantity,
      calculateTotalPrice,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap");
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.panel-wrapper {
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px 0;
  color: #000;
  border-radius: 1rem;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  overflow-y: scroll;
  height: 470px;
  overflow-y: scroll;
  overflow-x: scroll;
  background-color: rgb(226 232 240);
}
.panel-header {
  font-size: 3rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}
.total-price {
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #000;
}
.price-label {
  font-size: 0.6em;
  color: #666;
}
.Confirm-Button {
  height: 30px;
  font-size: 15px;
  border: none;
  box-shadow: 5px 5px grey;
  color: #fff;
  transition: all 0.3s ease-in-out;
  background-color: #0077c8;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
}
.Confirm-Button:hover {
  background-color: #2f9b2f;
}
.Confirm-Button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}
.Confirm-header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  color: #000;
  width: 80%;
  border-radius: 10px;
  margin: 10px 0;
  color: #fff;
  border-radius: 1rem;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  box-shadow: 20px 20px grey;
  overflow-y: scroll;
}
.order-container {
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
}
.order-label {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.item-container {
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
}
.item-header {
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  font-weight: 700;
}
.empty,
.item-price,
.item-quantity {
  width: auto;
  text-align: center;
}
.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}
.item-row:hover {
  box-shadow: 5px 10px 10px 10px rgb(0 0 0 / 10%);
  font-size: 15px;
  border-radius: 1rem;
  background-color: rgb(241 245 249);
  transition: all 0.3s ease-in-out;
}
.item-desc,
.item-name {
  width: 10%;
}
.order-total {
  font-weight: 700;
  font-size: 1.5rem;
}
.remove-button {
  background-color: #0077c8;
  border: none;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 5%;
}
.remove-button:hover {
  background-color: tomato;
  box-shadow: 5px 5px #00f;
  color: #fff;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px tomato;
}
.remove-button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}
.decrease-button,
.increase-button {
  decoration: none;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.decrease-button:hover {
  background-color: #9b2f2f;
  color: #fff;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px #9b2f2f;
}
.increase-button:hover {
  background-color: #2f9bbf;
  color: #fff;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px #2f9bbf;
}

.info {
  /* This the total and confirm button div */
  padding: 10px;
  box-sizing: border-box;
  max-width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-right: 10rem;
    padding-left: 10rem; */
  align-content: center;
  flex-wrap: wrap;
}
@media only screen and (min-width: 375px) and (max-width: 375px) {
  .panel-header {
    font-size: 1.8rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  .panel-wrapper {
    height: 520px;
    box-shadow: 10px 10px grey;
  }
  .Confirm-Button {
    height: 15px;
    font-size: 10px;
    margin-left: 4rem;
  }
  .total-price {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 428px) and (max-width: 428px) {
  .panel-header {
    font-size: 1.8rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  .panel-wrapper {
    height: 520px;
    box-shadow: 10px 10px grey;
  }
  .Confirm-Button {
    height: 15px;
    font-size: 10px;
    margin-left: 4rem;
  }
  .total-price {
    font-size: 1rem;
  }
}
</style>
