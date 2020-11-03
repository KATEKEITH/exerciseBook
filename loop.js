const groceries = [
  {
    name: "Face Masks",
    price: 17.5,
  },
  {
    name: "Disinfecting Wipes",
    price: 24.99,
  },
  {
    name: "Goggles",
    price: 8.99,
  },
  {
    name: "Gloves",
    price: 25.99,
  },
  {
    name: "Hand Sanitizers",
    price: 24.99,
  },
];

groceries.map((item) => {
  return item.price;
});
