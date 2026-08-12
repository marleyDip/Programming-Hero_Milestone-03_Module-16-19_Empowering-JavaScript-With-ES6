// var age;
console.log(age); // undefined
var age = 25;

// Hoist but goes Temporal Dead Zone (TDZ)
// console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "deep";

// Function hoists full function body, because it non-primitive (reference) data type, memory reference address goes to the top and it work
console.log(add(50, 60)); // 110
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); // 30

/**
 *
 * Hoisting
 *
 * - Hoisting refers to JavaScript's behavior of processing declarations before executing the code in their scope.
 * - JavaScript processes declarations before executing code, but var, let, const, and functions behave differently.
 *
 * var Hoisting
 * - Only the declaration is hoisted, not the assignment.
 *
 *
 * let and const Hoisting
 * - let and const declarations are hoisted, but they are not accessible before initialization.
 * - This period is called the: Temporal Dead Zone — TDZ
 * - const and let is hoisted but remains inaccessible in the TDZ until initialization.
 *
 *
 * Hoisting Comparison
 * Declaration	          Hoisted?	Access Before Initialization
 * var	                 ✅	       undefined
 * let	                 ✅	      ❌ ReferenceError
 * const	               ✅	      ❌ ReferenceError
 * Function declaration	 ✅	      ✅ Can usually be called
 *
 * - But function expression and arrow function in the TDZ before initialization.
 *
 * → function scoped
 * → hoisted
 * → before assignment → undefined
 *
 *
 * let
 * → block scoped
 * → hoisted
 * → before initialization → ReferenceError
 * → TDZ
 *
 *
 * const
 * → block scoped
 * → hoisted
 * → before initialization → ReferenceError
 * → TDZ
 *
 *
 * function declaration
 * → hoisted
 * → can generally be called before declaration
 */

// var Hoisting
console.log(city); // undefined
var city = "Dhaka";

// The declaration is available before the assignment.
// var city1;
console.log(city1); // undefined
var city1 = "Khulna"; // only variable declaration goes to top but not the value that store into variable through assignment operator.

// let Hoisting
// The time between entering the scope and reaching:
// console.log(city2); // ReferenceError: Cannot access 'city2' before initialization
let city2 = "Rajshahi";
// is the Temporal Dead Zone for city2.
// Accessing city2 during that period causes: ReferenceError

// const Hoisting
// const is also hoisted but remains inaccessible in the TDZ until initialization.
// console.log(city3); // ReferenceError: Cannot access 'city3' before initialization
let city3 = "Rajshahi";

// Function Hoisting
greet();

function greet() {
  console.log("Hello"); // Hello
}

// Function Expression
// Because greet is a const variable and is in the TDZ before initialization.

// greet1();
const greet1 = function () {
  console.log("Hello"); // ReferenceError: Cannot access 'greet1' before initialization
};

// Arrow Function
// An arrow function assigned to const doesn't behave like a hoisted function declaration.

// greet2();
const greet2 = () => {
  console.log("Hello"); // ReferenceError: Cannot access 'greet2' before initialization
};

// Scope + Hoisting Together
// The local x hides the global x.
// This is an important concept called variable shadowing.

var x = 10;
function test() {
  console.log(x); // undefined

  var x = 20;

  // var x;
  // console.log(x); // undefined
  // x = 20;
}

test();

// Variable Shadowing
// The inner name shadows the outer name.
const name1 = "Sufian";

function test1() {
  const name1 = "Rahim";

  console.log(name1); // Rahim
}
test1();
console.log(name1); // Sufian

// var Shadowing / Function Scope Example
var x = 10;

function test() {
  var x = 20;

  console.log(x); // 20
}

test();

console.log(x); // 10

// Interview Questions
var y = 10;
if (true) {
  var y = 20;
}
console.log(y); // 20

let x1 = 10;
function test2() {
  console.log(x1); // 10
}
test2();

// Predict all output - Variable Shadowing (inner scope hides the outer scope if variable name is same).
const z = 10;
const k = 60;
{
  const z = 20;
  const k = 40;

  {
    const z = 30;
    console.log(z); // 30
    console.log(k);
  }

  console.log(z); // 20
}
console.log(z); // 10
