<template>

    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.price }} <span>Total: ${{ calculateTotalPrice(item) }}</span> <br> <span>${{ item.price }} for each</span></td>
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
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const ItemStore = useItemStore();

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return {
      ItemStore,
      calculateTotalPrice,
    };
  },
};
</script>

<style>
td {
  /* padding-left: 3%; */
  /* border: 1px solid red; */
  /* text-align: left; */
  margin: 500px;
}

tr:hover {
  /* background-color: #32383e; */
}</style>
