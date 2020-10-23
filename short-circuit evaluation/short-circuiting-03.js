// || 연산자
// || 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있습니다.
// A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 됩니다. 반면, A 가 Falsy 하다면 결과는 B 가 됩니다.

// before
const namelessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  console.log(">>>>>", name, animal, animal.name);
  if (!name) {
    return "이름이 없는 동물입니다";
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// after
const nameLessDog = {
  name: "",
};

function getName(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

const name = getName(nameLessDog);
