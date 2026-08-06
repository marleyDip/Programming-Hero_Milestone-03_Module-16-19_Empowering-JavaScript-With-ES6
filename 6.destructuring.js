// extract = সজোরে টানিয়া বাহির করা, নির্যাস
// eliminate = অপসারিত করা, নিষ্কাশন করা
// Chosen or Selected = বাছাই করা

// exact = একেবারে নির্ভুল
// appropriate = ঠিকঠিক, সঠিক, যথাযথ

// distinct = স্বতন্ত্র, অতিস্পষ্ট
// implicit = অন্তর্নিহিত
// explicit = স্পষ্ট

// Destructuring = পুনর্গঠন
// Destructure = কাঠামো ভেঙে ফেলুন

// Destructuring mostly used in Object.
// It is not used much in arrays. We do not need sequentially destructure.

/**
 *
 * Feature	             Arrays	                     Objects
 * Basic destructuring	 const [a, b] = arr	         const { name, age } = obj
 * Skip values	         const [a, , c] = arr	       Not applicable
 * Default values	       const [a = 1] = arr	       const { city = "NY" } = obj
 * Rename variables	     Not common	                 const { name: fullName } = obj
 * Rest operator	       const [a, ...rest] = arr	   const { name, ...rest } = obj
 * Nested destructuring	 Yes	                       Yes
 * Function parameters	 Yes	                       Yes
 *
 * Destructuring makes your code shorter, more readable, and is widely used in modern JavaScript, especially with APIs, React props, function parameters, and ES6+ codebases.
 *
 */

/* ===== 1. Destructuring the Array ===== */
const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]); // 10
console.log(numbers[3]); // 40

// Extract value from an array by traditional way
const ten = numbers[0];
const twenty = numbers[1];

console.log(ten, twenty); // 10 20

// Now used modern ES6 version to destructuring elements from an array
const [, , thirty, , fifty] = numbers;
console.log(thirty, fifty); // 30 50

// const [thirty, fifty] = numbers;
// console.log(thirty, fifty); // 10 20

// If we do not use ", , ," then array return 1st and 2nd element because array maintain serial or position wise by index number (0 1 2 3 4 5 ....). So do no fetch those element are skip by used comma ",".

/* ===== 2. Destructuring for Object  ===== */
const student = {
  name: "dip",
  age: 27,
  " roll": 384,
};

console.log(student.name, student.age); // dip 27

// Traditional way to extract property or key value from an object.
const name = student.name;
const roll = student[" roll"];
const studentId = " roll";

console.log(name, roll, student[studentId]); // dip 384 384

// Here, used dot (.) notation best for standard and predictable property names. Example: objectName.key (exception its handle _ and $)

// Bracket ([]) notation required if the key contains space, special characters, ot is stored in a variable. Example: objectName["key"] or objectName[key] (dynamic variable)

// Now used modern ES6 version to destructuring elements from an array
// const { name } = student; // Cannot redeclare block-scoped variable 'name'. we declare a name variable so we need to

// const { studentName } = student; // undefine

// Rename Variables name instead of key name variable
const { age, name: studentName } = student;

console.log(studentName);
// console.log(name); // ReferenceError: name is not defined

// Array maintain by index position.
// Object does not maintain by index position. It maintain by key or property name. Always we fetch Object value by exact or appropriate object key name.

/* ===== 2.5 Destructuring for Nested Object  ===== */
const studentMarks = {
  name: "akand",
  age: 26,
  roll: 384,
  marks: {
    physics: 95,
    philosophy: 91,
    math: 44,
  },
};

const mathMarks = studentMarks.marks.math;
console.log(mathMarks); // 44

const allMarks = studentMarks.marks;
console.log(allMarks); // { physics: 95, philosophy: 91, math: 44 }

// Destructure marks key value
const {
  marks: { philosophy, physics: myPhysics },
} = studentMarks;

// console.log(marks); // ReferenceError: marks is not defined
console.log(philosophy); // 91
// console.log(physics); // ReferenceError: physics is not defined
console.log(myPhysics); // 95

const { marks } = studentMarks;
console.log(marks); // { physics: 95, philosophy: 91, math: 44 }

/* ==== 3. Function Parameter Destructuring ==== */

// Here in function parameters, we only destructuring name and age value by property or key name.
// name and age variable name exact or appropriate same name as object key
function displayStudentInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`); // akand is 26 years old.
}

displayStudentInfo(studentMarks); // Here, we pass full object "studentMarks" properties or key-value pairs and nested object as a argument in "displayStudentInfo" function

// Another way, the variable name on the left must match the keys inside the object. Means We assign to new variable name to a particular property which is exact same name as "student" object key.
function displayStudent({ name: studentName, age: studentAge }) {
  console.log(`${studentName} is ${studentAge} years old.`); // dip is 27 years old.
}

displayStudent(student);

/**
 *
 * Destructuring
 *
 * Destructuring assignment is a JavaScript syntax introduced in ES6 that allows you to unpack values from arrays or properties from objects directly into distinct variables.
 *
 * - It does not modified the original data structure, making your code significantly cleaner and faster to read.
 *
 * Destructuring in JavaScript is a feature that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way.
 *
 * Destructuring is a JavaScript syntax that lets you unpack values from arrays or extract properties from objects into separate variables.
 *
 *
 * Object Destructuring:
 * - Object destructuring extracts data using property names.
 * - The variable names on the left must match the keys inside the object.
 *
 * Nested Destructuring:
 * - You can extract values buried deep inside nested objects.
 *
 * Array Destructuring:
 * - Array destructuring extracts data based on the index position.
 * - You can use any variable names you want.
 *
 * Function Parameter Destructuring:
 * - You can destructure an object directly within a function's signature, a technique heavily relied on in modern web frameworks.
 *
 *
 * Advanced Patterns
 * The Rest Syntax (...):
 * - You can unpack a few items and collect the remaining data into a brand new array or object using the rest pattern.
 *
 * 1. Array Destructuring With Rest Operator:
 * - You can extract specific items from an array and group all the leftover items into a brand new array.
 * - We used any variable name for array destructuring and rest operator
 *
 *
 * 2. Object Destructuring With Rest Operator:
 * - You can extract specific properties from an object and pack the remaining key-value pairs into a separate object.
 * We must use variable name specific same as object property or key for object destructuring & any valid variable name for rest operator.
 *
 * 3. Function Parameters With Rest Operator:
 * - The rest parameter allows a function to accept an unlimited number of arguments as a true array.
 * - It replaces the older, clunky arguments object.
 *
 */

/* ===== Object Destructuring ===== */
// Object destructuring extracts data using property names. The variable names on the left must match the keys inside the object.
const user = { userName: "Alex", userAge: 28, country: "Bangladesh" };

// Basic destructuring
const { userName, userAge } = user;
console.log(userName); // "Alex"

// Assigning to a new variable name (aliasing) - Rename Variables
const { country: userCountry } = user;
console.log(userCountry); // "Bangladesh"

// Setting default values
const { role = "Guest" } = user;
console.log(role); // "Guest" (falls back to default since property doesn't exist)

/* ===== Nested Destructuring ===== */
// You can extract values buried deep inside nested objects.
const localData = { id: 101, metadata: { tags: ["tech", "js"] } };
const {
  metadata: {
    tags: [firstTag],
  },
} = localData;

console.log(firstTag); // "tech"

const studentPro = {
  name: "John",
  marks: {
    math: 90,
    science: 95,
  },
};

const {
  name: studentProName,
  marks: { math, science },
} = studentPro;

console.log(studentProName); // John
console.log(math); // 90
console.log(science); // 95

/* ===== Array Destructuring ===== */
// Array destructuring extracts data based on the index position. You can use any variable names you want.

// Instead of accessing elements by index: Using destructuring
const colors = ["red", "green", "blue"];

// Basic destructuring
const [firstColor, secondColor] = colors;
console.log(firstColor); // "red"

// Skipping values using commas - Skip Elements
const [, , thirdColor] = colors;
console.log(thirdColor); // "blue"

// Default Values
const color = ["yellow"];
const [primary, secondary = "sky"] = color;

console.log(primary); // yellow
console.log(secondary); // sky

// Nested Arrays
const num = [1, [2, 3]];
const [x, [y, z]] = num;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

// Swapping variables seamlessly without a temporary variable
let a = 1,
  b = 2;

[a, b] = [b, a];
console.log(a); // 2

/* ===== The Rest Syntax (...) ===== */
// You can destructure an object directly within a function's signature, a technique heavily relied on in modern web frameworks.

// function displayProfile({ name, age }) { // undefined
function displayProfile({ userName, userAge }) {
  console.log(`${userName} is ${userAge} years old.`); // Alex is 28 years old.
}
displayProfile(user);

/* ===== Function Parameter Destructuring ===== */
// The Rest Syntax (...)
// You can unpack a few items and collect the remaining data into a brand new array or object using the rest pattern.

// You can extract specific items from an array and group all the leftover items into a brand new array.
const number = [1, 2, 3, 4, 5];
const [one, two, ...rest] = number;
console.log(rest); // [3, 4, 5]

// You can extract specific properties from an object and pack the remaining key-value pairs into a separate object.
const { ...additionalInfo } = user;
console.log(additionalInfo); // { userName: 'Alex', userAge: 28, country: 'Bangladesh' }

function sum(...numbers) {
  console.log(numbers); // [ 1, 2, 3, 4 ]

  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Destructuring in Arrow Function Parameters
const person = {
  name: "Marley Dip",
  age: 35,
};

const displayPerson = ({ name, age }) =>
  console.log(`${name} is ${age} years old.`); // Marley Dip is 35 years old.

displayPerson(person);

// Rename Variable
const displayPersonRenameValue = ({ name: personName, age: personAge }) =>
  console.log(`${personName} is ${personAge} years old.`); // Marley Dip is 35 years old.

displayPersonRenameValue(person);

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
