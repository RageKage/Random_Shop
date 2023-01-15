<template>
  <tr>
    <td class="item-td-name">{{ item.name }}</td>
    <td class="item-td-quantity">{{ item.quantity }}</td>
    <td class="item-td-price">
      ${{ calculateTotalPrice(item) }}
      <!-- <span style="padding: 50px"><button class="remove-button" @click="remove(item)">Remove</button></span> -->
      <br /><span class="price-label">${{ item.price }} for each</span>

      <!-- <br /><span class="price-label"
        >${{ item.price }} for each</span
      >  -->
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

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return { calculateTotalPrice, remove, ItemStore };
  },
};
</script>

<style scoped>
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
  border-radius: 2rem;
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
}

tr:hover {
  background-color: #dedbd7;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 10%);
  transform: scale(0.99);
  box-shadow: 0 3px 15px -1px;
}


.item-td-name  {
  text-align: left;
}

.item-td-price  {
  text-align: center;
}

.item-td-quantity {
  text-align: center;
}

.item-td-remove {
  text-align: center;

}
</style>
