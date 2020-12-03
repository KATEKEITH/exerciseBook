// 함수에 전달하면 특별한 lodash 객체를 반환한다.
// 반환된 객체가 제공하는 메소드는 [2,1,3]배열을 파라미터로 전달받아 실행되는 것이 일반 lodash 객체와 다른점이다.
var _ = require("lodash");

let l = _.chain([2, 1, 3]).sort().value();
console.log("l", l);

// let r = _.chain([2, 1, 3]).sort().tap(console.log);
// console.log("r", r);
