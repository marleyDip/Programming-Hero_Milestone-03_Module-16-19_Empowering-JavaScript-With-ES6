/**
 *
 * Scope -> Global Scope, Function Scope, Block Scope
 *
 * Global Scope -> Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.
 *
 * Function Scope -> Variables declared inside a function are in the function scope. They can only be accessed from within that function.
 *
 * Block Scope -> Variables declared inside a block (e.g. inside an if statement or a for loop) are in the block scope. They can only be accessed from within that block.
 *
 *
 *
 * Features of var, let and const:
 * 1. var is function scoped, while let and const are block scoped.
 *
 * 2. var can be re-declared and updated, while let can be updated but not re-declared, and const cannot be updated or re-declared.
 *
 * 3. var can be reassigned, while let can be reassigned but not re-declared, and const cannot be reassigned or re-declared.
 *
 * 4. var is hoisted to the top of its scope and initialized with undefined, while let and const are hoisted to the top of their scope but not initialized (temporal dead zone).
 *
 * 5. var can be used before it is declared, while let and const cannot be used before they are declared.
 *
 * 6. var and let is must initialized with undefined, while const must be initialized at the time of declaration. Here, initialization means assigning a value to the variable at the time of declaration.
 *
 * 7. Adds to global object (window in browsers) when declared in the global scope. var adds to the global object, while let and const do not.
 *
 * 8. var is not recommended to be used in modern JavaScript, while let and const are recommended to be used.
 *
 *
 */

/* ==== Scope ==== */

// Global Scope
var something = "Hello World";
let somethingElse = "Hello World2";
const somethingImmutable = "Hello World3";

console.log(something); // Hello World
console.log(somethingElse); // Hello World2
console.log(somethingImmutable); // Hello World3

// Block Scope
if (true) {
  var something = "Hello World4";
  let somethingElse = "Hello World5";
  const somethingImmutable = "Hello World6";

  // Here, somethingElse' is declared but its value is never read. Because of that, it will throw an error if we try to access it outside of this block.

  console.log(something); // Hello World4; not Hello World because var is function scoped and it is accessible outside of this block.

  console.log(somethingElse); // Hello World5; not Hello World2 because let is block scoped and it is accessible only inside this block.

  console.log(somethingImmutable); // Hello World6; not Hello World3 because const is block scoped and it is accessible only inside this block.

  // if we try to access the variables declared with let and const outside of this block, it will throw an error because they are block scoped. Same goes for the variables declared with var, but they are function scoped, so they will be accessible outside of this block.
}

console.log(something); // Hello World4, not Hello World because var is function scoped and it is accessible outside of the block.

console.log(somethingElse); // Hello World2; not Hello World5 because let is block scoped and it is not accessible outside of the block.
// Give "ReferenceError: somethingElse is not defined" error if we try to access it outside of the block.

console.log(somethingImmutable); // Hello World3; not Hello World6 because const is block scoped and it is not accessible outside of the block.
// Give "ReferenceError: somethingImmutable is not defined" error if we try to access it outside of the block.

// Function Scope
function myFunction() {
  var something = "Hello World7";
  let somethingElse = "Hello World8";
  const somethingImmutable = "Hello World9";

  console.log(something); // Hello World7; not Hello World4 because var is function scoped and it is accessible only inside this function.

  console.log(somethingElse); // Hello World8; not Hello World5 because let is block scoped and it is accessible only inside this function.

  console.log(somethingImmutable); // Hello World9; not Hello World6 because const is block scoped and it is accessible only inside this function.
}
myFunction();

console.log(something); // Hello World4; not Hello World7 because var is function scoped and it is not accessible outside of the function.

console.log(somethingElse); // Hello World2; not Hello World8 because let is block scoped and it is not accessible outside of the function.

console.log(somethingImmutable); // Hello World3; not Hello World9 because const is block scoped and it is not accessible outside of the function.

/* ==== Re-declaration and Updates ==== */

// Here, var can be easily re-declared and updated
var age = 25; // var can be re-declared and updated
var age = 30; // re-declared
console.log(age); // 30

age = 35; // updated
console.log(age); // 35

// Here, let can be updated but not re-declared
let name = "John"; // let can be updated but not re-declared
// let name = "Doe"; // re-declared; will throw an error "SyntaxError: Identifier 'name' has already been declared"
console.log(name); // John

name = "Doe"; // updated
console.log(name); // Doe

// Here, const cannot be updated or re-declared
const country = "Bangladesh"; // const cannot be updated or re-declared
// const country = "USA"; // re-declared; will throw an error "SyntaxError: Identifier 'country' has already been declared"
console.log(country); // Bangladesh

// country = "Nepal"; // updated; will throw an error "TypeError: Assignment to constant variable."
console.log(country); // Bangladesh

/* ==== Reassignment and Updates ==== */

// Here, var can be reassigned
var city = "Dhaka";
city = "Chittagong"; // reassigned
console.log(city); // Chittagong

// Here, let can be reassigned but not re-declared
let state = "California";
state = "Texas"; // reassigned
console.log(state); // Texas

// Here, const cannot be reassigned or re-declared
const continent = "Asia";
// continent = "Europe"; // reassigned; will throw an error "TypeError: Assignment to constant variable."
console.log(continent); // Asia

/* ==== Hoisting ==== */

console.log(hoistedVar); // undefined; var is hoisted to the top of its scope and initialized with undefined
var hoistedVar = "I am hoisted var";
console.log(hoistedVar); // I am hoisted var

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization;
let hoistedLet = "I am hoisted let";
console.log(hoistedLet); // I am hoisted let

// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization;
const hoistedConst = "I am hoisted const";
console.log(hoistedConst); // I am hoisted const

/* ==== Initialization ==== */

var initializedVar; // var is initialized with undefined
console.log(initializedVar); // undefined
initializedVar = "I am initialized var"; // var can be initialized at the time of declaration or later
console.log(initializedVar); // I am initialized var

let initializedLet; // let is initialized with undefined
console.log(initializedLet); // undefined
initializedLet = "I am initialized let"; // let can be initialized at the time of declaration or later
console.log(initializedLet); // I am initialized let

// const initializedConst; // "SyntaxError: Missing initializer in const declaration"
const initializedConst = "I am initialized const"; // const must be initialized at the time of declaration
console.log(initializedConst); // I am initialized const

/* ==== Adds to Global Object ==== */

var globalVar = "I am a global var";
let globalLet = "I am a global let";
const globalConst = "I am a global const";

console.log(window.globalVar); // I am a global var
console.log(window.globalLet); // undefined
console.log(window.globalConst); // undefined
