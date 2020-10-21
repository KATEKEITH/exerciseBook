// && 연산자로 코드 단축시키기
// 특정 값이 유효할때에만
// 어떤 값을 조회하는 작업을 해야 할 때 매우 유용합니다.
const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal.name;
}

const name = getName();
console.log("name", name);
