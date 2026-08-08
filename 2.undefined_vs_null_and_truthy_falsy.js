// Variable declared but not given a value, to store it into variable
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

// If not pass a argument to Function
function greet(name) {}
greet(); // undefined

// If a property or key does not exits in a object but you want to access it
const o = { age: 25 };
o.city; // undefined

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Falsy Value = false, 0, "", null, undefined, NaN
// Truthy value = [], {}, true, "0", " ",
// Without falsy value, everything truthy value
