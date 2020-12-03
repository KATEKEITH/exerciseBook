const { _, reduce } = require("lodash");

class LazyChain {
  constructor(obj) {
    this._target = obj;
    this._calls = [];
  }

  invoke(methodName, ...args) {
    this._calls.push((target) => target[methodName].apply(target, args));
    console.log("invoke", this._calls);
    return this;
  }

  force() {
    return this._calls.reduce((target, thunk) => thunk(target), this._target);
  }

  tap(fun) {
    console.log("tap", fun);
    this._calls.push((target) => (fun(target), target));
    return this;
  }
}

new LazyChain([2, 1, 3]).invoke("concat", [6, 4, 5]).invoke("sort").force();
new LazyChain([2, 1, 3])
  .invoke("concat", [6, 4, 5])
  .tap(console.log) // [ 2, 1, 3, 6, 4, 5 ]
  .invoke("sort")
  .force(); // [ 1, 2, 3, 4, 5, 6 ]
