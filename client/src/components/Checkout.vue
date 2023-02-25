
<template>
  <div class="main-wrapper">
    <div class="panel-wrapper">
      <div>
        <p class="panel-header">Checkout</p>
      </div>
      <table class="table">
        <tr>
          <th class="item-theader">Item</th>
          <th class="quantity-theader">Quantity</th>
          <th class="price-theader">Price</th>
        </tr>
        <br />
        <CheckoutTableRows
          v-for="item in ItemStore.data.selectedItem"
          :key="item.id"
          :item="item"
        />
        <!-- <div class="total-price">Total: ${{ totalPrice }}</div> -->
      </table>
      <!--  -->
      <!-- <div class="total-price">Total: ${{ totalPrice }}</div> -->
      <span class="total-price">
        <strong> Total: ${{ totalPrice }}</strong></span
      >

      <q-btn
        @click="confirmOrder(ItemStore.data.selectedItem)"
        class="Confirm-Button"
        label="Confirm Order"
      >
      </q-btn>
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

import {
  set,
  ref,
  computed,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import { useItemStore } from "../Stores/Items";
// TODO: ! add a button that will remove all the items in cart
export default {
  components: { CheckoutTableRows },
  setup() {
    const ItemStore = useItemStore();

    const totalPrice = computed(() => {
      // a computed property that returns the total price of the items in cart
      let total = 0;
      for (const item of ItemStore.data.selectedItem) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    });

    const confirmOrder = ItemStore.Notify;

    onMounted(() => {
      ItemStore;
    });

    return {
      ItemStore,
      onMounted,
      totalPrice,
      confirmOrder,
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
  color: black;
  /* border: 1px black solid; */
  border-radius: 1rem;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  /* box-shadow: 20px 20px grey; */
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
  font-weight: bold;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
  /* margin-left: 1rem; */
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
  color: white;
  transition: all 0.3s ease-in-out;
  background-color: #0077c8;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;

  margin-left: 55rem;
  /* padding-right: 1rem;
  margin-bottom: 2rem; */
}

.Confirm-Button:hover {
  /* background-color: #43a6c6; */
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
  color: black;
  width: 80%;
  border-radius: 10px;
  margin: 10px 0;
  color: white;
  border-radius: 1rem;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  box-shadow: 20px 20px grey;
  overflow-y: scroll;
}
.table {
  /* color: #fff; */
  /* background-color: #212529; */
  /* border-color: #32383e; */
  width: 100%;
  overflow: scroll;
  border-collapse: collapse;
  /* border-radius: 100px; */
}

.table td,
.table th {
  padding: 0.5rem;
}

th {
  /* this is for the header */
  /* background-color: white; */
  color: black;
  width: 30%;
  font-size: 20px;
}

tr {
  /* change the style of the table rows */
  text-align: left;
}

.item-theader {
  text-align: left;
}

.price-theader {
  text-align: center;
}

.quantity-theader {
  text-align: center;
}

@media only screen and (min-width: 375px) and (max-width: 375px) {
  .panel-header {
    font-size: 1.8rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  th {
    font-size: 15px;
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


@media only screen and (min-width: 428px) and (max-width: 428px)  {
  .panel-header {
    font-size: 1.8rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    padding: 20px;
  }
  th {
    font-size: 15px;
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
