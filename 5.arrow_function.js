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
 * An Arrow Function is a shorter syntax for writing functions.
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
 * Common Mistakes:
 * - ❌ Forgetting return
 * - ❌ Missing parentheses for multiple parameters
 *
 * Summary:
 * - Use => to create an arrow function.
 * - No parameters: () => {}
 * - One parameter: param => {}
 * - Multiple parameters: (a, b) => {}
 * - Use implicit return for a single expression: const add = (a, b) => a + b
 * - Wrap returned objects in parentheses: () => ({ name: "Sufian" })
 * - Arrow functions don't have their own this; they inherit it from the surrounding scope.
 *
 */

// Multiple parameters - Parentheses are required.
const add = (a, b) => {
  return a + b;
};

// Single parameter - Parentheses are optional (parentheses can be omitted).
// const double = x => x * 2;
const double = (x) => x * 2;

// No parameter - Use empty parentheses (parentheses are required).
const sayHello = () => "Hello world!";

// Implicit Return (Single Expression)
// If your function body contains only one expression, you can remove the curly braces {} and the return keyword. The value is returned automatically.

// Block body (explicit return) - Normal Return
const substrate = (a, b) => {
  return a - b;
};

// Expression body (implicit return)
const multiply = (a, b) => a * b;

// Note: To implicitly return an object literal, you must wrap it in parentheses so the compiler doesn't mistake the object's curly braces for a function block.

// Default Parameters
const greet = (name = "Guest") => {
  return `Hello ${name}`;
};

console.log(greet()); // Hello Guest
console.log(greet("Sufian")); // Hello Sufian

// Returning an Object - Wrap the object in parentheses.
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

/* ===== Practice Questions ===== */
// Write an arrow function that returns the square of a number.
const squareNum = (num) => console.log(`${num} square is ${num * num}`);
squareNum(10); // 10 square is 100

// Write an arrow function that checks if a number is positive.
// Here used isPositive for boolean data type
const isPositive = (num) => num > 0;

console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
console.log(isPositive(0)); // false

// Implicit Return: Since the function body is a single expression, the return keyword is omitted.
// Single Parameter: Parentheses around num are optional when there is only one parameter.
// Boolean Evaluation: The > (greater than) operator automatically resolves to true if the number is positive, and false if it is zero or negative.

const positiveNum = (num) => {
  if (num > 0) {
    console.log(`${num} is a Positive Integer`);
  } else {
    console.log(
      `${num === 0 ? `${num} is a Negative Number. Because 0 also falsy value in JS.` : `${num} is a Negative Number.`}`,
    );
  }
};

positiveNum(15);
positiveNum(0);
positiveNum(-5);

// Write an arrow function that returns the larger of two numbers.
// Using a Ternary Operator (Implicit Return)
const largeNum = (a, b) => (a > b ? a : b);
console.log(largeNum(10, 12)); // 12

//  Using Math.max (Implicit Return)
const getMax = (a, b) => Math.max(a, b);
console.log(getMax(42, 36)); // 42

// Using an If/Else Statement (Explicit Return)
// If you prefer a multi-line format with block curly braces, you must include the return keyword explicitly.
const regularMaxFunction = (a, b) => {
  if (a > b) {
    console.log(`${a} is greater then ${b}`);
  } else {
    console.log(`${a} is smaller then ${b}`);
  }
};

regularMaxFunction(-3, -1);
regularMaxFunction(-1, -3);

// Write an arrow function that takes an array of numbers and returns their sum.
const sumOfNum = (nums) => {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
};

console.log(sumOfNum([10, 20, 30]));

// Using reduce() (Implicit Return)
const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfArray([1, 2, 3, 4])); // 10

// Handling Empty Arrays Safely
const sumArray = (arr) =>
  arr
    .filter((num) => typeof num === "number")
    .reduce((sum, num) => sum + num, 0);

console.log(sumArray([5, "hello", 5])); // 10

//  Using a forEach Loop (Explicit Return)
const sumOfArr = (array) => {
  let total = 0;
  array.forEach((element) => (total += element));
  return total;
};

console.log(sumOfArr([10, 20, 30])); // 60

// Write an arrow function that takes a name and returns "Welcome, <name>!".
// Using String Concatenation
// const greetWelcome = (name = "Deep") => console.log("Welcome, " + name + "!");
// const greetWelcome = (name = "Deep") => console.log("Welcome,", name, "!");

// Handling Empty Inputs (Fallback)  Using Template Literals
const greetWelcome = (name) => console.log(`Welcome, ${name || "Guest"}!`);

greetWelcome("Sofian"); // Welcome, Sofian!
greetWelcome(); // Welcome, Guest!

// Convert these regular functions into arrow functions: multiply(a, b), isPrime(number), calculateDiscount(price, discount), reverseString(text), findLargest(arr)
const multiplyOfNum = (a, b) => a * b;
console.log(multiplyOfNum(9, 5)); // 45

// Whole numbers are a basic set of numbers that include zero and all positive counting numbers (0, 1, 2, 3, 4, ...). They do not include any fractions, decimals, or negative values.
// A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself.
const isPrime = (number) => {
  if (number <= 1) return "Prime number is greater than 1";

  for (let i = 2; i * i < number; i++) {
    if (number % i === 0)
      return `${number} is not Prime number. It is divided by ${i}.`;
  }

  return `${number} is a prime number.`;
};

console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(7));
console.log(isPrime(24));

// Modern Array Method Syntax (Single Line)
const isPrimeEvery = (num) =>
  num > 1 &&
  Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, i) => i + 2).every(
    (i) => num % i !== 0,
  );

// Explanation: length: Math.floor(4.79) - 1, length: 4 - 1 => 3
// (_, i) means index number start at 0 and 0 + 2 = [2, 3, 4]
// Array.from({length: 3 }, (_, i) => i = 0 + 2) => [2, 3, 4]

// The .every() method checks if all items in our generated array pass a specific test.
// [2, 3, 4] => 23 % 2 !== 0 => pass, then check 3 and finally 4, it pass the all index test return true; not more than index 4 like i = 5 or 6
// it fall the test then early return like false immediately, not check index 3, 4

console.log(isPrimeEvery(23)); // true
console.log(isPrimeEvery(20)); // false

// Calculate percentage of discount and extract final price
const calculateDiscount = (price, discount) => price - price * (discount / 100);
console.log(calculateDiscount(100, 20)); // 80
console.log(calculateDiscount(80, 20)); // 64

// Reverse a String
const reverseString = (text) => text.split("").reverse().join("");
console.log(reverseString("hello")); // Output: "olleh"

// Without built-in-method, it uses for loop
const reverseChar = (text) => {
  let reversed = "";

  // Its Speed / Performance = Fastest and Memory Usage = Low
  // Here add char to the end, thats why index start at last
  for (let i = text.length - 1; i >= 0; i++) {
    reversed += text[i];
  }

  // Its Speed / Performance = Moderate and Memory Usage = Low
  // for (const char of text) {
  //   // Instead of adding the new letter to the end of our string, it places the new letter at the front.
  //   // 1st Loop (char = 'c'): 'c' + ""  => reversed becomes "c"
  //   // 2nd Loop (char = 'o'): 'o' + "c" => reversed becomes "oc"
  //   reversed = char + reversed;
  //   // reversed += char; // coding
  // }

  // Its Speed / Performance = Moderate and Memory Usage = Low
  // for (let i = 0; i < text.length; i++) {
  //   // Manually force to 'c' + ''
  //   reversed = text[i] + reversed;
  //   // reversed += text[i]; // coding
  // }

  return reversed;

  //  Its Speed / Performance = Slowest and Memory Usage = High (Creates an extra array)
  // let reservedArray = [];
  // for (let i = 0; i < text.length; i++) {
  //   // Loop 1 (i = 0, char = 'c'): Array becomes ['c']
  //   // Loop 2 (i = 1, char = 'o'): 'o' goes to the front. Array becomes ['o', 'c']
  //   // Loop 6 (i = 5, char = 'g'): 'g' goes to the front. Array becomes ['g', 'n', 'i', 'd', 'o', 'c']
  //   reservedArray.unshift(text[i]);
  // }
  // // Final reservedArray = ['g', 'n', 'i', 'd', 'o', 'c']
  // // return reservedArray.join(); // g,n,i,d,o,c
  // // return reservedArray.join(" - "); // g - n - i - d - o - c
  // // return reservedArray.join(" "); // g n i d o c
  // return reservedArray.join(""); // gnidoc
};

console.log(reverseChar("coding")); // Output: "gnidoc"

// Find the largest number
const findLargest = (arr) => Math.max(...arr);
console.log(findLargest([10, 5, 23, 8])); // Output: 23

// Not used built-in-method - used for loop
const findLarge = (arr) => {
  let largest = arr[0];

  // It technically checks arr[0] against itself on the very first iteration.
  // for (const num of arr) {
  //   console.log(num);

  //   if (num > largest) {
  //     largest = num;
  //   }
  // }

  // Here start with index = 1 because of assume or suppose 1st element (zero index) of the array is largest among all numbers.
  for (let i = 1; i < arr.length; i++) {
    console.log(i, arr[i]);

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

console.log(findLarge([10, 5, 23, 84])); // Output: 23
