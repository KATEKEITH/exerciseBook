// 값에 따라 다른 결과물을 반환 해야 할 때
function getSound(animal) {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~",
    참새: "짹짹",
    비둘기: "구구 구 구",
  };

  return sounds[animal] || "...?";
}
console.log(getSound("물개"));

// 값에 따라 실행해야 하는 코드 구문이 다를 때
function makeSound(animal) {
  const tasks = {
    개() {
      console.log("멍멍");
    },
    고양이() {
      console.log("고양이");
    },
    비둘기() {
      console.log("구구 구 구");
    },
  };
  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  tasks[animal]();
}
makeSound("개");
makeSound("호랑이");
