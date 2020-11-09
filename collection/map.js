const map = new Map();
map.set("Name", "iPhone");
map.set("Brand", "Apple");
map.set("Price", "$1000");
console.log(map.size); //=> 3
console.log(map.get("Name")); //iPhone
console.log(map.get("Brand")); // Apple

console.log(map.keys());
// iterator {'Name','Brand',Price'}
console.log(map.values());
// iterator {'iPhone','Apple','$1000'}
console.log(map.entries());
//iterator {'Name':'iPhone','Brand':'Apple',Price':'$1000'}

//with for-each
map.forEach((value, key) => {
  console.log(`${key} is ${value} years old!`);
});

// with for-of
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

var map = new Map();
map.set("age", 19);
console.log(map.has("age")); // true since 'age' key is present
