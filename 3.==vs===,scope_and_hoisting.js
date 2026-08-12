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
// console.log(address); // ReferenceError: address is not defined

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

/**
 *
 * Part 1 — == vs ===
 * Both are comparison operators, but they behave differently.
 *
 * i) == — Loose Equality
 * == compares values after type conversion/coercion when necessary.
 *
 * ii) === — Strict Equality
 * === compares both:
 * - Value
 * - Data type
 *
 * In modern JavaScript, generally prefer: === instead of ==
 * because strict equality avoids unexpected type coercion.
 *
 * ==
 * - "Are these values equal after conversion?"
 *
 * ===
 * - "Are these values equal AND the same type?"
 *
 */

// JavaScript converts "5" to the number 5 before comparing.
console.log(5 == "5"); // true; 5 == "5" -> 5 == 5

// Different types → false. 5 → number, "5" → string
console.log(5 == "5"); // false

console.log(10 == "10"); // true
console.log(10 === "10"); // false

console.log(0 == false); // true
console.log("0" == false); // true
console.log(0 === false); // false

console.log(1 == true); // true
console.log("1" == true); // true
console.log(1 === true); // false

console.log(null == undefined); // true; == treats them as equal in this special case.
console.log(null === undefined); // false; null → object-like primitive value, undefined  → undefined. So they are not strictly equal.

// All produce: true. This is exactly why == can become confusing.
console.log("" == 0);
console.log("0" == 0);
console.log(false == 0);
console.log(false == "");

// All produce: false.
console.log("" === 0);
console.log("0" === 0);
console.log(false === 0);
console.log(false === "");

/**
 *
 * Part 2 — Scope & Hoisting
 *
 * i) Scope
 * Scope means: Where a variable can be accessed in your code.
 *
 * There are several important types:
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 *
 * 1. Global Scope
 * - A variable declared outside functions/blocks is generally in the global scope.
 *
 * 2. Function Scope
 * - Variables declared with var inside a function are function-scoped.
 *
 * 3. Block Scope
 * - A block is code inside {}.
 *
 * - let and const block scope
 * - var is function scope
 *
 * 4. Scope Chain
 * - JavaScript looks for variables from the current scope outward / upward.
 *
 * - inner() can access:
 * inner scope
 *      ↓
 * outer scope
 *      ↓
 * global scope
 * This is called the scope chain.
 *
 * - Inner Scope Can Access Outer Scope.
 * - Outer Scope Cannot Access Inner Scope.
 *
 * Outer
 *   ↓
 * Inner
 *
 * - Inner can look outward.
 * - Outer cannot look inward.
 *
 */

// The function can access the variable because myName is outside the function.
const myName = "Sufian";

function greet() {
  console.log(myName);
}
greet();

// Function Scope - message only exists inside test().
function test() {
  var message = "Hello";
  console.log(message); // Hello
}
// console.log(message); // ReferenceError: message is not defined
test();

// Block Scope - These variables cannot be accessed outside the block.
if (true) {
  let age = 22;
  const name = "Sufian";

  console.log(age); // 22
  console.log(name); // Sufian
}
// console.log(age); // ReferenceError: age is not defined

// var vs let Scope
if (true) {
  var city = "Dhaka";
}
console.log(city); // Dhaka

if (true) {
  let city = "Dhaka";
}
// console.log(city); // ReferenceError: city is not defined

if (true) {
  const city = "Dhaka";
}
// console.log(city); // ReferenceError: city is not defined

// Scope Chain - JavaScript looks for variables from the current scope outward.
const cityName = "Sirajganj";

function outer() {
  const age = 22;

  function inner() {
    console.log(cityName); // Sirajganj
    console.log(age); // 22
  }

  inner();
}

outer();

// Inner Scope Can Access Outer Scope
const country = "Bangladesh";

function test1() {
  const city = "Dhaka";

  // Here, access a global scope variable inside a function. But we can not access a inside function variable to outer or global scope
  console.log(country); // Bangladesh
  console.log(city); // Dhaka
}
test1();

// Outer Scope Cannot Access Inner Scope
function test2() {
  const profession = "Developer";
}

// The outer scope cannot reach into the inner scope.
// console.log(profession); // ReferenceError: profession is not defined
