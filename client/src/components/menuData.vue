<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.image" alt="product image" />
      <div class="image-container">
        <div class="image-wrapper">
          <div class="image-placeholder"></div>
        </div>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ item.name }}</h3>
      <p class="price">${{ item.price }}</p>
      <p class="card-desc">{{ item.description }}</p>
      <div class="card-buttons">
        <button @click="incrementQuantity" class="btn-add">+</button>
        <button @click="decrementQuantity" class="btn-remove">-</button>
      </div>
    </div>
    <div class="card-order">
      <button @click="addToOrder" class="btn-order">
        Order {{ itemsInCart }}
      </button>
    </div>
  </div>
</template>

<script>
import Vue, { watch } from "vue";
import { useItemStore } from "../Stores/Items";
// TODO: fix this issue quantity = 3 order button is clicked and then the order name and quainity is shown in the checkout page
// TODO back to the homepage the quantity = 1 and then quantity is updated to quantity = 2 order button is clicked and the checkout page is updated but it only added by one instead of 2
// TODO so instead of being 5 it is only 4 meaning that something is wrong with your add to order emit message or the add more button
import {
  set,
  ref,
  computed,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import Swal from "sweetalert2";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const ItemStore = useItemStore();

    let total = ref(props.item.quantity);

    let itemsInCart = ref(props.item.quantity);

    function incrementQuantity() {
      // add quantity of item in cart
      // ! add a computed property to show them how much more they can add
      if (total.value >= 15) {
        return Swal.fire({
          text:
            "I'm sorry, but the maximum allowable quantity for " +
            props.item.name +
            " is 15. Please reduce the quantity or choose a different item.",
          icon: "info",
        });
      } else {
        total.value++;
        itemsInCart.value++;
        props.item.quantity = total.value;
        emit("incrementQuantity", props.item.name, props.item.quantity); // this will emit the item name and quantity to the parent
      }
    }

    function decrementQuantity() {
      // remove the quantity of the item
      if (total.value > 0) {
        total.value--;
        itemsInCart.value--;
        props.item.quantity = total.value;
      }
      emit("decrementQuantity", props.item.name, props.item.quantity);
    }

    function addToOrder() {
      // add item to order
      if (props.item.quantity <= 0) {
        // if the item is zero then don't add it and reset it back to zero after the warning message
        total.value = 1;
        props.item.quantity = total.value;
        itemsInCart.value = total.value;
        emit("incrementQuantity", props.item.name, props.item.quantity); // emit it back to the database so it doesn't just remain zero
        return Swal.fire({
          text:
            "Sorry, the quantity for " +
            props.item.name +
            " is currently set to zero and cannot be added to your Cart." +
            "Please choose a different item or try again later.",
          icon: "info",
          confirmButtonText: "Okay",
        });
      }

      if (props.item.quantity >= 14) {
        // put a limit on the quantity they can add for every item
        return Swal.fire({
          text: "The maximum you can order for " + props.item.name + " 15",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }

      emit("addToSelected", props.item.name, props.item.quantity);

      total.value = 1;
      props.item.quantity = total.value;
      itemsInCart.value = total.value;
      emit("incrementQuantity", props.item.name, props.item.quantity);
      emit("decrementQuantity", props.item.name, props.item.quantity);
    }

    return {
      incrementQuantity,
      decrementQuantity,
      total,
      addToOrder,
      ItemStore,
      itemsInCart,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

.card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #ccc;
  overflow: hidden;
  margin-bottom: 2rem;

}

.card-image {
  position: relative;
  height: 200px;
  background-color: #ddd;
}

.image-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image-wrapper {
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
}

.image-placeholder {
  padding-top: 75%; /* 4:3 aspect ratio */
  background-color: #ccc;
}

img {
  float: left;
  /* width: 200px; */
  width: 100%;
  height: 200px;
  background-size: cover;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
}

.card-desc {
  font-size: 1.25rem;
  margin: 0 0 1rem;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;
}

.card-buttons button {
  flex: 1;
  margin-right: 0.5rem;
}

.card-order {
  background-color: #eee;
  padding: 1rem;
}

.btn-add,
.btn-remove,
.btn-order {
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #d76f30;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-add:hover {
  background-color: #a34c1f;
}

.btn-remove:hover {
  background-color: #a34c1f;
}

.btn-order:hover {
  background-color: #888;
}
@media (max-width: 768px) {
  .card {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
