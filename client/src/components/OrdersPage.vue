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
      <q-list
        v-for="item in order.items"
        :key="item.id"
        dense
        bordered
        padding
        class="rounded-borders"
      >
        <q-item-section> {{ item.name }} </q-item-section>
        <q-item-section> {{ item.quantity }} </q-item-section>
        <!-- <li>{{item.name  }}</li> -->
        <!-- <li>{{ item.quantity }}</li> -->
        <!-- <li>Total: ${{ calculateTotalPrice(item) }}</li> -->
        <q-item-section>
          Total: ${{ calculateTotalPrice(item) }}
        </q-item-section>
        <q-item-section>
          <img :src="item.image" alt="product image" class="img" />
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

    // const displayItems = computed(() => {
    //   for (const why of userOrders) {
    //     for (const order of A) return order.items.slice(0, 4);
    //   }
    // })

    const displayItems = computed(() => {
      for (const item of userOrders) {
        for (const order of item.items) {
          return order.items;
        }
      }
    });

    for (const item of userOrders) {
      // console.log(item)
      // for (const order of item.items) {
      //   console.log(order)
      // }
    }

    function calculateTotalPrice(item) {
      return (item.price * item.quantity).toFixed(2); // the calculated price of every item
    }

    return {
      OrderConfirmed,
      userOrders,
      calculateTotalPrice,
      showNotification,
      displayItems,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam&family=Paytone+One&family=Poppins:wght@500&family=Raleway:wght@300&family=Stick+No+Bills&display=swap");

.rounded-borders {
  decoration: none;
  padding: 5px 5px 5px;
  margin: 50px 100px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  font-family: "Paytone One", sans-serif;
  color: white;
  box-shadow: 5px 5px #fdf5df;
}
img {
  width: 100%;
  border: 7px solid white;
  border-radius: 1rem;
}

.rounded-borders:hover {
  background-color: #dedbd7;
  color: black;
}

.order-label {
  flex-direction: row;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); */
  box-shadow: -0px 2px #fdf5df;
  font-family: "Paytone One", sans-serif;
}

.order-container {
  border-radius: 1rem;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  font: sans-serif;
  box-shadow: 5px 5px #fdf5df;
  overflow-y: scroll;
  height: 620px;
  overflow-y: scroll;
  overflow-x: scroll;
  background-color: #d76f30;
}

.order-label {
  /* border: 1px red solid; */
  padding: 10px 10px 10px;
  margin: 20px 20px 20px;
  font-size: 1.3rem;
  /* background-color: red; */
  /* color: #666; */
  /* background-color: #000000; */
  border-radius: 5rem;
  color: white;
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
  font-family: "Paytone One", sans-serif;
  color: white;
}

h1 {
  font-weight: 200px;
  font-size: 3rem;
  color: #ebece9;
  font-family: "Paytone One", sans-serif;
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

    decoration: none;
    padding: 5px 5px 5px;
    margin: 50px 100px;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;

    width: 250px;
    padding: 10px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
    transition: all 0.5s ease-in-out;
  }
}
</style>
