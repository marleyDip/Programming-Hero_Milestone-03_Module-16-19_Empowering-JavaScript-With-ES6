// Traditional function, shortcut version arrow function; its most useable one, used in react, next.js
function sayGreet(name) {
  return `Hello ${name}, Good Morning.`;
}

console.log(sayGreet("Dip")); // 'Hello Dip, Good Morning.'

// Syntax of Arrow Function
// const functionName = () => {
//   // return "something"
// };

// Single statement - Implicit return - JS automatically understand that return this single statement ->> () => single statement

// for single parameter -> parenthesis or 1st bracket is optional ->> direct parameter name without ()
// for empty and more than one (multiple) parameter -> parenthesis is required, (), (a, b, c, ...)

// const sayHi = name => `Hello ${name}`;
const sayHi = (name) => `Hello ${name}`;
console.log(sayHi("akand"));

// No Parameter, must give empty parenthesis
const sayHiNoParameter = () => "Hi";
console.log(sayHiNoParameter()); // hi

// Multi-line statement
const sumFirstThenMultiplyByThree = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};

console.log(sumFirstThenMultiplyByThree(5, 5)); // 30

const sumFirstThenMultiplyByThreeSingleStatement = (a, b) => (a + b) * 3;
console.log(sumFirstThenMultiplyByThreeSingleStatement(10, 10)); // 60

// Difference between Traditional Function and Arrow Function - percepts of "this" reserve word or keyword

// this keyword
console.log(this); // global object {}

// When a function inside a object property, is called Method
// Here, this refers to parent object -> this = student object
// For Traditional Function, we easily find this => current object; here this has own value
// But in Arrow Function this does not have own value, it gives {}
const student = {
  name: "dip",
  age: 27,

  // old, ES5 feature traditional function method
  showName: function () {
    console.log(this); // { name: 'dip', age: 27, showName: [Function: showName] }

    console.log(student); // { name: 'dip', age: 27, showName: [Function: showName] }

    // return student.name; // dip
    // return this.name; // dip

    return `Name: ${this.name}. Age: ${this.age}`; // Name: dip. Age: 27
  },

  // ES6 modern feature traditional function method
  showNameAge() {
    return `My Name is ${this.name}. I am ${this.age} years old.`; // My Name is dip. I am 27 years old.
  },

  // arrow function method
  showAge: () => {
    console.log(this); // {}
    // return `Age: ${this.age}`; // Age: undefined

    console.log(student); // { name: 'dip', age: 27, showName: [Function: showName], showAge: [Function: showAge] }
    return `Age: ${student.age}`; // Age: 27
  },
};

console.log(student.showName());
console.log(student.showNameAge());
console.log(student.showAge());

// Another difference is Hoisting
// Call Traditional Function before declaration, its returns output
// If call arrow function before initialization, its gives "ReferenceError"

console.log(myself()); // I am Md Sofian Hasan.
function myself() {
  return "I am Md Sofian Hasan.";
}

// console.log(arrowMyself()); // ReferenceError: Cannot access 'arrowMyself' before initialization
// let arrowMyself = () => "I am Md Sofian Hasan.";
const arrowMyself = () => "I am Md Sofian Hasan.";
console.log(arrowMyself()); // I am Md Sofian Hasan.

// console.log(arrowMyselfWithVar); // undefined, Hoisting var
// console.log(arrowMyselfWithVar()); // TypeError: arrowMyselfWithVar is not a function; because its like undefined()
var arrowMyselfWithVar = () => "I am Md Sofian Hasan.";
console.log(arrowMyselfWithVar()); // I am Md Sofian Hasan.

/**
 *
 * Arrow Function
 *
 * An arrow function is a compact alternative to a traditional function expression introduced in ES6 (ECMAScript 2015).
 *
 * They provide a shorter syntax and change how the this keyword behaves inside the function.
 *
 * Basic Syntax
 * Arrow function use the => symbol instead of function keyword.
 *
 * () => statement / Logic / Expression / block body
 *
 *
 * When to Use Arrow Functions:
 * - Array methods like map(), filter(), find(), reduce()
 * - Callback functions
 * - React components and event handlers (very common)
 *
 */

// Multiple parameters
const add = (a, b) => {
  return a + b;
};

// Single parameter (parentheses can be omitted)
// const double = x => x * 2;
const double = (x) => x * 2;

// No parameters (parentheses are required)
const sayHello = () => "Hello world!";

// Implicit Return
// If your function body contains only one expression, you can remove the curly braces {} and the return keyword. The value is returned automatically.

// Block body (explicit return)
const substrate = (a, b) => {
  return a - b;
};

// Expression body (implicit return)
const multiply = (a, b) => a * b;

// Note: To implicitly return an object literal, you must wrap it in parentheses so the compiler doesn't mistake the object's curly braces for a function block.

// Returning an Object
const getUser = (name) => ({ user: name });

console.log(getUser("Its Me!")); // { user: 'Its Me!' }
// console.log(getUser.user("Its Me!")); // TypeError: getUser.user is not a function

/**
 *
 * Key Differences from Regular Functions
 *
 * Arrow Functions:
 *
 * this Binding - Lexical (Inherited from the surrounding parent scope).
 * Hoisting - Function expressions are not hoisted.
 * Constructors - Cannot be called with new (throws TypeError).
 * arguments Object - Do not have their own arguments array-like object.
 * Generators - Cannot use yield within the body.
 *
 *
 * Regular Functions:
 *
 * this Binding - Dynamic (Depends entirely on how the function is called).
 * Hoisting - Function declarations are hoisted.
 * Constructors - Can be used as constructors to build objects.
 * arguments Object - Have access to the local arguments object.
 * Generators - Can be used as generator functions.
 *
 */

// Returning an Object
// Wrap the object in parentheses.
const createUser = (name, age) => ({
  name: name,
  age: age,
});

console.log(createUser("Sofian", 22)); // { name: 'Sofian', age: 22 }

// Without the parentheses:
// This does not return the object because JavaScript treats {} as a function body.

/* const createUser1 = (name, age) => {
    name: name, // here ; expected instead of ,
    age: age
}; */

const isEven = (number) => number % 2 === 0;
console.log(isEven(15)); // false

const area = (length, width) => length * width;
console.log(area(10, 5)); // 50

const max = (a, b) => (a > b ? a : b);
console.log(max(10, 15)); // 15

const upperCase = (text) => text.toUpperCase();
console.log(upperCase("javascript")); // JAVASCRIPT

// When to Use Arrow Functions

// Array methods like map(), filter(), find(), reduce()
// Callback functions
// React components and event handlers (very common)

const num = [1, 2, 3, 4];

const doubled = num.map((n) => n * 2);
console.log(doubled); // [ 2, 4, 6, 8 ]

setTimeout(() => {
  console.log("Hello");
}, 2000); // print Hello after 2s
