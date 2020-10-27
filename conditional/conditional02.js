// 특정 값이 여러 값중 하나인지 확인해야 할 때
function isAnimal(name) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(name);
}
console.log("개");
console.log("노트북");

const isAnimal = (name) => ["고양이", "개", "거북이", "너구리"].includes(name);
