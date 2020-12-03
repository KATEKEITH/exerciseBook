import _, { chain } from "lodash";

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

_,
  chain(names)
    .map((name) => name.replace(/()_|-/, ""))
    .map(_.startCase)
    .sort()
    .value();
