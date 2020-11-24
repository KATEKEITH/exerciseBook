// bind 함수는 함수가 가리키는 this만 바꾸고 호출하지는 않는 겁니다.
var obj = {
  string: "zero",
  yell: function () {
    console.log(this.string);
  },
};
var obj2 = {
  string: "what?",
};
var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'
