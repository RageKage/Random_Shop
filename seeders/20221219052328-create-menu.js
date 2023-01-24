"use strict";


let menuitem = [
  {
    name: "Pizza",
    price: 15.99,
    quantity: 1,
    description: "A delicious pizza with your choice of toppings.",
    image: "https://hips.hearstapps.com/hmg-prod/images/190226-buffalo-chicken-pizza-370-1552084943.jpg?crop=0.668xw:1.00xh;0.209xw,0.00255xh&resize=1200:*",

  },
  {
    name: "Burger",
    price: 12.99,
    quantity: 1,
    description: "A juicy burger with your choice of toppings.",
    image: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
  },
  {
    name: "Salad",
    price: 8.99,
    quantity: 1,
    description:
      "A refreshing salad with mixed greens and your choice of dressing.",
      image: "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
  },
  {
    name: "Pasta",
    price: 13.99,
    quantity: 1,
    description:
      "A hearty bowl of pasta with your choice of sauce and toppings.",
      image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
  },
  {
    name: "Steak",
    price: 25.99,
    quantity: 1,
    description: "A perfectly seared, succulent steak cooked to your exact specifications.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Fish and Chips",
    price: 14.99,
    quantity: 1,
    description: "Golden-fried fish paired with crispy chips, a British tradition .",
    image: "https://www.christinascucina.com/wp-content/uploads/2021/02/fullsizeoutput_ec47-1072x1536.jpeg",
  },
  {
    name: "Tacos",
    price: 9.99,
    quantity: 1,
    description:
      "Soft or hard shell tacos filled with your choice of meat and toppings.",
      image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
  },
  {
    name: "Soup",
    price: 7.99,
    quantity: 1,
    description: "A bowl of savory soup with your choice of ingredients.",
    image: "https://www.allrecipes.com/thmb/Kv-IIQBiMgIiXlVkR2vgriIV-QA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg",
  },
  {
    name: "Sushi",
    price: 18.99,
    quantity: 1,
    description: "An assortment of sushi rolls, a delicious way to enjoy a variety of flavors.",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spicy-crab-rolls4-1654808938.jpg?crop=1.00xw:0.752xh;0,0.142xh&resize=980:*",
  },
  {
    name: "Dessert",
    price: 6.99,
    quantity: 1,
    description:
      "A sweet treat to end your meal, such as cake, pie, or ice cream.",
      image: "https://www.bhg.com/thmb/eIbMHp-1HjxcC0Sk7odw2M_PAVQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/luscious-new-years-desserts-03-1e540d12e008438baaefd6a1bd3af6c6.jpg",

  },
  {
    name: "Cake",
    price: 7.99,
    quantity: 1,
    description: "A moist and fluffy cake with a rich and creamy frosting.",
    image: "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",
  },
  {
    name: "Fried Chicken",
    price: 8.99,
    quantity: 1,
    description:
      "Crispy fried chicken served with a side of mashed potatoes and gravy.",
      image: "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg",

  },
  {
    name: "Nachos",
    price: 6.99,
    quantity: 1,
    description:
      "A generous serving of tortilla chips topped with melted cheese, salsa, and jalapenos.",
      image: "https://www.seriouseats.com/thmb/uZ2kTYdMeLLptzkRhIfADoaRDJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg",

  },
  {
    name: "Ice Cream",
    price: 3.99,
    quantity: 1,
    description:
      "A scoop of rich and creamy ice cream, available in a variety of flavors to satisfy any sweet tooth.",
      image: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg",

  },
  {
    name: "Sandwich",
    price: 4.99,
    quantity: 1,
    description:
      "A hearty sandwich with your choice of meat, cheese, and vegetables on your choice of bread.",
      image: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
  },
  {
    name: "Donut",
    price: 1.99,
    quantity: 1,
    description:
      "A soft and sweet donut covered in your choice of glaze or powdered sugar.",
      image: "https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg",
  },
  {
    name: "Fries",
    price: 3.99,
    quantity: 1,
    description: "A generous serving of crispy, hot fries, perfect for sharing.",
    image: "https://recipe30.com/wp-content/uploads/2017/06/French-fries-848x477.jpg",
  },
  {
    name: "Drink",
    price: 1.99,
    quantity: 1,
    description: "Your choice of soft drink or bottled water.",
    image: "https://www.naanwise.com/wp-content/uploads/2019/07/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg",

  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("MenuItems", menuitem);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MenuItems");
  },
};
