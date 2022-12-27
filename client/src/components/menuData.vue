<template>
  <div>
    <div>{{ item.name }}</div>
    <div>{{ item.description }}</div>
    <!-- make this a child so it updates the number of quantity -->
    <div>${{ item.price }}</div>
    <div>{{ item.quantity }}</div>

    <div class="contain">
      <button @click="incrementQuantity" class="add-button">+</button>
      <p class="count" v-show="showAlert">quantity: {{ total }}</p>
      <button @click="decrementQuantity" class="remove-button">-</button>
    </div>
    <div>
      <button @click="addToOrder">Add to order</button>
    </div>
  </div>
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

export default {
  props: {
    item: Object,
  },
  setup(props, { emit }) {
    let data = reactive({
      selectedItem: {},
    });

    let total = ref(props.item.quantity);
    let showAlert = ref(false);
    const selectedItemRef = ref(data.selectedItem);
    let count = ref(0);

    function incrementQuantity() {
      // showAlert.value = true; this will show the amount of that is being added to the order item
      if (total.value >= 15) {
        alert(
          `Sorry, but the maximum amount you can order is 15 of ${props.item.name}`
        );
        return;
      }
      total.value++;
      props.item.quantity = total.value;
      emit("incrementQuantity", props.item.name, props.item.quantity);
    }

    function decrementQuantity() {
      if (total.value > 0) {
        total.value--;
        props.item.quantity = total.value;
      }
      emit("decrementQuantity", props.item.name, props.item.quantity);
    }

    function addToOrder() {
      emit("addToSelected", props.item.name);
    }

    return {
      incrementQuantity,
      decrementQuantity,
      total,
      showAlert,
      addToOrder,
      count,
      data,
      selectedItemRef,
    };
  },
};
</script>

<style>
/* .contain {
  display: block;
  align-items: center;
}

.add-button,
.remove-button {
  width: 30px;
  height: 30px;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  background-color: #333;
  color: rgb(255, 255, 255);
}

.add-button:hover,
.remove-button:hover {
  background-color: rgb(155, 151, 151);
}

.count {
  margin: 0 10px;
  font-size: 24px;
} */
</style>
