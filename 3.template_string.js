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
