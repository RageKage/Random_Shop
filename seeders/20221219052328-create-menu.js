"use strict";

let menuitem = [
  {
    name: "Pizza",
    price: 15.99,
    description: "A delicious pizza with your choice of toppings.",
  },
  {
    name: "Burger",
    price: 12.99,
    description: "A juicy burger with your choice of toppings.",
  },
  {
    name: "Salad",
    price: 8.99,
    description:
      "A refreshing salad with mixed greens and your choice of dressing.",
  },
  {
    name: "Salad",
    price: 8.99,
    description:
      "A refreshing salad with mixed greens and your choice of dressing.",
  },
  {
    name: "Pasta",
    price: 13.99,
    description:
      "A hearty bowl of pasta with your choice of sauce and toppings.",
  },
  {
    name: "Chicken Sandwich",
    price: 10.99,
    description: "A grilled chicken sandwich with your choice of toppings.",
  },
  {
    name: "Steak",
    price: 25.99,
    description: "A succulent steak cooked to your liking.",
  },
  {
    name: "Fish and Chips",
    price: 14.99,
    description: "A classic dish of fried fish and chips.",
  },
  {
    name: "Tacos",
    price: 9.99,
    description:
      "Soft or hard shell tacos filled with your choice of meat and toppings.",
  },
  {
    name: "Soup",
    price: 7.99,
    description: "A bowl of savory soup with your choice of ingredients.",
  },
  {
    name: "Sushi",
    price: 18.99,
    description: "A variety of sushi rolls and nigiri.",
  },
  {
    name: "Dessert",
    price: 6.99,
    description:
      "A sweet treat to end your meal, such as cake, pie, or ice cream.",
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
    await queryInterface.bulkInsert('MenuItems', menuitem)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('MenuItems')
  },
};
