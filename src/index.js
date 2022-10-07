import { compose, pipe } from "lodash/fp";

let input = "javascript";
let output = "<div>" + input.trim() + "</div>";
const trim = (str) => str.trim(input);
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
//const result = wrapInDiv(toLowerCase(trim(input)));
//problem with this approach is its left to right and parenthesis
// lodash have compose and pipe function to solve this problem

//=====using lodash to solve this problem

//const transform = compose(wrapInDiv, toLowerCase, trim); //again its left to right

const transform = pipe(trim, toLowerCase, wrapInDiv);

console.log(transform(input));
