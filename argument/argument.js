// function example2() {
//   console.log(arguments.join());
// }
// example2(1, "string", true);

function example3() {
  console.log(Array.prototype.join.call(arguments));
}
example3(1, "string", true);
