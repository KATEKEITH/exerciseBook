// f: 적용할 함수
// coll: 콜렉션 데이터
// acc: 누적값

function reduce(f, coll, acc) {
  const iter = coll[Symbol.iterator]();
  acc = acc === undefined ? iter.next().value : acc;

  for (const v of iter) {
    acc = f(acc, v);
  }
  return acc;
}

console.log(reduce((acc, a) => acc + a, [1, 2, 3]));
console.log(reduce((acc, a) => acc + a, [1, 2, 3], 10)); // 16
