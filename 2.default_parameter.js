/**
 *
 * Default Parameters in JavaScript
 *
 * JavaScript default parameters allow you to initialize function parameters with default values if no value or undefined is passed to the function.
 *
 * A default parameter is a fallback value used when a function argument is not provided.
 *
 * syntax:
 * function functionName(parameter = defaultValue) {
 *   Function body
 * }
 *
 * This feature was introduce in ES6 (ECMAScript 2015) to replace manual checks like: y = y || defaultValue;
 *
 * old syntax:
 * function functionName(parameter) {
 *   return parameter || defaultValue
 * }
 *
 * Key Behaviors:
 * 1) Triggers on undefined: The default value is used only if the argument is missing or explicitly passed as undefined.
 *
 * 2) Does not trigger on null: Passing null is considered a valid intentional value, so the default value will not be triggered.
 *
 * Common Mistakes:
 * - ❌ Using = Instead of ===
 * - ❌ Expecting null to Trigger the Default
 * - Only undefined (or a missing argument) uses the default value.
 *
 * Function Call	   Parameter	     Result
 * greet()	         Missing	       "Guest"
 * greet(undefined)	 undefined	     "Guest"
 * greet("Sufian")	 "Sufian"	       "Sufian"
 * greet(null)	     null	           null
 * greet("")	       Empty string	   ""
 *
 */

// Default parameter basic syntax
// Assign a default value directly to the parameter using the assignment operator (=) in the function declaration.
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // function body
}

// Without default parameter - Because no argument was passed, name is undefined.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet()); // "Hello, undefined!"

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10)); // 15
console.log(sum(5)); // NaN (b is undefined, so the result is NaN) ==> 5 + undefined = NaN

// Default parameters are used when the argument is undefined.
// With default parameter - one
const greetWithDefault = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log(greetWithDefault("Bob")); // "Hello, Bob!"
console.log(greetWithDefault()); // "Hello, Guest!"

// Multiple Default Parameters
function create(name = "Unknown", age = 18) {
  console.log(name, age);
}

create();
create("Sufian");
create("Sufian", 22);

// Arrow Function
const multiplyOfArrow = (a = 1, b = 1) => a * b;
console.log(multiplyOfArrow()); // 1
console.log(multiplyOfArrow(5)); // 5
console.log(multiplyOfArrow(5, 4)); // 20

// Default Parameters with Objects
function printUser(user = {}) {
  console.log(user);
}

printUser(); // {}
printUser({
  name: "Sufian",
  age: 22,
}); // { name: 'Sufian', age: 22 }

// Default Parameters with Arrays
function printNumbers(numbers = []) {
  console.log(numbers);
}

printNumbers(); // []
printNumbers([1, 2, 3]); // [ 1, 2, 3 ]

function makeCoffee(sugar = 1) {
  return "Coffee is prepared " + "with " + sugar + " spoon sugar";
}

// Call function makeCoffee & Pass the numbers as a argument into the makeCoffee function parameter
console.log(makeCoffee(2));
console.log(makeCoffee(2));
console.log(makeCoffee());

// Default parameters are used when the argument is undefined.
// Default parameter with undefined
function test(quantity = 1) {
  return quantity;
}

console.log(test(5)); // 5
console.log(test()); // 1 (uses default value)
console.log(test(undefined)); // 1 (uses default value)
console.log(test(null)); // null
console.log(test(0)); // 0

// Default parameter with null - null is considered an actual value, so the default is not used.
function multiplyWithNull(a, b = 1) {
  return a * b; // 5 * null = 0
}

console.log(multiplyWithNull(5, null)); // 0 (b is null, not defaulted)
console.log(multiplyWithNull(5)); // 5 (b defaults to 1)

// Old way of setting default parameters before ES6
// Without default parameter, using logical OR operator
// Falsy value - false, 0, -0, 0n, "", null, undefined, NaN
// Truthy value - {}, [], " ", "false", "0", true, non-zero number
function multiplyWithoutDefault(a, b) {
  b = b || 1; // If b is falsy (undefined, null, 0, false, ""), it defaults to 1
  return a * b;
}

console.log(multiplyWithoutDefault(5, null)); // 5 (b is null, defaults to 1)
console.log(multiplyWithoutDefault(5)); // 5 (b defaults to 1)

/* ===== Advanced Usage ===== */

// 1. Using Earlier Parameters - Default Value Can Be an Expression
// Parameters are evaluated from left to right. You can use a previous parameter to calculate a default value for a later parameter:
function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculatePrice(100)); // Output: 110

// 2. Function Calls as Defaults
// The default value can be the result of a function execution. This function is evaluated at call time, meaning it runs anew every time the parent function is invoked without that argument.
function generateId() {
  return Math.random().toString();
}

function createUser(name, id = generateId()) {
  return { name, id };
}
console.log(createUser("Alice")); // Output: { name: "Alice", id: "random_id" }

// 3. Destructured Default Parameters
// You can combine default parameters with object destructuring to safely extract properties from an object argument:
function processUser({ name, email, age = 0 }) {
  return { name, email, age };
}

console.log(processUser({ name: "Alice", email: "alice@example.com" })); // Output: { name: "Alice", email: "alice@example.com", age: 0 }

function configureTheme({ color = "blue", width = "100px" } = {}) {
  console.log(color, width);
}

configureTheme({ color: "red" }); // Output: red 100px
configureTheme(); // Output: blue 100px (fallback via the empty object default)

/* ===== Comparison ====== */
// This older approach has a problem: 0 is a falsy value, so it incorrectly becomes 100.
function printScoreOld(score) {
  score = score || 100;

  console.log(score); // 100
}

printScoreOld(0);

// With Default Parameters - This is one reason default parameters are preferred.
function printScore(score = 100) {
  console.log(score); // 0
}

printScore(0);

// Real-World Example
// Imagine an online shopping website.
// If the customer doesn't specify a quantity, it defaults to 1.
function orderProduct(product, quantity = 1) {
  console.log(`Product: ${product}`);
  console.log(`Quantity: ${quantity}`);
}

orderProduct("Laptop");
orderProduct("Phone", 3);
