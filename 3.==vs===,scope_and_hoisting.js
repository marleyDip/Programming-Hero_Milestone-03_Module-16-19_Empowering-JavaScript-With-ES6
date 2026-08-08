// When compare in ==, it convert type if need, is called implicit type conversion. It only compare the value.
// In ===, no conversion held...it strictly compare type and value.

// == => Loose equality
// === => strict equality

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

// scope - 3 types
// 1. Global scope 2. Block scope 3. Function scope
// var maintain function scope only
// let and const maintain block and function scope both

// 1. Global scope
let name = "Deep";

if (true) {
  console.log(name); // Deep
}

for (let i = 0; i < 5; i++) {
  console.log(name); // 5 times print "Deep"
}

// 2. Block scope
if (true) {
  let age = 54;
  console.log(age); // 54
}
// console.log(age); // ReferenceError: age is not defined

{
  let address = "Dhaka, Bangladesh";
}
// console.log(address); // ReferenceError: age is not defined

{
  var address = "Dhaka, Bangladesh";
}
console.log(address); // Dhaka, Bangladesh

// 3. Function scope - is also a block scope
function add(a, b) {
  // var sum = a + b;
  // console.log(sum); // 25

  const sum = a + b;
  console.log(sum); // 25

  return sum;
}

// because var function scope and let and const also
// console.log(sum); // ReferenceError: sum is not defined

console.log(add(10, 15)); // 25
