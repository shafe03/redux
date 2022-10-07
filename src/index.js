import { compose, pipe } from "lodash/fp";

let input = "javascript";
// let output = "<div>" + input.trim() + "</div>";
const trim = (str) => str.trim(input);
const wrapInDiv = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
// //const result = wrapInDiv(toLowerCase(trim(input)));
// //problem with this approach is its left to right and parenthesis
// // lodash have compose and pipe function to solve this problem
// //=====using lodash to solve this problem
// //const transform = compose(wrapInDiv, toLowerCase, trim); //again its left to right
const transform = pipe(trim, toLowerCase, wrapInDiv("span"));
console.log(transform(input));

//------------Curruying
function add(a) {
  return function (b) {
    return a + b;
  };
}
const result = add(1)(2);
// same function in arrow function
const add2 = (a) => (b) => a + b;
const result_add2 = add2(100)(50);
console.log(result_add2);
console.log(result);
