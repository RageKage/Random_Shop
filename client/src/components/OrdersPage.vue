<template>
  <div class="order-container">
    <h1>Previous Orders</h1>
    <div
      v-for="order in userOrders"
      :key="order.label"
      class="sub-order-container"
    >
      <div>
        <div class="order-label">{{ order.label }}</div>
      </div>
      <div class="item-container">
        <div class="item-header">
          <div class="item-name">Item</div>
          <div class="item-quantity">Quantity</div>
          <div class="item-price">Price</div>
        </div>
        <div
          v-for="item in order.items"
          :key="item.id"
          dense
          bordered
          padding
          class="rounded-borders item-row"
        >
          <div class="item-desc">{{ item.name }}</div>
          <div class="item-quantity">{{ item.quantity }}</div>
          <div class="item-price">${{ calculateTotalPrice(item) }}</div>
        </div>
      </div>
      <div class="order-footer">
        <div class="order-number"></div>
        <div class="order-total">Total: ${{ order.total }}</div>
      </div>
      <div>q</div>
    </div>
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  components: {
    useQuasar,
  },
  setup() {
    const OrderConfirmed = useItemStore();
    const $q = useQuasar();

    function showNotification() {
      $q.notify("Some other message");
    }

    const userOrders = OrderConfirmed.data.SaveOrders;

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return {
      OrderConfirmed,
      userOrders,
      calculateTotalPrice,
      showNotification,
    };
  },
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap"); */
.order-container {
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
}


h1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.01562em;
  color: wheat;
}
.order-container h1 {
  text-align: center;

}

.sub-order-container {
  margin-top: 2rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: gainsboro;
}

.order-label {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.item-container {
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
}

.item-header {
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  font-weight: bold;
}



.item-quantity,
.item-price {
  width: 20%;
  text-align: center;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.item-desc,.item-name {
  width: 10%;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.order-number {
  font-size: 1.2rem;
}

.order-total {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
