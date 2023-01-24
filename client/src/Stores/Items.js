import {
  ref,
  computed,
  getCurrentInstance,
  reactive,
  watch,
  onMounted,
} from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useItemStore = defineStore("ItemStore", () => {
  const service = useService();
  function useService() {
    const ctx = getCurrentInstance();
    if (!ctx) return;

    // Make sure the ctx object has an appContext property
    if (!ctx.appContext) return;

    return ctx.appContext.config.globalProperties.$Service;
  }

  const data = reactive({
    menuItem: ref([]),
    selectedItem: [],
    SaveOrders: [],
  });

  const fetchMenuData = () => {
    service.Allmenuitems().then((menu) => (data.menuItem = menu)); // get all menu items and store them in data.menuItem
  };

  const increaseQuantity = (quantity, item) => {
    // console.log('it is increasing quantity')
    service.updateQuantity(quantity, item).then(() => {
      // Increase the quantity of the selected item
      fetchMenuData();
    });
  };

  const Selectedincrease = (quantity, itemName) => {
    const index = data.selectedItem.findIndex((item) => item.name == itemName); // Find the index of the item in the selectedItem array
    // console.log(index);
    if (index >= 0) {
      if (data.selectedItem[index].quantity > 14) {
        data.selectedItem[index].quantity = 15;
        return Swal.fire({
          text: "sorry but the maximum is 15",
          icon: "info",
        });
      }
      data.selectedItem[index].quantity++;
      localStorage.setItem("selectedItem", JSON.stringify(data.selectedItem));
    }
  };



  const decreaseQuantity = (quantity, item) => {
    service.updateQuantity(quantity, item).then(() => {
      fetchMenuData();
    });
  };

  const SelectedDecreasing = (quantity, itemName) => {
    const index = data.selectedItem.findIndex((item) => item.name == itemName); // Find the index of the item in the selectedItem array
    // console.log(index);
    if (index >= 0) {
      if (data.selectedItem[index].quantity < 1) {
        data.selectedItem[index].quantity = 1;
        return Swal.fire({
          text: "You can't set quantity to zero",
          icon: "warning",
        });
      }
      data.selectedItem[index].quantity--;
      localStorage.setItem("selectedItem", JSON.stringify(data.selectedItem));
    }
  };

  // TODO: make sure the quantity is not over 15 items and if it is don't add it to the array and use the Swal
  //TODO: code from the client side to show the alert

  const selectItem = (itemName, quantity) => {
    const index = data.selectedItem.findIndex((item) => item.name === itemName); // this wil
    // console.log(index);
    if (index === -1) {
      // If the item is not in the array, get the item from the server and add it to the array
      service.getOneItem(itemName).then((item) => {
        item.quantity = quantity;
        data.selectedItem.push(item);
        // data.SaveOrders.push(item);
        localStorage.setItem("selectedItem", JSON.stringify(data.selectedItem));
        // localStorage.setItem("SaveOrders", JSON.stringify(data.SaveOrders));
      });
    } else {
      // If the item is already in the array, increase the quantity by 1
      if (data.selectedItem[index].quantity + quantity >= 16) {
        return Swal.fire({
          text:
            "I'm sorry, but the maximum allowable quantity for " +
            data.selectedItem[index].name +
            " is 15. Please reduce the quantity or choose a different item.",
          icon: "info",
        });
      } else {
        if (data.selectedItem[index].quantity + quantity >= 16) {
          return Swal.fire({
            text: "sorry but the maximum is 15",
            icon: "info",
          });
        } else {
          data.selectedItem[index].quantity += quantity;
          localStorage.setItem(
            "selectedItem",
            JSON.stringify(data.selectedItem)
          );
        }
      }
    }
  };

  watch(
    data.selectedItem,
    () => {
      localStorage.setItem("selectedItem", JSON.stringify(data.selectedItem)); // save the user input into localStorage
    },
    { deep: true }
  );

  watch(
    data.SaveOrders,
    () => {
      localStorage.setItem("SaveOrders", JSON.stringify(data.SaveOrders));
    },
    { deep: true }
  );

  if (localStorage.getItem("selectedItem")) {
    data.selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
  }

  if (localStorage.getItem("SaveOrders")) {
    // data.SaveOrders = JSON.parse(localStorage.getItem("SaveOrders"));
    const savedOrder = JSON.parse(localStorage.getItem("SaveOrders"));

    data.SaveOrders.push(...savedOrder);
  }

  const remove = (item) => {
    if (remove) {
      Swal.fire({
        text: `Are you sure you want to remove ${item.name} ?`,
        icon: "warning",
        showCancelButton: true,
      }).then((result) => {
        if (result.value == true) {
          const index = data.selectedItem.indexOf(item); // Find the index of the item in the selectedItem array
          data.selectedItem.splice(index, 1); // Remove the item from the array
          localStorage.setItem(
            "selectedItem",
            JSON.stringify(data.selectedItem)
          );
        }
      });
    }
  };

  const Notify = (item) => {
    const index = data.selectedItem.findIndex((item) => item === item); 

    if (index >= 0) {
      // console.log(item);
      if (data.selectedItem[index].quantity <= 0) {
        return Swal.fire({
          text: `Quantity for ${data.selectedItem[index].name} is ${data.selectedItem[index].quantity} `,
          icon: "warning",
          confirmButtonText: "Okay",
        });
      }
    }
    if (item == "") {
      // return false if the cart is empty
      // this functions as a way to prevent empty orders
      return Swal.fire({
        text: "Cart is empty",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } else {
      // console.log(item)
      localStorage.setItem("SaveOrders", JSON.stringify(item)); // save the order to user's local storage

      const savedOrder = JSON.parse(localStorage.getItem("SaveOrders")); // get the order from user's local storage

      const orderTotal = computed(() => {
        // a computed property that returns the total amount for each order
        let total = 0;
        for (const order of savedOrder) {
          total += order.quantity * order.price;
        }
        return total.toFixed(2);
      });
      // console.log(orderTotal);

      const orderLabel = `Order ${data.SaveOrders.length + 1}`;
      const newOrder = {
        label: orderLabel,
        items: savedOrder,
        total: orderTotal,
      }; // create a object to store the order number and the items for the order

      // console.log(newOrder);
      data.SaveOrders.push(...[newOrder]); // push it to data.SaveOrders

      data.selectedItem = []; // reset the SelectedItem property back to its original value
      localStorage.removeItem("selectedItem"); // remove the SelectedItem property from localStorage
      // send a success message
      return Swal.fire({
        text: "Order placed!",
        icon: "success",
      });
    }
  };

  return {
    data,
    fetchMenuData,
    increaseQuantity,
    decreaseQuantity,
    selectItem,
    remove,
    Notify,
    SelectedDecreasing,
    Selectedincrease
  };
});
