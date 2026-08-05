/**
 *
 * Template Literals - Template Strings - String Literals
 *
 * Template strings (officially called Template Literals) are string literals enclosed in backticks (`) instead of single or double quotes, allowing you to embed variables, perform expression, and create multi-line strings easily.
 *
 * embed = দৃঢ়ভাবে নিহিত করা
 *
 * Summary of Rules:
 * 1. Always wrap the text in backticks (`).
 * 2. Place any dynamic JS logic or variables within ${}.
 * You can use single quotes (') or double quotes (") inside your template string without escaping them.
 *
 * escape \ => backslash (\) is the escape character used to convert special characters into literal string characters or to introduce special formatting commands.
 *
 * // Escaping double quotes
 * let quote = "He said, \"JavaScript is awesome!\"";
 *
 * // Escaping single quotes
 * let message = 'It\'s a beautiful day for coding.';
 *
 *
 * Common Mistakes:
 * - ❌ Using Single Quotes Instead of Backticks
 * - ${} only works inside backticks.
 * - ❌ Forgetting ${}
 *
 * Why Use Template Strings?
 * - It's shorter, cleaner, and easier to read.
 *
 */

let myName = "Deep";
let cost = 500;
let quantity = 5;

// let location = "Dhaka
// multi-line not possible
// line 1
// "

let location = `Sirajganj, Rajshahi
line 1
line 2
line 3
`;

const finalTotal = cost * quantity;

let oldMessage = "Hello, " + myName + ". Your bill is: " + cost + " per item.";
console.log(oldMessage);

let newMessage = `Hello, ${myName}. Your bill is: ${cost} per item.`;
console.log(newMessage);

let expressionMessage = `Hello, ${myName}. Your total bill for ${quantity} item: ${cost * quantity}.`;
console.log(expressionMessage);

// Real life scenario - used old way default parameter
function admissionConfirmationMail(name, amount) {
  let message = `\nHello ${name || "student"},
              Your payment is successfully.
              Your paid amount is: ${amount}.`;
  return message;
}

console.log(admissionConfirmationMail("Dip", 4000));
console.log(admissionConfirmationMail("Akand", 4500));
console.log(admissionConfirmationMail("", 5000));
console.log(admissionConfirmationMail(undefined, 2500));

// They provide three primary benefits over traditional JS strings:

/* ===== 1. String Interpolation ===== */
// You can inject variables directly into your string using the ${variable} syntax. This replaces messy plus-sign (+) concatenations.

const name = "Alice";
const age = 25;

// Old way (Concatenations)
const oldGreeting =
  "Hello, my name is " + name + " and I am " + age + " years old.";

console.log("\nUsing old way - Concatenations:", oldGreeting);

// New way (Template Strings)
const newGreeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log("Using new way - Template literals:", newGreeting);

/* ===== 2.Expression Evaluation ===== */
// You are not limited to variable inside the ${} syntax. You can run basic math, call function, or write logical expressions right inside the string.

const price = 10;
const tax = 0.05;

// Performing math inside the string
const total = `Total cost: $${price * (1 + tax).toFixed(2)}`;
console.log("\nUsing expression - performing math inside the string =>", total);

// Calling a function inside the string
function uppercase(text) {
  return text.toUpperCase();
}

const shout = `He screamed, "${uppercase("watch out")}"`;
console.log(
  "Using expression - calling a function inside the string =>",
  shout,
);

const greet = (name) => `Hello, ${name}`;
console.log(`${greet("Sofian")}!`); // Hello, Sofian!

// Object Properties
const user = {
  name: "Sofian",
  age: 22,
};

console.log(`${user.name} is ${user.age} years old.`);

// Array Elements
const fruits = ["Apple", "Banana", "Mango"];

console.log(`My favorite fruit is ${fruits[1]}.`);

/* ===== 3. Multi-line Strings ===== */
// With standard quotes, adding a new line requires escape characters like \n. Template literals allow you to break lines directly inside the code without breaking the syntax.

// Old way
const oldHTML = "<div>\n" + "  <h1>Hello</h1>\n" + "</div>";

console.log("\nUsing old way - Multi-line Strings");
console.log(oldHTML);

// New way
const newHTML = `<div>
  <h1>Hello</h1>
</div>
`;

console.log("Using new way - Multi-line Strings");
console.log(newHTML);

// Before ES6, writing multi-line strings required \n.
// Without Template Strings
const text = "Hello\nWelcome to JavaScript\nHappy Coding!";
console.log(text);
// Hello
// Welcome to JavaScript
// Happy Coding!

// With Template Strings. Notice that line breaks are preserved automatically.
const textTemplate = `
Hello
Welcome to JavaScript
Happy Coding!
`;

console.log(textTemplate);

// Hello
// Welcome to JavaScript
// Happy Coding!

/* ===== Real-World Example ===== */
//  HTML Template
// This is very common when generating HTML dynamically.
const userName = "Md. Sofian Hasan";
const userAge = 27;

const html = `
<div class="card">
  <h2>Name: ${userName}</h2>
  <p>Age: ${userAge}</p>
</div>
`;

console.log(html);

/* <div class="card">
  <h2>Name: Md. Sofian Hasan</h2>
  <p>Age: 27</p>
</div> */

// Combining with Loops
const languages = ["HTML", "CSS", "JavaScript"];

for (const language of languages) {
  console.log(`I love ${language}`);
  console.log("I love" + " " + language);
  console.log("I love", language);
  // console.log("I love " + language);
}

// I love HTML
// I love CSS
// I love JavaScript

// Combining with Ternary Operator
const myAge = 40;

console.log(`You are ${myAge >= 18 ? "an Adult" : "a Minor"}`);

// Combining with Arrow Functions
const square = (number) => `${number} square is ${number * number}`;

console.log(square(7));

/* ===== Practice Problems ===== */
// Create variables name and country, then print: "My name is Sufian and I live in Bangladesh." using a template string.
const myname = "Sufian";
const myCountry = "Bangladesh";
console.log(`My name is ${myname} and I live in ${myCountry}.`); // My name is Sufian and I live in Bangladesh.

// Create variables price = 800 and discount = 120. Print the final price using ${}.
const sell = 800;
const discount = 120;

console.log(`Final price: ${sell - discount}.`); // Final price: 680.

//Write an arrow function that returns Hello, ${name}!.
const sayWelcome = (name) => `Hello, ${name}`;
console.log(`${sayWelcome("Deep")}!`); // Hello, Deep!

// Create an object: Print: "Rahim scored 92 marks." using a template string.
const student = {
  name: "Rahim",
  marks: 92,
};
console.log(`${student.name} scored ${student.marks} marks.`); // Rahim scored 92 marks.

// Create an array: Print: "My favorite color is Green."
const colors = ["Red", "Green", "Blue"];
console.log(`My favorite color is ${colors[1]}.`); // My favorite color is Green.

// Create a multi-line address using a template string.
const address = {
  street: "123 Innovation Way",
  suite: "Suite 400",
  city: "Tech City",
  postcode: "12345",
};

const formattedAddress = `${address.street}
${address.suite}
${address.city}
${address.postcode}
`;

console.log(formattedAddress);
/* 123 Innovation Way
Suite 400
Tech City
12345 */

// Build this HTML using template strings:
const developerName = "Sufian";
const position = "Web Developer";

const htmlDynamic = `<div class="profile">
  <h2>${developerName}</h2>
  <p>${position}</p>
</div>
`;

console.log(htmlDynamic);

/* <div class="profile">
  <h2>Sufian</h2>
  <p>Web Developer</p>
</div> */
