const dog = {
  name: "멍멍이",
};

function getName(animal) {
  console.log("getNme", animal && animal.name);
  //   return animal && animal.name;
  return animal.name && animal;
}

const name = getName();
console.log(">>>", name);
