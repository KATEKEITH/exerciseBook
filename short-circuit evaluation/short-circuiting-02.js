// && 연산자
//  A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다.
// 반면, A 가 Falsy 한 값이라면 결과는 A 가 됩니다.

// before
const dog = {
  name: "멍멍이 ",
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name);

// after
// const dog = {
//   name: "멍멍이",
// };

// function getName(animal) {
//   return animal && animal.name;
// }

// const name = getName(dog);
// console.log(name); // 멍멍이
