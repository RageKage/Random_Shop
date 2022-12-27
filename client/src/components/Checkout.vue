<template>
  <div class="item-selected-container">
    <!-- Display the number of items that have been selected -->
    <!-- <span class="item-selected-count">{{ ItemSelected.name }}</span>
    <span class="item-selected-count">{{ ItemSelected.price }}</span>
    <span class="item-selected-count">{{ ItemSelected.quantity }}</span> -->
  </div>
</template>


<script>

import { set, ref, computed, onMounted, reactive,getCurrentInstance } from "vue";


export default {
  props: {
    ItemSelected: Object,
  },
  setup(props){
    console.log(props.ItemSelected)
    // Use a computed property to display the total price
    // let total = computed(() => {
    //   let totalPrice = props.ItemSelected.quantity * props.ItemSelected.price;
    //   let formatedPrice = totalPrice.toFixed(2);
    //   return formatedPrice;
    // });

    // return {
    //   total,
    // }
  }
}
</script>

<style>
  /* Add some styling to the container */
  .item-selected-container {
    display: flex;
    align-items: center;
  }

  /* Style the count */
  .item-selected-count {
    font-size: 18px;
    font-weight: bold;
  }
</style>
