const arr = [1, 2, 3];
const set = new Set(arr);
const iterator = set.values();
console.log(set);
console.log(arr);
console.log(iterator.next().value);
set.forEach((elem) => console.log(elem));

const set = new Set();
set.add("John");
set.add("Martha");
set.add("Bryan");
set.add("John");

set.delete("Martha");
//set = {'John','Bryan'}
set.clear(); // removes all the element

set.add("a");
set.add("b");
set.add("c");
console.log(set.size); // => 3
