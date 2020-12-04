let arr = [1, 2, 3, 4];

arr.map((x) => [x * 2]);

arr.flatMap((x) => [x * 2]);
arr.flatMap((x) => [[x * 2]]);

// example
let arr1 = ["it's Sunny in", "", "California"];

const a = arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

console.log(a);

const b = arr1.flatMap((x) => x.split(""));
console.log(b);
