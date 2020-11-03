// const arr = [
//   "Breakfast Cereal",
//   "Candy and Snack",
//   "Dairy",
//   "Paper Products and Cleaning Supplies",
// ];

// const func = (n) => {
//   const i = arr.findIndex((i) => i === n);
//   console.log(i);
// };

// func("Dairy");

const aisles = [
  "Breakfast Cereal",
  "Candy and Snack",
  "Dairy",
  "Paper Products and Cleaning Supplies",
];

const printAislenumber = (name) => {
  const number = aisles.findIndex((aisleName) => {
    return aisleName === name;
  });
  console.log(number);
};

printAislenumber("Dairy");
