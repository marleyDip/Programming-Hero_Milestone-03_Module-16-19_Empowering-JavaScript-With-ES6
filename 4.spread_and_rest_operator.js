/**
 *
 * Spread (...) vs Rest (...)
 *
 * Although both use the same syntax (...), they do different jobs.
 * - Operator	 Purpose	        Think of it as
 * - Spread	   Expands values	  Unpack
 * - Rest	     Collects values	Pack
 *
 * Remember:
 * - Spread = Expand 📦➡️📄
 * - Rest = Collect 📄➡️📦
 *
 * When Can We Use Them?
 * Spread Operator:
 * - Copy arrays
 * - Copy objects
 * - Merge arrays
 * - Merge objects
 * - Find max/min
 * - Pass array elements as function arguments
 *
 * Rest Operator:
 * - Accept unlimited function arguments
 * - Collect remaining array elements
 * - Collect remaining object properties
 *
 * Feature	    Spread (...)	           Rest (...)
 * Purpose	    Expand values	           Collect values
 * Arrays	      const copy = [...arr]	   const [first, ...rest] = arr
 * Objects	    const copy = { ...obj }	 const { name, ...others } = obj
 * Functions	  myFunc(...arr) 	         function myFunc(...args)
 * Max	        Math.max(...numbers)	   Not applicable
 *
 */

// Spread vs Rest
// Spread Operator
const nums = [1, 2, 3];
console.log(...nums); // 1 2 3

// Rest Operator
// const sums = (num) => console.log(num); // 1
const sums = (...num) => {
  console.log(num); // [ 1, 2, 3 ]
};
sums(1, 2, 3);

let numbers = [10, 20, 30, 40, 50];

console.log(numbers); // [10, 20, 30, 40, 50]

// Instead of printing the array:
console.log(...numbers); // 10 20 30 40 50
console.log(10, 20, 30, 40, 50); // 10 20 30 40 50
console.log([...numbers]); // [ 10, 20, 30, 40, 50 ]

// Math.max
let maxNumber = Math.max(100, 200, 300, 1000, 50, 670);
console.log(maxNumber); // 100

// let maxNumber2 = Math.max(numbers); // [1, 2] NaN, Because Math.max() expects separate numbers, not an array.
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
 * The spread operator expands an array or object into individual elements or properties.
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

// Add in Middle
const num = [1, 2, 5];
const newArray = [...num.slice(0, 2), 3, 4, ...num.slice(2)];
console.log(newArray); // [ 1, 2, 3, 4, 5 ]

/* ===== 2. Working With Objects ===== */
// You can use the spread operator to shallow clone or merge objects cleanly.

// i) Cloning Objects
// duplicates properties into a brand new object.
const user = { name: "alice", role: "Admin" };
const userClone = { ...user };

user.email = "alice@gmail.com";

console.log(user); // { name: 'alice', role: 'Admin', email: 'alice@gmail.com' }
console.log(userClone); // { name: 'alice', role: 'Admin' }

// Add new property
const addNewPropertyUser = { ...user, country: "Bangladesh" };
console.log(addNewPropertyUser); // { name: 'alice', role: 'Admin', email: 'alice@gmail.com', country: 'Bangladesh' }

// Update property
const updateUser = { ...user, name: "Sofian" };
console.log(updateUser); // { name: 'Sofian', role: 'Admin', email: 'alice@gmail.com' }

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

const person = {
  name: "Marley Dip",
  age: 35,
};

// To update an object without altering the original using destructuring, you can use the object spread operator (...) inside a new object literal.

// Destructure the original properties and override the age
const update = { ...person, age: 40 };

console.log(person); // { name: 'Marley Dip', age: 35 } (Unchanged)
console.log(update); // { name: 'Marley Dip', age: 40 } (Updated copy)

// Doing it inside a function
// If you want to keep using your updatePerson function format, you can destructure the properties in the function body and return a new object.

const updatePerson = (originalObject, newAge) => {
  // Destructures all original fields, then overwrites age
  return { ...originalObject, age: newAge };
};

const nextYearPerson = updatePerson(person, 45);

console.log(nextYearPerson); // { name: 'Marley Dip', age: 45 }
console.log(person); // { name: 'Marley Dip', age: 35 }

/**
 *
 * Rest operator (...)
 *
 * The rest operator collects multiple values into one array or object.
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
// We used any variable name for array destructuring and rest operator

const fruits = ["apple", "mango", "orange", "grape", "banana"];
const [first, second, ...restFruits] = fruits;

console.log(first); // 'apple'
console.log(second); // 'mango'
console.log(restFruits); // [ 'orange', 'grape', 'banana' ]

// 3. Object Destructuring
// You can extract specific properties from an object and pack the remaining key-value pairs into a separate object.
// We must use variable name specific same as object property or key for object destructuring & any valid variable name for rest operator

const userProfile = { id: 101, username: "alice", role: "admin", age: 28 };
const { username, role, ...additionalInfo } = userProfile;

console.log(username); // 'alice'
console.log(role); // 'admin'
console.log(additionalInfo); // { id: 101, age: 28 }

/**
 *
 * Common Interview Questions
 *
 * Q1. Why does Math.max(numbers) return NaN?
 *
 * const numbers = [10,20,30];
 * Math.max(numbers);
 *
 * Answer: Math.max() expects separate arguments, not an array. Use Math.max(...numbers).
 *
 * Q2. What's the difference between Spread and Rest?
 *
 * Spread	Operator:
 * - Expands values
 * - Used while creating arrays/objects or passing arguments
 * - Converts array → individual elements
 *
 * Rest Operator:
 * - Collects values
 * - Used in function parameters and destructuring
 * - Converts individual values → array
 *
 * Q3. Does spread make a deep copy?
 * - No. It creates a shallow copy.
 *
 */

const userInfo = {
  name: "Sofian",
  address: {
    city: "Dhaka",
  },
};

const copyInfo = { ...userInfo };

// Update copyInfo but it alter the original object because of spread operator creates a shallow copy.
// It only copies one level deep and nested array and nested object are still copied of reference
copyInfo.address.city = "Rajshahi";

console.log(userInfo.address.city); // Rajshahi, not Dhaka

/* ===== Practice Problems ===== */
// Copy an array using the spread operator and add one new element at the end.
const arr = [101, 102, "Deep"];

const copyArr = [...arr, "Akand"];
console.log(copyArr); // [ 101, 102, 'Deep', 'Akand' ]

// Merge two arrays of your favorite programming languages.
const language1 = ["HTML", "CSS", "JavaScript"];
const language2 = ["React", "Node", "MongoDB"];

console.log(...language1, ...language2); // HTML CSS JavaScript React Node MongoDB
console.log([...language1, ...language2]); // [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB' ]
console.log([...language2, ...language1]); // [ 'React', 'Node', 'MongoDB', 'HTML', 'CSS', 'JavaScript' ]

// Find the maximum and minimum numbers from an array using Math.max() and Math.min().
const numb = [10, 100, 1000, 10000, 100000];

console.log(Math.max(...numb)); // 100000
console.log(Math.min(...numb)); // 10

console.log(Math.max(numb)); // NaN, expect separated argument or unpack number, not an array.
console.log(Math.min(numb)); // NaN

// Copy an object and update one property without changing the original.
const studentLife = {
  bsc: "ICE",
  institution: "bauet",
  passingYear: 2023,
};

const copyStudentLife = { ...studentLife, passingYear: 2024 };

console.log(copyStudentLife); // { bsc: 'ICE', institution: 'bauet', passingYear: 2024 }
console.log(studentLife); // { bsc: 'ICE', institution: 'bauet', passingYear: 2023 }

// Write an arrow function multiply(...numbers) that returns the product of all numbers passed to it.
const multiply = (...numbers) =>
  numbers.reduce((accumulator, current) => accumulator * current, 1);

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(1.5, 2)); // 3
console.log(multiply(7)); // 7
console.log(multiply()); // 1

// Given const [first, ...rest] = [5, 10, 15, 20];, what are the values of first and rest?
const [first1, ...rest] = [5, 10, 15, 20];
console.log(first1); // 5
console.log(rest); // [ 10, 15, 20 ]

// Given const { name, ...info } = { name: "Sufian", age: 22, city: "Dhaka" };, what are the values of name and info?
const { name, ...info } = { name: "Sufian", age: 22, city: "Dhaka" };
console.log(name); // Sufian
console.log(info); // { age: 22, city: 'Dhaka' }

// Warning: Nested Objects
// The spread operator only performs a shallow copy. If your object contains nested objects or arrays, they will still point to the same memory reference.

// For deep nesting, use structuredClone():
const userPro = { name: "Bob", location: { city: "London", zip: 12345 } };

// Safely clones all deep layers
const deepCopy = structuredClone(userPro);
deepCopy.location.city = "Manchester";

// 'user.location.city' remains "London"

console.log(userPro); // { name: 'Bob', location: { city: 'London', zip: 12345 } }
console.log(deepCopy); // { name: 'Bob', location: { city: 'Manchester', zip: 12345 } }
