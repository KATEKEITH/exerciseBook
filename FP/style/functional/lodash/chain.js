var _ = require("lodash");

let r = _.chain([2, 1, 3])
  .sort()
  .map((n) => n * 2);
// .value();

console.log("r", r);
