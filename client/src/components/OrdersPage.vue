<template>
  <div class="A">
    <div>
      <div>
        <h1>Previous Orders</h1>
        <div v-for="order in userOrders" :key="order.label" class="B">
          <div>
            <div class="C">{{ order.label }}</div>
          </div>
          <!-- <div>{{ order.items }}</div> -->
          <div v-for="item in order.items" :key="item.id" class="D">
            <div>{{ item.name }}</div>
            <div>quantity: {{ item.quantity }}</div>
            <div>
              Total: ${{ calculateTotalPrice(item) }}
              <div>
                <span class="price-label">${{ item.price }} for each</span>
              </div>
            </div>
          </div>

          <div class="E">Total: ${{ order.total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { computed } from "vue";

export default {
  setup() {
    const OrderConfirmed = useItemStore();

    const userOrders = OrderConfirmed.data.SaveOrders;

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return {
      OrderConfirmed,
      userOrders,
      calculateTotalPrice,
    };
  },
};
</script>

<style scoped>
.price-label {
  font-size: 0.6em;
  color: #666;
}

.A {
  /* border: 1px black solid; */
  padding: 5px 5px 5px;
  margin: 50px 50px 50px;
  font: sans-serif;
}
.B {
  /* border: 1px blue solid; */
  padding: 5px 5px 5px;
  margin: 50px 50px;
  border-radius: 5rem;
  transform: scale(10px);
  box-shadow: 0 3px 15px -2px;
}

.C {
  /* border: 1px red solid; */
  padding: 10px 10px 10px;
  margin: 50px 50px 50px;
  font-size: 1.5rem;
  /* background-color: red; */
  /* color: #666; */
  background-color: #ccc;
  border-radius: 5rem;
}

.D {
  border: 1px green solid;
  padding: 5px 5px 5px;
  margin: 20px 20px 20px;

  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* align-items: center; */
  /* justify-content: space-around; */
  justify-content: space-between;

  width: auto;
  /* margin: 10px 0; */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.E {
  /* border: 1px red solid; */
  padding: 5px 5px 5px;
  margin: 20px 20px 20px;

  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  font: 1.5em sans-serif;
  display: flex;
  justify-content: flex-end;
}
</style>
