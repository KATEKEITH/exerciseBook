// arguments 객체를 활용하여 인수를 전달받는다.
// 하지만 arguments 객체를 유사 배열 객체이므로
// 배열 메소드를 사용하려면
// Funtion.prototype.call을 사용해야 하는 번거로움이 있다.
var foo = function () {
  console.log(arguments);
};

foo(1, 2);

function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce((pre, cur) => {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3, 4, 5));
