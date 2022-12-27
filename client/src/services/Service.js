import axios from "axios";

export default {
  Allmenuitems() {
    return axios.get("/api/menu").then((res) => {
      return res.data;
    });
  },
  updateQuantity(Itemquantity, Itemname) {
    return axios
      .patch("/api/menu/"+ Itemname , { quantity: Itemquantity })
      .then((res) => {
        return res.data;
      });
  },
  getOneItem(Itemname) {
    return axios.get("/api/menu/" + Itemname).then((res) => {
        return res.data;
      });
  }
};
