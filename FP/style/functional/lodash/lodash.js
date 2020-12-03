function person() {
  let _name = "";
  let _age = 0;

  return {
    setName: function (name) {
      console.log("setName", name);
      this._name = name;
      return this;
    },
    setAge: function (age) {
      console.log("setAge", age);
      this._age = age;
      return this;
    },
    toString: function () {
      return [this._name, this._age].join(",");
    },
  };
}

const result = person().setName("Chris").setAge(60).toString();
console.log("result", result);
