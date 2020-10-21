// TODO:특정값이Truthy한값이라면true, 그렇지않다면false로값을표현;
const value = { a: 1 };

// sol 1) value 값의 존재 유무에 따라 쉽게 true 및 false 로 전환이 가능
const truthy = value ? true : false;
// sol 2) !value 는 false 가 되고, 여기에 !false 는 true 가 되어서, 결과는 true
const _truthy = !!value;
