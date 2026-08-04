/**
 *
 * Object Literal
 *
 * An object literal in JavaScript is a comma-separated list of key-value pairs enclosed in curly brace {}.
 *
 * It is the simplest and most common way to create a JavaScript object directly in your code.
 *
 * Syntax:
 * const objectName = {
 *   key1: value1,
 *   key2: value2,
 *   key3: value3
 * };
 *
 *
 * Accessing Properties
 *
 * You can read or modify data inside an object literal using two types of notation:
 *
 * - Dot Notation: objectName.key (Best for standard, predictable property names)
 *
 * - Bracket Notation: objectName["key"] (Required if the key contains spaces, special characters, or is stored in a variable)
 *
 */

// Basic Syntax
const user = {
  name: "Alice", // Key: "name", Value: "Alice"
  age: 28, // Key: "age", Value: 28
  isAdmin: true, // Key: "isAdmin", Value: true
};

// Modern ES6+ Enhancements
// Several powerful shortcuts introduced to object literal syntax:

// 1. Property Shorthand: Skip repeating the name if the object key matches an existing variable name.
const age = 30;
const profile = { age }; // Equivalent to { age: age }
console.log(profile); // { age: 30 }

// 2. Method Shorthand: Drop the "function" keyword when adding functions to your object. short method syntax.
const calculator = {
  name: "dip",
  age: 27,

  // Clean method syntax - traditional function
  add(a, b) {
    return a + b;
  },

  // Arrow function method syntax
  divide: (a, b) => {
    console.log(this); // undefined

    return a / b;
  },
};

console.log(calculator.add(2, 3)); // 5

// Arrow functions do not have their own this context. If your add method ever needs to use other properties from the object (like this.name or this.age), it will return undefined. For simple math functions that only use arguments, it works perfectly.

console.log(calculator.divide(100, 10)); // 10

// Traditional ES5 syntax
const oldCalculator = {
  name: "dip",
  multiply: {
    a: 5,
    b: 6,
    add: function (a, b) {
      console.log(this); // { a: 5, b: 6, add: [Function: add] }

      return this.a * this.b;

      // return this.name; // undefined because it only access parent object and in this case, parent object = multiply, not oldCalculator
    },
  },
};

console.log(oldCalculator.multiply.add()); // 30

// when a function inside an object is called method.
// for both case, Scope & Context: Methods defined this way automatically get their own this context bound to the object (calculator), unlike arrow functions.

// 3. Computed Property Names: Use square brackets inside the literal to assign dynamic keys calculated at runtime.
const dynamicKey = "status";
const system = { [dynamicKey]: "active" }; // Creates { status: "active" }

console.log(system); // { status: 'active' }

/**
 *
 * Dot Notation vs. Bracket Notation
 *
 * - The main difference is that dot notation has strict naming rules, while bracket notation accepts any string value.
 *
 * Feature                 Dot Notation (obj.key)    Bracket Notation (obj["key"])
 * Spaces allowed?        ❌ No                      Yes
 *
 * Special characters?    ❌ Only _ and $            Yes (any character)
 *
 * Starts with number?   ❌ No                       Yes
 *
 * Can use variables?    ❌ No                       Yes
 *
 * _ is called underscore, low dash or low line
 * - is called hyphens
 * -- is called em dash
 */

const userProfile = {
  "first name": "John",
  "status-code": 200,
  "@twitter": "@handle",
};

// You cannot use dot notation (object.key) for these properties.
// console.log(userProfile."first name"); // SyntaxError: Unexpected string

// You must use square brackets (object["key"]) with the key name as a string.

// Reading values
console.log(userProfile["first name"]); // John
console.log(userProfile["status-code"]); // 200

// Changing value
userProfile["first name"] = "Deep";

// Using Variables as Keys
// You can create or access object keys dynamically using variables.
// If your key is stored inside a variable, bracket notation is also required.
// Pass the variable name inside the brackets without quotes.

// Reading values
const keyToRead = "first name";
console.log(userProfile[keyToRead]); // Deep

// Updating value
const keyToUpdate = "status-code";
userProfile[keyToUpdate] = 300;
console.log(userProfile[keyToUpdate]); // 300

// Creating dynamic keys inline (Computed Property Names)
// Wrap the variable in square brackets directly inside the object literal to assign the key dynamically.
const uniqueKey = "user id";
const value = 9876;

const account = {
  [uniqueKey]: value, // The key becomes "user id"
  type: "Premium",
};

console.log(account["user id"]); // 9876
console.log(account[uniqueKey]); // 9876

/**
 *
 * Object Literal vs JSON (JavaScript Object Notation)
 *
 * The main difference is that an object literal is a live JavaScript code structure, while JSON (JavaScript Object Notation) is a strict text-only data format.
 *
 * Key Differences
 * - Data Types: Object literals can hold functions, regex, and undefined. JSON only allows strings, numbers, booleans, null, arrays, and other objects.
 * - Syntax Strictness: JSON requires double quotes "" around all keys and string values. Object literals can use unquoted keys, single quotes, or backticks.
 * - Trailing Commas: Object literals allow a comma after the final property. JSON throws an error if a trailing comma is used.
 * - Execution: Object literals can execute logic dynamically at runtime. JSON is completely passive data.
 *
 * Conversion Methods
 * JavaScript provides built-in tools to convert between the two:
 * - JSON.stringify(): Converts a JavaScript object literal into a JSON text string.
 * - JSON.parse(): Converts a valid JSON text string into a live JavaScript object literal.
 *
 */
