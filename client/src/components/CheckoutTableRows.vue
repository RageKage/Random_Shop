<template>
  <tr>
    <td class="item-td-name">{{ item.name }}</td>
    <td class="item-td-quantity">
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
    </td>
    <td class="item-td-price">
      ${{ calculateTotalPrice(item) }} <br /><span class="price-label"
        >${{ item.price }} for each</span
      >
    </td>

    <td class="item-td-remove">
      <button class="remove-button" @click="remove(item)">Remove</button>
    </td>
  </tr>
</template>

<script>
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
  // emits: ["decrement-Quantity", "increment-Quantity", "addToSelected"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const ItemStore = useItemStore();

    const remove = ItemStore.remove;

    // const decrementQuantity = ItemStore.decreaseQuantity(item.quantity, item)

    // const incrementQuantity = ItemStore.increaseQuantity(item.quantity, item)

    function decrementQuantity(item, quantity) {
      ItemStore.SelectedDecreasing(quantity, item);
    }

    function incrementQuantity(item, quantity) {
      ItemStore.Selectedincrease(quantity, item);
    }

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return {
      calculateTotalPrice,
      remove,
      ItemStore,
      decrementQuantity,
      incrementQuantity,
    };
  },
};
</script>

<style scoped>
.A {

}
.remove-button {
  background-color: #0077c8;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  /* margin-top: 1rem; */
  /* margin-bottom: 1.5rem; */
  padding: 5%;
}

.remove-button:hover {
  background-color: #ff6347;
  box-shadow: 5px 5px blue;
  color: white;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px #ff6347;
}

.remove-button:active {
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px;
}

.price-label {
  font-size: 0.6em;
  color: black;
}

td {
  padding-left: 3%;
  color: black;
  padding: 5px 5px 5px;
  /* margin: 50px 100px; */
  margin: 100%;
  width: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: rgb(112, 128, 144, 50%) solid;
}

tr:hover {
  box-shadow: 5px 10px 10px 10px rgb(0 0 0 / 10%);

  font-size: 15px;
  border-radius: 1rem;
  background-color: rgb(241 245 249);
  transition: all 0.3s ease-in-out;
}

.item-td-name {
  text-align: left;
}

.item-td-price {
  text-align: center;
}

.item-td-quantity {
  text-align: center;
}

.item-td-remove {
  text-align: center;
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
  color: white;
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
  color: white;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transform: scale(0.9);
  box-shadow: 0 3px 15px -2px #2f9bbf;
}

@media only screen and (min-width: 375px) and (max-width: 375px) {
  .decrease-button {
    border: none;
    padding: 5px 5px;
  }

  .increase-button {
    border: none;
    padding: 5px 5px;
  }
}

@media only screen and (min-width: 428px) and (max-width: 428px) {
  .decrease-button {
    border: none;
    padding: 5px 5px;
  }

  .increase-button {
    border: none;
    padding: 5px 5px;
  }
}
</style>
