"use strict";

let menuitem = [
  {
    name: "Pizza",
    price: 15.99,
    quantity: 1,
    description: "A delicious pizza with your choice of toppings.",
  },
  {
    name: "Burger",
    price: 12.99,
    quantity: 1,
    description: "A juicy burger with your choice of toppings.",
  },
  {
    name: "Salad",
    price: 8.99,
    quantity: 1,
    description:
      "A refreshing salad with mixed greens and your choice of dressing.",
  },
  {
    name: "Pasta",
    price: 13.99,
    quantity: 1,
    description:
      "A hearty bowl of pasta with your choice of sauce and toppings.",
  },
  {
    name: "Chicken Sandwich",
    price: 10.99,
    quantity: 1,
    description: "A grilled chicken sandwich with your choice of toppings.",
  },
  {
    name: "Steak",
    price: 25.99,
    quantity: 1,
    description: "A succulent steak cooked to your liking.",
  },
  {
    name: "Fish and Chips",
    price: 14.99,
    quantity: 1,
    description: "A classic dish of fried fish and chips.",
  },
  {
    name: "Tacos",
    price: 9.99,
    quantity: 1,
    description:
      "Soft or hard shell tacos filled with your choice of meat and toppings.",
  },
  {
    name: "Soup",
    price: 7.99,
    quantity: 1,
    description: "A bowl of savory soup with your choice of ingredients.",
  },
  {
    name: "Sushi",
    price: 18.99,
    quantity: 1,
    description: "A variety of sushi rolls and nigiri.",
  },
  {
    name: "Dessert",
    price: 6.99,
    quantity: 1,
    description:
      "A sweet treat to end your meal, such as cake, pie, or ice cream.",
  },
  {
    name: 'Cake',
    price: 7.99,
    quantity: 1,
    description: 'A moist and fluffy cake with a rich and creamy frosting.'
  },
  {
    name: 'Hamburger',
    price: 5.99,
    quantity: 1,
    description: 'A juicy hamburger patty served on a toasted bun with lettuce, tomato, and pickles.'
  },
  {
    name: 'Fried Chicken',
    price: 8.99,
    quantity: 1,
    description: 'Crispy fried chicken served with a side of mashed potatoes and gravy.'
  },
  {
    name: 'Nachos',
    price: 6.99,
    quantity: 1,
    description: 'A generous serving of tortilla chips topped with melted cheese, salsa, and jalapenos.'
  },
  {
    name: 'Ice Cream',
    price: 3.99,
    quantity: 1,
    description: 'A scoop of creamy and refreshing ice cream in your choice of flavor.'
  },
  {
    name: 'Taco',
    price: 2.99,
    quantity: 1,
    description: 'A soft taco filled with your choice of meat, lettuce, tomato, cheese, and salsa.'
  },
  {
    name: 'Sushi',
    price: 12.99,
    quantity: 1,
    description: 'A variety of fresh and flavorful sushi rolls, including tuna, salmon, and eel.'
  },
  {
    name: 'Sandwich',
    price: 4.99,
    quantity: 1,
    description: 'A hearty sandwich with your choice of meat, cheese, and vegetables on your choice of bread.'
  },
  {
    name: 'Donut',
    price: 1.99,
    quantity: 1,
    description: 'A soft and sweet donut covered in your choice of glaze or powdered sugar.'
  }
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



