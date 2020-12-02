const names = [
  "leah kelly",
  "christian_Nolan",
  "Alexander james",
  "Tim-Mackenzie",
  "dan_Hunter",
  "Ryan Bower",
  "Frank_chapman",
  "Dorothy-Sanderson",
  "Fiona_Glover",
  "Robert Edmunds",
];

// 성과 이름은 대문자로 시작한다. // leah kelly => Leah Kelly
// 성과 이름 사이 구분은 공백으로 한다. // christian_Nolan => christian Nolan
// 추가적으로 오름차순으로 정렬한다. // ['c...', 'A...'] => ['A...', 'c...']

const result = [];

for (let i = 0; i < names.length; i += 1) {
  const name = names[i];
  const spaceName = name.replace(/(_|-)/, " ");
  const splitName = spaceName.split("");

  for (let j = 0; j < splitName.length; j += 1) {
    let partName = splitName[j];
    partName = partName.charAt(0).toUpperCase() + partName.slice(1);
    splitName[j] = partName;
  }
  result.push(splitName.join(""));
}
result.sort();
console.log("result", result);
