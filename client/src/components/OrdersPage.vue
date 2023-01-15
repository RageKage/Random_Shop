<template>
  <div class="order-container">
    <h1>Previous Orders</h1>
    <div v-for="order in userOrders" :key="order.label" class="sub-order-container">
      <div>
        <div class="order-label">{{ order.label }}</div>
      </div>
      <q-list
        v-for="item in order.items"
        :key="item.id"
        dense
        bordered
        padding
        class="rounded-borders"
      >
        <!-- class="order-item" -->
        <q-item-section> {{ item.name }} </q-item-section>
        <q-item-section> {{ item.quantity }} </q-item-section>
        <!-- <li>{{item.name  }}</li> -->
        <!-- <li>{{ item.quantity }}</li> -->
        <!-- <li>Total: ${{ calculateTotalPrice(item) }}</li> -->
        <q-item-section>
          Total: ${{ calculateTotalPrice(item) }}
        </q-item-section>
      </q-list>
      <!--  -->
      <div class="order-total">Total: ${{ order.total }}</div>
    </div>
  </div>
</template>

<script>
import { useItemStore } from "../Stores/Items";
import { computed, ref } from "vue";
import OrderPageTableRows from "./OrderPageTableRows.vue";
import { useQuasar } from "quasar";

export default {
  components: {
    OrderPageTableRows,
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
/* display: flex;
    flex-wrap: wrap; */

.rounded-borders {
  decoration: none;
  padding: 5px 5px 5px;
  margin: 50px 100px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
ul,
ol {
  list-style-type: none;
}

.rounded-borders:hover {
  background-color: #dedbd7;
}

.order-label {
  flex-direction: row;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.order-container {
  border: 1px black solid;
  border-radius: 1rem;
  margin-bottom: 2%;
  /* margin-top:10%; */
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  box-shadow: 20px 20px grey;
  overflow-y: scroll; /* add a vertical scrollbar */
  height: 620px;
  overflow-y: scroll; /* add a vertical scrollbar */
  overflow-x: scroll; /* add a horizontal scrollbar */
}

.order-label {
  /* border: 1px red solid; */
  padding: 10px 10px 10px;
  margin: 20px 20px 20px;
  font-size: 1.3rem;
  /* background-color: red; */
  /* color: #666; */
  background-color: #ccc;
  /* border-radius: 5rem; */
}

.order-total {
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

h1 {
  font-weight: 200px;
  font-size: 3rem;
}

.sub-order-container {
  margin: 3%;
}

@media only screen and (min-width: 375px) and (max-width: 390px) {
  .order-container {
    height: 530px;
  }
  h1 {
    /* font-weight: 200px; */
    font-size: 2rem;
  }
  .rounded-borders {
    margin: 50px 20px;
  }
}
</style>
