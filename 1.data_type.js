/**
 *
 * Primitive vs Non-Primitive Data Types
 *
 * JavaScript data types can broadly be divided into two groups:
 *
 * JavaScript Data Types
 * │
 * ├── Primitive
 * │   ├── String
 * │   ├── Number
 * │   ├── Boolean
 * │   ├── Undefined
 * │   ├── Null
 * │   ├── BigInt
 * │   └── Symbol
 * │
 * └── Non-Primitive
 *  └── Object
 *      ├── Object
 *      ├── Array
 *      └── Function
 *
 * 1. Primitive Data Types
 * A primitive value is a basic, single value.
 *
 * JavaScript has 7 primitive data types:
 * Type	        Example
 * String	    "Sufian"
 * Number	    25, 3.14
 * Boolean	    true, false
 * Undefined	undefined
 * Null 	    null
 * BigInt	    123n
 * Symbol	    Symbol("id")
 *
 * -> Undefined - A variable that has been declared but hasn't been given a value has the value undefined.
 * -> Null - null represents an intentional absence of a value.
 *
 *
 * 2. Non-Primitive Data Types
 * The main non-primitive type in JavaScript is: Object
 *
 * Objects can contain multiple values.
 * So when people say non-primitive types, you'll commonly see:
 * - Object
 * - Array
 * - Function
 *
 *
 * The Biggest Difference: Value vs Reference
 * This is the most important part.
 * - Primitive values are copied by value.
 * - Objects and arrays are copied by reference (more precisely, the variable holds a reference to the object).
 *
 * Primitive vs Non-Primitive
 * Feature	        Primitive	                Non-Primitive
 * Examples	        String, Number, Boolean	    Object, Array, Function
 * Stores	        Single value	            Collection/complex structure
 * Copy behavior	Value	                    Reference
 * Mutable?	       ❌	                      Usually ✅
 * Example	       let a = 10	               let user = {}
 * Can contain multiple values?	❌	         ✅
 *
 * Important: Primitive Values Are Immutable
 * - Primitive values themselves cannot be changed.
 *
 * Objects Are Mutable
 * - Objects can have their properties changed.
 * - Arrays Are Non-Primitive
 *
 *
 * Interview Questions:
 *
 * Why is let better than var?
 * Because let:
 * - has block scope
 * - prevents accidental redeclaration
 * - avoids many bugs caused by var
 *
 * Why use const if objects can change?
 * - Because const prevents reassigning the variable, not modifying the object's contents.
 *
 * Is const immutable?
 * - No.
 * - The binding is constant, but the object or array contents can still be modified unless you explicitly freeze them (for example, with Object.freeze()).
 *
 * No, const is not strictly the same as immutable. In most programming languages (like JavaScript, C++, and C#), const means immutable binding (the variable name cannot point to a different value or object), whereas immutable means the actual data or value cannot be changed.
 *
 */

// String - Used for text.
const name = "Sufian";
const language = "JavaScript";

console.log(name);
console.log(language);

// Number - Used for integers and decimal numbers.
// JavaScript has one main Number type for both integers and floating-point numbers.
const age = 22;
const price = 99.99;

console.log(age);
console.log(price);

// Boolean - Has only two possible values: true false
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
  console.log("Welcome!");
}

// Undefined - A variable that has been declared but hasn't been given a value has the value undefined.
let username;
console.log(username); // undefined

// You can also explicitly assign it:
let score = undefined;

// Null - null represents an intentional absence of a value.
const user = null;
console.log(user);

// You can think of it as: "There is intentionally no value here."
let selectedUser = null;
selectedUser = {
  name: "Sufian",
};

// BigInt - Used for integers larger than JavaScript's safe Number integer range.
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
// Notice the n at the end. 100n is a BigInt, while: 100 is a Number.

// Symbol - Symbol creates a unique value.
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
// Even though both symbols have the same description, they are different unique values.

// 2. Non-Primitive Data Types
// Plain Object
const userObj = {
  name: "Sufian",
  age: 22,
};

// Arrays are also objects:
const skills = ["HTML", "CSS", "JavaScript"];

// Functions are also objects:
function greet() {
  console.log("Hello");
}

/* The Biggest Difference: Value vs Reference

This is the most important part.

Primitive values are copied by value.

Objects and arrays are copied by reference (more precisely, the variable holds a reference to the object). */

// Primitive Copy

let a = 10;
let c = a;

c = 20;

console.log(a); // 10
console.log(c); // 20

// When you write: let c = a;
// c gets its own copy of the value 10.
// So: a → 10, c → 10
// Then: c = 20;
// Only c changes: a → 10, c → 20

// Non-Primitive Copy
// Now look at an object:

const user1 = {
  name: "Sufian",
};
const user3 = user1;
user3.name = "Rahim";

console.log(user1.name); // Rahim
console.log(user3.name); // Rahim

// Why did user1 change?
// Because: const user3 = user1;
// doesn't create a new object.
// Both variables refer to the same object.

// Conceptually:
// user1 ──┐
//         ↓
//      { name: "Sufian" }
//         ↑
// user3 ──┘

// After: user3.name = "Rahim";
// the same object becomes: { name: "Rahim" }
// Therefore both see "Rahim".

// Important: Primitive Values Are Immutable
// Primitive values themselves cannot be changed.
let myName = "Sufian";
myName[0] = "X";

// The string doesn't change.
console.log(myName); // Sufian

// When you do: name = "Rahim";
// you're not modifying the original "Sufian" value.
// You're making the variable refer to another value.

// Objects Are Mutable
// Objects can have their properties changed.

const userPro = {
  name: "Sufian",
};

userPro.name = "Rahim";

console.log(userPro); // { name: "Rahim" }

// Notice that this works even though user is declared with const.
// Because const prevents reassignment of the reference: user = {}; ❌ Not allowed.

// But modifying the existing object: userPro.name = "Rahim"; ✅ Allowed.

// Arrays Are Non-Primitive
const numbers1 = [1, 2, 3];

const numbers2 = numbers1;
numbers2.push(4);

// Again, both variables refer to the same array.
console.log(numbers1); // [1, 2, 3, 4]
console.log(numbers2); // [1, 2, 3, 4]

// How to Create a Real Array Copy
// This connects directly to the spread operator you already learned.
const numbers3 = [1, 2, 3];
const numbers4 = [...numbers1];

numbers4.push(4);

// Now they are separate arrays.
console.log(numbers1); // [1, 2, 3]
console.log(numbers2); // [1, 2, 3, 4]

// How to Copy an Object
// Using spread:

const user4 = {
  name: "Sufian",
  age: 22,
};

const user5 = { ...user1 };

user5.name = "Rahim";

// This is a shallow copy.
console.log(user4); // { name: "Sufian", age: 22 }
console.log(user5); // { name: "Rahim", age: 22 }

// A Very Important Trap: Nested Objects
const user6 = {
  name: "Sufian",
  address: {
    city: "Dhaka",
  },
};

const user7 = { ...user6 };

user7.address.city = "Rajshahi";

console.log(user1.address.city); // Rajshahi

// The spread operator only makes a shallow copy.
// Conceptually:
// user1
//   │
//   └── address ──→ { city: "Dhaka" }
//                          ↑
//   └── address ───────────┘
//                          ↑
// user2

// Both objects have different top-level objects, but they still share the same nested address object.
// This concept will become extremely important when you work with React state.

// typeof and Data Types
// You can check the type using: typeof value

console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof 100n); // bigint
console.log(typeof Symbol("id")); // symbol

// Weird JavaScript Case: typeof null
console.log(typeof null); // object

// This is a historical JavaScript behavior/quirk.
// Even though null is a primitive, typeof null returns "object".
// So don't conclude that null is an object based on typeof.

// Arrays and typeof
// Another common interview question:
const numbers = [1, 2, 3];
console.log(typeof numbers); // object

// Because arrays are objects in JavaScript.
// To specifically check for an array:
console.log(Array.isArray(numbers)); // true
