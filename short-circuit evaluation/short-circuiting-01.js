// getName의 파라미터에 제대로된 객체가 주어지지 않으면?
// animal 객체가 undefined 이기 때문에, undefined 에서 name 값을 조회 할 수 없어서 이렇게 에러가 발생

// before
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName();

// after
// const dog = {
//   name: "멍멍이",
// };

// function getName(animal) {
//   if (animal) {
//     return animal.name;
//   }
//   return undefined;
// }

// const name = getName();
