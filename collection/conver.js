const myObject = {
  Age: "25",
  Gender: "Male",
  Nationality: "Australian",
};

const myMap = new Map(Object.entries(myObject));
console.log(">>>", myMap);

const anotherObjetc = Object.fromEntries(myMap);
console.log(">>>", anotherObjetc);
