let numbers = [10, 20, 30, 40, 50];

console.log(numbers); // [10, 20, 30, 40, 50]
console.log(...numbers); // 10 20 30 40 50
console.log(10, 20, 30, 40, 50); // 10 20 30 40 50
console.log([...numbers]); // [ 10, 20, 30, 40, 50 ]

// Math.max
let maxNumber = Math.max(100, 200, 300, 1000, 50, 670);
console.log(maxNumber); // 100

// let maxNumber2 = Math.max(numbers); // [1, 2] NaN, its not work with array, need spread number
let maxNumber2 = Math.max(...numbers);
console.log(maxNumber2); // 50

// Here, Array & Object referential data type - non primitive, so in memory save its reference
let numbers2 = numbers;
numbers.push(2400);

console.log(numbers2); // [ 10, 20, 30, 40, 50, 2400 ]
console.log(numbers); // [ 10, 20, 30, 40, 50, 2400 ]

// But we do not want update numbers2 when push numbers, need to spread operator that copy, merge, adding element of array
let spreadNumbers = [...numbers];
numbers.push(4800);

console.log(spreadNumbers); // [ 10, 20, 30, 40, 50, 2400 ]
console.log(numbers); // [ 10, 20, 30, 40, 50, 2400, 4800 ]

// Here, not add 2000 in spreadNumbers because of it copy of original numbers
let spreadNumbersAdd = [2, 5, ...numbers, 9600];

console.log(spreadNumbersAdd); // [ 2, 5, 10, 20, 30, 40, 50, 2400, 4800, 9600 ]

// merge
const spreadNumbersMerge = [...spreadNumbersAdd, ...spreadNumbers];

console.log(spreadNumbersMerge); // [ 2, 5, 10, 20, 30, 40, 50, 2400, 4800, 9600, 10, 20, 30, 40, 50, 2400 ]

/* ===== Spread Object ===== */
let student = {
  name: "deep",
  age: 27,
};

let student2 = student;
student.roll = 384;

console.log(student2); // { name: 'deep', age: 27, roll: 384 }
console.log(student); // { name: 'deep', age: 27, roll: 384 }

// Independently, clone the object => make a new object
let spreadStudent = { ...student, gpa: "5.00", roll: 3930 };
student.gpa = "4.50";

console.log(student); // { name: 'deep', age: 27, roll: 384, gpa: '4.50' }
console.log(spreadStudent); // { name: 'deep', age: 27, roll: 3930, gpa: '5.00' }

// Now merge & override - 1st one similar key is override by 2nd one
let mergeStudent = { ...spreadStudent, ...student };
console.log(mergeStudent); // { name: 'deep', age: 27, roll: 384, gpa: '4.50' }

/* ===== Rest Operator ===== */
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(10, 20, 30)); // 60

// When we need function parameter, argument e dynamic amount of number, used rest operator; obviously rules - must be last (no parameter after it) & only one added inside single parameter list
function restSum(a, b, c, ...restNumbers) {
  console.log(restNumbers, "Rest Numbers"); // [ 40, 50, 60, 70, 80, 90 ] Rest Numbers

  let sum = 0;
  for (const number of restNumbers) {
    sum += number;
  }

  return a + b + c + sum;
}

console.log(restSum(10, 20, 30, 40, 50, 60, 70, 80, 90)); // 450

/**
 *
 * Spread Operator (...)
 *
 * The JavaScript spread operator (...) allowing you to expand an iterable like an array, string, or object into its individual elements or properties.
 *
 * It provides a clean, modern syntax introduced in ES6 to copy, merge, and unpack data without mutating the original structure
 *
 *
 * Shallow Coping vs Deep Coping
 * - The spread operator only copies one level deep.
 * - Nested arrays or nested objects are still copied of reference, meaning modifying a deeply nested item inside your copy will also alter the original object.
 * - For a completely independent deep copy, use native utilities like structuredClone().
 *
 *
 */

/* ===== 1. Working With Arrays ===== */
// The spread operator is heavily used to manipulate arrays without changing the source data.

// i) Copying an Array
// Creates a shallow copy of an array rather than passing a reference.
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
console.log(original); // [ 1, 2, 3 ]

// ii) Merging Arrays - also use concat method
// Combines multiple arrays into one seamless sequence.
const alpha = ["a", "b"];
const beta = ["c", "d"];
const merged = [...alpha, ...beta];
const concat = alpha.concat(beta);

console.log(merged); // [ 'a', 'b', 'c', 'd' ]
console.log(concat); // [ 'a', 'b', 'c', 'd' ]

/// iii) Adding Elements
// Inject values anywhere inside a new array creation.
const items = [2, 3];
const list = [1, ...items, 4];

console.log(list); // [1, 2, 3, 4]

/* ===== 2. Working With Objects ===== */
// You can use the spread operator to shallow clone or merge objects cleanly.

// i) Cloning Objects
// duplicates properties into a brand new object.
const user = { name: "alice", role: "Admin" };
const userClone = { ...user };

userClone.email = "alice@gmail.com";

console.log(userClone); // { name: 'alice', role: 'Admin', email: 'alice@gmail.com' }
console.log(user); // { name: 'alice', role: 'Admin' }

// ii) Merging and Overriding
// Combines properties; matching keys get overwritten by the last object spread.
const base = { power: 10, speed: 5 };
const boost = { speed: 12, stamina: 8 };
const hero = { ...base, ...boost };

console.log(hero); // { power: 10, speed: 12, stamina: 8 } here 1st, base speed override by 2nd, boost speed....if 3rd, any speed...so 2nd one is override by 3rd one

/* ===== 3. Function Arguments  ===== */
const coordinates = [10, 25, 4];
function drawPoint(x, y, z) {
  console.log(x, y, z); // 10, 25, 4
}

drawPoint(...coordinates); // equivalent to drawPoint(10, 25, 4)

// This is highly effective with math utilities like Math.max(...array) or Math.min(...array)
const scores = [45, 82, 91, 34];
const highestScore = Math.max(...scores); // Evaluates as Math.max(45, 82, 91, 34)

console.log(highestScore); // 91

/* ===== 4. Converting Strings to Characters ===== */
// Spreading a string splits it up into an array of individual character
const word = "JS";
const chars = [...word];
const split = word.split("");
const split2 = word.split(); // entire strings becomes single array item

console.log(chars); // [ 'J', 'S' ]
console.log(split); // [ 'J', 'S' ]
console.log(split2); // [ 'JS' ]

/**
 *
 * Rest operator (...)
 *
 * The rest operator in JavaScript uses three-dot syntax (...) to collect multiple elements and condense them into a single array or object. condense = ঘনীভূত
 *
 * It acts as a mechanism to gather the "rest" of any remaining values.
 *
 * Strict Syntax Rules
 * - Must be last: The rest operator must always be the final parameter or element in your list. Putting a trailing comma or parameter after it will trigger a SyntaxError.
 *
 * - Only one allowed: You cannot use multiple rest operators inside a single parameter list or destructuring pattern.
 *
 *
 */

// 1. Function Parameters
// The rest parameter allows a function to accept an unlimited number of arguments as a true array. It replaces the older, clunky arguments object.
function sum(...numbers) {
  console.log(numbers); // [ 1, 2, 3, 4 ]

  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 2. Array Destructuring
// You can extract specific items from an array and group all the leftover items into a brand new array.
// We used any name for array destructuring

const fruits = ["apple", "mango", "orange", "grape", "banana"];
const [first, second, ...restFruits] = fruits;

console.log(first); // 'apple'
console.log(second); // 'mango'
console.log(restFruits); // [ 'orange', 'grape', 'banana' ]

// 3. Object Destructuring
// You can extract specific properties from an object and pack the remaining key-value pairs into a separate object.
// extract = সজোরে টানিয়া বাহির করা, নির্যাস eliminate = অপসারিত করা, নিষ্কাশন করা Chosen or Selected = বাছাই করা
// We must use specific key name for object destructuring

const userProfile = { id: 101, username: "alice", role: "admin", age: 28 };
const { username, role, ...additionalInfo } = userProfile;

console.log(username); // 'alice'
console.log(role); // 'admin'
console.log(additionalInfo); // { id: 101, age: 28 }
