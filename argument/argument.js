// 아규먼트(argument)란 함수를 실행할 때 넣는 값입니다.
// 파라미터(parameter)란 함수에서 받을 수 있는 변수입니다.
function add(value1, value2) {
  return value1 + value1;
}

add(2, 3); // 2와 3이 아규먼트입니다

add(1, 2, 3, 4, 5); // 파라미터는 2개밖에 없지만 아규먼트는 2개를 초과할 수 있습니다.

// function example2() {
//   console.log(arguments.join());
// }
// example2(1, "string", true);

function example3() {
  console.log(Array.prototype.join.call(arguments));
}
example3(1, "string", true);
