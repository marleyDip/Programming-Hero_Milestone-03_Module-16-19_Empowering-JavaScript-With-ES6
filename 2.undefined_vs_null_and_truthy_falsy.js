// Variable declared but has not been given a value yet; to store it into variable.
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

/**
 *
 * Part 1 — undefined and null
 *
 * What is undefined?
 * - undefined generally means: A value has not been assigned or is unavailable.
 * - A variable that has been declared but hasn't been given a value has the value undefined.
 *
 * What is null?
 * - null means: The programmer intentionally says there is no value.
 * - null represents an intentional absence of a value.
 *
 *
 * undefined vs null
 * The easiest way to remember:
 * undefined → JavaScript says "there is no value here."
 * null      → Developer says "there intentionally is no value here."
 *
 * Comparison
 * undefined	                        null
 * Value is unavailable/not assigned	Intentional absence of value
 * Often produced automatically	      Usually assigned intentionally
 * typeof → "undefined"	              typeof → "object"
 * Common with missing properties	    Common when resetting/clearing a value
 *
 */

// Declared but not assigned
// The variable exists, but it doesn't have a value yet.
let userName;
console.log(userName); // undefined

// Missing Object Property
// The age property doesn't exist.
const user = {
  mane: "Sufian",
};
console.log(user.age); // undefined

// Missing Function Argument
// Because no argument was provided.
function greet(name) {
  console.log(name);
}
greet(); // undefined

// Function Without Return
// The function doesn't explicitly return anything.
function calculate() {
  const result = 10 + 20;
}
console.log(calculate()); // undefined

// This is common when something is initially empty but will receive a value later.
let selectedUser = null;
console.log(null); // null

selectedUser = {
  name: "Deep",
};
console.log(selectedUser); // { name: 'Deep' }

let a;
let b = null;
console.log(a); // undefined
console.log(b); // null

// Important: typeof null
// This is one of JavaScript's famous quirks:
// But remember: null is a primitive value, even though typeof null returns "object".
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// undefined and null with Equality
// == performs type coercion.
// === checks both value and type.
// Always prefer === and !== over loose equality.
console.log(undefined == null); // true; before compare it convert type and both are falsy value
console.log(undefined === null); // false; undefined === object

/**
 *
 * Part 2 — Truthy and Falsy
 *
 * What is Truthy?
 * - A value is truthy if JavaScript treats it as true in a Boolean context.
 * - Truthy values - true, [], {}, "Hello", "false", 123, -10, " "
 *
 * What is Falsy?
 * - A value is falsy if JavaScript treats it as false.
 * - There are 8 falsy values you should memorize: 0, -0, 0n, "", false, null, undefined, NaN
 *
 * Without falsy values - Everything else is truthy.
 *
 * Boolean Conversion and Double Not !!
 * - Explicitly convert a value to Boolean - Boolean(value).
 * - Boolean representation of the value - !!value
 *
 * Truthy/Falsy and || - right side || left side
 * - This is extremely common in JavaScript.
 * - If right side value is truthy, then it print right side value.
 * - But if right side value is falsy, then it print left side value.
 *
 * - const finalScore = 0 || 100;
 * - Here print 100.
 *
 * This is where the nullish coalescing operator ?? becomes useful.
 * Because ?? only falls back for:
 * - null
 * - undefined
 *
 * - const finalScore = 0 ?? 100;
 * - Here print 0.
 *
 */

// When JavaScript expects a Boolean, it can automatically convert other values to either:
if ("Hello") {
  console.log("Runs"); // Runs Because "Hello" is truthy.
}

// The 8 Falsy Values
if (false) {
  console.log("Hello");
}

if (0) {
  console.log("Hello");
}

if (-0) {
  console.log("Hello");
}

if (0n) {
  console.log("Hello");
}

if ("") {
  console.log("Hello");
}

if (null) {
  console.log("Hello");
}

if (undefined) {
  console.log("Hello");
}

if (NaN) {
  console.log("Hello");
}

// " " contains a space, so it is a non-empty string. So its truthy value.
if (" ") {
  console.log("Hello");
}

// Everything Else Is Truthy
// Empty Object Is NOT Falsy
if ({}) {
  console.log("Truthy"); // Truthy
}

// Empty Array Is NOT Falsy
// Because arrays are objects, and objects are truthy.
if ([]) {
  console.log("Truthy"); // Truthy
}

// Boolean Conversion
// You can explicitly convert a value to Boolean using: Boolean(value)
console.log(Boolean(10)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false

// Double NOT !! - Logical Not Operator (!)
// First ! converts to Boolean and reverses it.
// Second ! reverses it again.
// Effectively gives you the Boolean representation of the value - !!value.
console.log(!10); // false; firstly converts to Boolean - true and then reverse it - false
console.log(!!10); // true

console.log(!0); // true
console.log(!!0); // false

// Truthy/Falsy in if
const username = "Sufian";

if (username !== "") {
  console.log("Username exists");
}

// Real-Life Example — Login
if (username) {
  console.log("Username provided");
} else {
  console.log("Username missing");
}

// Real-Life Example — Shopping Cart
const cart = [];

if (cart) {
  console.log("Cart exists");
}

// But if you want to check whether the cart has products, you need:
if (cart.length > 0) {
  console.log("Cart has products");
} else {
  console.log("There is no product in the cart");
}

// Real-Life Example — API Data
// Suppose an API returns:
const profile = {
  name: "Deep",
  bio: null,
};

if (user.bio) {
  console.log(user.bio);
} else {
  console.log("No bio available");
}

// Truthy/Falsy and ||
// This is extremely common in JavaScript.
let profileName = "";
const displayName = profileName || "Guest";
console.log(displayName); // Guest

let profileName1 = "Sufian";
const displayName1 = profileName1 || "Guest";
console.log(displayName1); // Sufian

// Important Trap with 0
const score = 0;
const finalScore = score || 100;
console.log(finalScore); // 10

// But perhaps 0 is a legitimate score!
// This is where the nullish coalescing operator ?? becomes useful.
// Because ?? only falls back for: null undefined
const finalScore1 = score ?? 100;
console.log(finalScore1); // 0

// Interview Traps
// Predict these before running them.
console.log(Boolean("")); // false
console.log(Boolean("false")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

const value = 0;
if (value) {
  console.log("A");
} else {
  console.log("B"); // B
}

const value1 = "0";
if (value1) {
  console.log("A"); // A
} else {
  console.log("B");
}

const users = [];
if (users) {
  console.log("Users found"); // Users found
} else {
  console.log("No users");
}

const score1 = 0;
console.log(score1 || 100); // 100
console.log(score1 ?? 100); // 0
