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

const replaceSpace = (str) => {
  return str.replace(/(_|-)/, " ");
};

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const changePartStartCase = (str) => {
  console.log("str", str, str.split(" "));
  return str.split(" ").map(startCase).join(" ");
};

const result = names
  .map((name) => replaceSpace(name))
  .map((name) => changePartStartCase(name))
  .sort();
console.log("result", result);
