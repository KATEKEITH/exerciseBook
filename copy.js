let arr1 = [
  { name: "Joel", type: "player" },
  { name: "Tom", type: "player" },
  { name: "Sally", type: "coach" },
];

// let arr2 = arr1;
// let arr2 = arr1.slice(0, 1);
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].name = "Sam";

console.log(">>>> arr1", arr1);
console.log(">>>> arr2", arr2);
