import produce, { Produced } from "immer";

let name = { fistName: "shafe", lastName: "alam" };

function changes(name) {
  return produce(name, (draftChanges) => {
    draftChanges.name = "tasnim";
  });
}

let change = changes(name);

console.log(name);
console.log(change);
