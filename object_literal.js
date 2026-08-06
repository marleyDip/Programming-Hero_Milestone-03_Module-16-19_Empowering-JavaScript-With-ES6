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
 * Nested Object
 *
 * You can create a nested object in JavaScript by defining an object as a property inside another object using object literal notation. "{ }"
 *
 * - When we say "an object inside another object," the word "another" refers to the outer object or container object, which is commonly called the parent object.
 *
 * To put it simply:
 * - The Parent Object (Outer): The main object that contains everything.
 * - The Child/Nested Object (Inner): The object that lives inside one of the parent object's properties.
 *
 * In this example:
 * - car is the parent object.
 * - engine is an object itself, but because it is stored inside the car object as a property, car is considered "another object" (the parent) relative to engine.
 *
 * "An object as a property inside another object using object literal notation" কথাটির অর্থ হলো— সেকেন্ড ব্র্যাকেট {} (curly braces) ব্যবহার করে সরাসরি কোনো অবজেক্ট তৈরি করার সময়, তার ভেতরে একটি প্রপার্টি বা বৈশিষ্ট্যের মান হিসেবে আরেকটি সম্পূর্ণ অবজেক্ট বসানো। প্রোগ্রামিংয়ের ভাষায় একে নেস্টেড অবজেক্ট (Nested Object) বলা হয়।
 *
 * মূল ধারণা ও ব্যাখ্যা:
 * - অবজেক্ট লিটারেল নোটেশন (Object Literal Notation): কোডে সরাসরি সেকেন্ড ব্র্যাকেট {} দিয়ে কী-ভ্যালু (key-value) জোড়ায় অবজেক্ট লেখার নিয়ম।
 *
 * - অন্য অবজেক্টের ভেতরে প্রপার্টি (Object as a property): প্রধান অবজেক্টের কোনো একটি কী-এর মান (value) হিসেবে শুধু সাধারণ ডেটা (যেমন স্ট্রিং বা নম্বর) না দিয়ে আরেকটি অবজেক্ট ব্যবহার করা।
 *
 * 1. Literal Notation (Static)
 * - Define everything all at once using curly braces {}.
 *
 * 2. Dot or Bracket Notation (Dynamic)
 * - Create an empty outer object first, then add the nested layers step-by-step.
 *
 * 3. Using Variables
 * - You can create separate objects first and then plug them into a parent container.
 *
 * Safe navigation (Optional Chaining):
 * - Use user.address?.city to safely read nested properties without crashing if address happens to be undefined
 *
 */

/* ===== Nested Object ===== */
// You can create a nested object in JavaScript by defining an object as a property inside another object using object literal notation.

// This is the PARENT object (the "another" object)
const car = {
  brand: "Tesla",
  model: "Model S",

  // This property holds a NESTED object (an object inside the parent) - (an object as a property)
  engine: {
    type: "Electric",
    horsepower: 670,
    isLucid: false,
  },
};

// In this example: car is the parent object.
// engine is an object itself, but because it is stored inside the car object as a property, car is considered "another object" (the parent) relative to engine.

// এখানে address হলো একটি অবজেক্ট, যা person নামক আরেকটি অবজেক্টের ভেতরে প্রপার্টি হিসেবে আছে।
const person = {
  name: "রহিম",
  age: 25,
  address: {
    // এটি প্রধান অবজেক্টের ভেতরে আরেকটি অবজেক্ট (প্রপার্টি)
    city: "ঢাকা",
    country: "বাংলাদেশ",
  },
};

// 1. Literal Notation (Static)
// Define everything all at once using curly braces {}.
const company = {
  brand: "TechCorp",
  departments: {
    engineering: {
      teamSize: 45,
      lead: "Sarah",
    },
    marketing: {
      teamSize: 12,
      lead: "James",
    },
  },
};

// 2. Dot or Bracket Notation (Dynamic)
// Create an empty outer object first, then add the nested layers step-by-step.

// Step 1: Create the parent
const carData = {};

// Step 2: Assign an object to a property
carData.specifications = {};

// Step 3: Add properties to the nested object
carData.specifications.engine = "V8";
carData.specifications.hp = 450;

// Alternative: Using bracket notation for dynamic keys
const keyName = "features";
carData[keyName] = { autopilot: true };

console.log(carData); // { specifications: { engine: 'V8', hp: 450 }, features: { autopilot: true } }

// 3. Using Variables
// You can create separate objects first and then plug them into a parent container.
const physicalStats = { height: "180cm", weight: "75kg" };

const athlete = {
  name: "Jordan",
  sport: "Basketball",
  stats: physicalStats, // Nesting the predefined object
};

// How to Access the Data
// Dot notation: user.address.city outputs "New York".
// Bracket notation: user["address"]["city"] outputs "New York".
// Safe navigation (Optional Chaining): Use user.address?.city to safely read nested properties without crashing if address happens to be undefined.

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
