import { compose, pipe } from "lodash/fp";

// let input = "javascript";
// // let output = "<div>" + input.trim() + "</div>";
// const trim = (str) => str.trim(input);
// const wrapInDiv = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();
// // //const result = wrapInDiv(toLowerCase(trim(input)));
// // //problem with this approach is its left to right and parenthesis
// // // lodash have compose and pipe function to solve this problem
// // //=====using lodash to solve this problem
// // //const transform = compose(wrapInDiv, toLowerCase, trim); //again its left to right
// const transform = pipe(trim, toLowerCase, wrapInDiv("span"));
// console.log(transform(input));

// //------------Curruying
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const result = add(1)(2);
// // same function in arrow function
// const add2 = (a) => (b) => a + b;
// const result_add2 = add2(100)(50);
// console.log(result_add2);
// console.log(result);

// <------------------Updating pbject---------------->
// fist copy -> update
// const person = { name: "shafe" };
// //const updated = Object.assign({}, { name: "alam", age: 30 });
// const updated = { ...person, name: "tasnim" };
// console.log(updated);
// console.log(person);

// <------------------Updating arrays---------------->
const number = [1, 2, 3];

// adding
const index = number.indexOf(2);
// const added = [...number.slice(0, index)];
// const added = [...number.slice(0, index), 4, ...number.slice(index)];

// remove
// const removed = number.filter((n) => n !== 2);

// updating
const updated = number.map((n) => (n === 2 ? 20 : n));

// console.log(index);
// console.log(added);
console.log(updated);
