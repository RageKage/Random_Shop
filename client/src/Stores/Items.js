import { ref, computed, getCurrentInstance, reactive, watch } from "vue";
import { defineStore } from "pinia";

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
  });

  const fetchMenuData = () => {
    service.Allmenuitems().then((menu) => (data.menuItem = menu));
  };

  const increaseQuantity = (quantity, item) => {
    service.updateQuantity(quantity, item).then(() => {
      // Increase the quantity of the selected item
      fetchMenuData();
      //   data.selectedItem.quantity += quantity;
    });
  };

  const decreaseQuantity = (quantity, item) => {
    service.updateQuantity(quantity, item).then(() => {
      fetchMenuData();
    });
  };
  // TODO: make sure the quanity is not over 15 items and if it is don't add it to the array and use the Swal
  //TODO: code from the client side to show the alert
  const selectItem = (itemName, quantity) => {
    const index = data.selectedItem.findIndex((item) => item.name === itemName);
    if (index === -1) {
      service.getOneItem(itemName).then((item) => {
        item.quantity = quantity;
        data.selectedItem.push(item);
      });
    } else {
      if (data.selectedItem[index].quantity + quantity > 15) {
        return alert("sorry but the maximum is 15");
      } else {
        data.selectedItem[index].quantity += quantity;
      }
    }
  };

  watch(
    data.selectedItem,
    (Value) => {
      localStorage.setItem("selectedItem", JSON.stringify(Value)); // save the user input into localStorage
    },
    // data.menuItem,
    // (ItemValue) => {
    //   localStorage.setItem("Items", JSON.stringify(ItemValue));
    // },
    // { deep: true }
  );

  if (localStorage.getItem("selectedItem")) {
    data.selectedItem = JSON.parse(localStorage.getItem("selectedItem")); // use the localStorage.getItem if the user is not new
  }
//   if (localStorage.getItem("Items")) {
//     data.menuItem = JSON.parse(localStorage.getItem("Items"));
//   }

  return {
    data,
    fetchMenuData,
    increaseQuantity,
    decreaseQuantity,
    selectItem,
    // NumberofItems
  };
});
