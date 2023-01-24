<template >
  <div class="card">
    <div class="product-card">
    <img :src="item.image" alt="product image" class="img">
    <h2 >{{ item.name }}</h2>
    <p>Price: ${{ item.price }}</p>
    <p class="A">{{ item.description }}</p>
  </div>

    <!-- <div class="item-name">{{ item.name }}</div>
    <div>{{ item.description }}</div>
    <div>${{ item.price }}</div>
    <div>{{ item.quantity }}</div> -->

    <div class="contain">
      <button @click="decrementQuantity" class="remove-button">
        <span class="material-icons"> remove </span>
      </button>
      <button @click="incrementQuantity" class="add-button">
        <span class="material-icons"> add </span>
      </button>
    </div>
    <div class="contain-Order">
      <button @click="addToOrder" class="AddtoOrder">
        <span class="material-icons" style=""> add_shopping_cart </span>
        {{ itemsInCart }}
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
  // emits: ["decrement-Quantity", "increment-Quantity", "addToSelected"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const ItemStore = useItemStore();

    let total = ref(props.item.quantity);

    let count = ref(0); // !this doesn't really do anything

    let itemsInCart = ref(props.item.quantity);

    function incrementQuantity() {
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
        // console.log(15 - props.item.quantity)
        total.value++;
        itemsInCart.value++;
        props.item.quantity = total.value;
        // console.log(total)
        emit("incrementQuantity", props.item.name, props.item.quantity); // this will emit the item name and quantity to the parent
      }
    }

    function decrementQuantity() {
      if (total.value > 0) {
        total.value--;
        itemsInCart.value--;
        props.item.quantity = total.value;
        // console.log(props.item.quantity)
      }
      emit("decrementQuantity", props.item.name, props.item.quantity);
      // emit("addToSelected", props.item.name);
    }

    function addToOrder() {
      // ! weird error when you add more then 15
      if (props.item.quantity <= 0) {
        total.value = 1;
        props.item.quantity = total.value;
        itemsInCart.value = total.value;
        emit("incrementQuantity", props.item.name, props.item.quantity); // emit it back to the database so it doesn't just remain zero
        // console.log("hi");
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap');


@tailwind base;
@tailwind components;
@tailwind utilities;



.img {
  height: 200px;
  width: 200px;
}

.AddtoOrder {
  cursor: pointer;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 5px 5px grey;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  background-color: #0077c8;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;

  font-family: "Paytone One", sans-serif;
  color: white;
  box-shadow: 5px 5px #fdf5df;
}
.AddtoOrder:hover {
  cursor: pointer;
  background-color: #2f9b2f;
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;
  line-height: 20px;
  transition: all 0.4s ease-in-out;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.AddtoOrder:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.card .add-button,
.card .remove-button {
  width: 40px;
  height: 25px;
  font-size: 18px;
  border: none;
  box-shadow: 2px 2px #fdf5df;;
  color: white;
  transition: all 0.3s ease-in-out;
  background-color: #708090;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2rem;
  line-height: 15px;

}

.card .add-button:active,
.card .remove-button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.card .add-button:hover {
  background-color: #2f9bbf;
  transform: translateY(-3px);
  font-weight: bold;
  text-align: center;
  line-height: 15px;

  transition: all 0.5s ease-in-out;
}
.card .remove-button:hover {
  background-color: #9b2f2f;
  transform: translateY(-3px);
  font-weight: bold;
  text-align: center;
  line-height: 15px;

  transition: all 0.5s ease-in-out;
}


.product-card img {
  width: 100%;
  border: 10px solid white;
  border-radius: 1rem;
}

.product-card h2 {
  margin-top: 10px;
  margin-bottom: 5px; 
  font-size: 1.2em;

  /* font-family: "Paytone One", sans-serif; */
  color: white;
}

.product-card p {
  margin-top: 5px;
  font-size: 0.9em;
  color: white;
}


</style>
