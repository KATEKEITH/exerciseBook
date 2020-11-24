var obj = {
  string: "zero",
  yell: function () {
    console.log(this.string);
  },
};
var obj2 = {
  string: "what?",
};
obj.yell(); // 'zero';
obj.yell.call(obj2); // 'what?'
