<template>
  <div>
    <div>{{ item.name }}</div>
    <div>{{ item.description }}</div>
    <div>${{ item.price }}</div>
    <div>{{ item.quantity }}</div>

    <div class="contain">
      <button @click="incrementQuantity" class="add-button">+</button>
      <button @click="decrementQuantity" class="remove-button">-</button>
    </div>
    <div>
      <button @click="addToOrder">Add to order ({{ itemsInCart }})</button>
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
  emits: ["decrement-Quantity", "increment-Quantity", "addToSelected"],
  props: {
    item: Object,
  },
  setup(props, { emit }) {
    const ItemStore = useItemStore();

    let total = ref(props.item.quantity);

    let count = ref(0);

    let itemsInCart = ref(props.item.quantity);

    function incrementQuantity() {
      if (total.value >= 15) {
        alert(
          `Sorry, but the maximum amount you can order is 15 of ${props.item.name}`
        );

        return;
      } else {
        total.value++;
        itemsInCart.value++;
        props.item.quantity = total.value;
        emit("incrementQuantity", props.item.name, props.item.quantity);
      }
      // emit("addToSelected", props.item.name);
    }

    function decrementQuantity() {
      if (total.value > 0) {
        total.value--;
        itemsInCart.value--;
        props.item.quantity = total.value;
      }
      emit("decrementQuantity", props.item.name, props.item.quantity);
      // emit("addToSelected", props.item.name);
    }

    function addToOrder() {
      if (props.item.quantity <= 0) {
        total.value = 1;
        props.item.quantity = total.value;
        itemsInCart.value = total.value;
        emit("incrementQuantity", props.item.name, props.item.quantity); // emit it back to the database so it doesn't just remain zero
        return Swal.fire({
          text:
            "the Quantity is zero on " +
            props.item.name +
            " there for it can't be added to the order",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }

      if (props.item.quantity >= 14) {
        return Swal.fire({
          text: "The maximum you can order for " + props.item.name + " 15",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }

      // console.log(props.item.name +'    ' +props.item.quantity)

      emit("addToSelected", props.item.name, props.item.quantity);
      // console.log(props.item.name +'    ' +props.item.quantity)

      total.value = 1;
      props.item.quantity = total.value;
      itemsInCart.value = total.value;

      // console.log(total.value + " " + props.item.quantity);
      emit("incrementQuantity", props.item.name, props.item.quantity);
      emit("decrementQuantity", props.item.name, props.item.quantity);
    }

    return {
      incrementQuantity,
      decrementQuantity,
      total,
      addToOrder,
      count,
      ItemStore,
      itemsInCart,
    };
  },
};
</script>

<style></style>