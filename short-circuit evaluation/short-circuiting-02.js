const dog = {
  name: "멍멍이",
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(">>>", name);
