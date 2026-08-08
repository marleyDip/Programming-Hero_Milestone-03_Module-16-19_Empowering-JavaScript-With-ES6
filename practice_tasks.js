// task 1 - Scope Detective
function describeDeclaration(keyword) {
  // Using if...else if...else
  if (keyword === "var") {
    return "Can redeclare, can reassign";
  } else if (keyword === "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword === "const") {
    return "Cannot redeclare, cannot reassign";
  } else {
    return "Invalid";
  }

  // Using switch
  //   switch (keyword) {
  //     case "var":
  //       return "Can redeclare, can reassign";
  //     case "let":
  //       return "Cannot redeclare, can reassign";
  //     case "const":
  //       return "Cannot redeclare, cannot reassign";
  //     default:
  //       return "Invalid";
  //   }
}

console.log(describeDeclaration("var")); // Can redeclare, can reassign
console.log(describeDeclaration("let")); // Cannot redeclare, can reassign
console.log(describeDeclaration("const")); // Cannot redeclare, cannot reassign
console.log(describeDeclaration("int")); // Invalid

// Using modern ES6 features
const describeDeclarationES6 = (keyword) => {
  // Using Object Destructuring/Lookup with Nullish Coalescing Operator (??) - it's cleaner and easier to extend if another keyword is added later.
  const declarations = {
    var: "Can redeclare, can reassign",
    let: "Cannot redeclare, can reassign",
    const: "Cannot redeclare, cannot reassign",
  };

  // Access object properties with dynamic key - function parameter (bracket notation)
  // If left side falsy value is nullish (null, undefined), return right side - is the ?? rule
  return declarations[keyword] ?? "Invalid";

  // Using Ternary Operator
  //   return keyword === "var"
  //     ? "Can redeclare, can reassign"
  //     : keyword === "let"
  //       ? "Cannot redeclare, can reassign"
  //       : keyword === "const"
  //         ? "Cannot redeclare, cannot reassign"
  //         : "Invalid";
};

console.log(describeDeclarationES6("var")); // Can redeclare, can reassign
console.log(describeDeclarationES6("let")); // Cannot redeclare, can reassign
console.log(describeDeclarationES6("const")); // Cannot redeclare, cannot reassign
console.log(describeDeclarationES6("int")); // Invalid

// task 2 - Movie Ticket Booking (ES6 default parameters + template literals + typeof validation)
function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  const isInvalid =
    typeof movie !== "string" ||
    !Number.isFinite(seats) ||
    !Number.isFinite(pricePerSeat) ||
    seats < 0 ||
    pricePerSeat < 0;

  if (isInvalid) {
    return "Invalid";
  }

  const total = seats * pricePerSeat;
  return `${movie}: ${seats} ${seats > 1 ? "seat(s)" : "seat"}, Total ৳${total}`;
}

console.log(bookTicket("Dune")); // Valid
console.log(bookTicket("Dune", 3)); // Valid
console.log(bookTicket("Dune", 2, 450)); // Valid
console.log(bookTicket("Dune", 0)); // Valid
console.log(bookTicket("Dune", 0, 0)); // Valid
console.log(bookTicket("Dune", 1.5)); // Valid

console.log(bookTicket("Dune", -1)); // Invalid
console.log(bookTicket("Dune", 2, -100)); // Invalid
console.log(bookTicket(123, 2)); // Invalid
console.log(bookTicket(null)); // Invalid
console.log(bookTicket(true)); // Invalid
console.log(bookTicket([])); // Invalid
console.log(bookTicket({})); // Invalid
console.log(bookTicket("Dune", NaN)); // Invalid
console.log(bookTicket("Dune", Infinity)); // Invalid
console.log(bookTicket("Dune", 2, Infinity)); // Invalid

const bookTicketArrow = (movie, seats = 1, pricePerSeat = 300) =>
  typeof movie !== "string" ||
  typeof seats !== "number" ||
  typeof pricePerSeat !== "number" ||
  seats < 0 ||
  pricePerSeat < 0
    ? "Invalid"
    : `${movie}: ${seats} ${seats > 1 ? "seat(s)" : "seat"}, Total ৳${seats * pricePerSeat}`;

console.log(bookTicketArrow("Dune")); // Dune: 1 seat(s), Total ৳300
console.log(bookTicketArrow("Avatar", 2)); // Avatar: 2 seat(s), Total ৳600
console.log(bookTicketArrow("Inception", 3, 500)); // Inception: 3 seat(s), Total ৳1500

console.log(bookTicketArrow("Dune", 0)); // Dune: 0 seat(s), Total ৳0
console.log(bookTicketArrow("Dune", 0, 500)); // Dune: 0 seat(s), Total ৳0
console.log(bookTicketArrow("Dune", 5, 0)); // Dune: 5 seat(s), Total ৳0
console.log(bookTicketArrow("Dune", 0, 0)); // Dune: 0 seat(s), Total ৳0

console.log(bookTicketArrow("Dune", 1.5)); // Dune: 1.5 seat(s), Total ৳450
console.log(bookTicketArrow("Dune", 2.5, 400)); // Dune: 2.5 seat(s), Total ৳1000
console.log(bookTicketArrow("Dune", 3, 99.99)); // Dune: 3 seat(s), Total ৳299.96999999999997

console.log(bookTicket("")); //  : 1 seat(s), Total ৳300

console.log(bookTicketArrow("Dune", -1)); // Invalid
console.log(bookTicketArrow("Dune", -5, 300)); // Invalid
console.log(bookTicketArrow("Dune", 2, -100)); // Invalid
console.log(bookTicketArrow("Dune", -2, -300)); // Invalid

console.log(bookTicketArrow(123)); // Invalid
console.log(bookTicketArrow(500, 2)); // Invalid

console.log(bookTicketArrow(true)); // Invalid
console.log(bookTicketArrow(false)); // Invalid

console.log(bookTicketArrow([])); // Invalid
console.log(bookTicketArrow(["Dune"])); // Invalids

console.log(bookTicketArrow({ name: "Dune" })); // Invalid

console.log(bookTicketArrow(function () {})); // Invalid

console.log(bookTicketArrow(null)); // Invalid
console.log(bookTicketArrow(undefined)); // Invalid

// task 3 - Receipt Generator - create multi-line string (use template literals instead of string concatenation), check is it Array, and array.join() method to convert every element to a array into single string
function generateReceipt(customerName, items, total) {
  if (!Array.isArray(items) || items.length === 0) {
    return "Invalid";
  }

  // Joins elements with a comma and space automatically
  // const bookList = items.join(", ");
  // ["Pen", "Book", "Pencil"] = Pen, Book, Pencil

  //   let book = "";
  //   for (let item of items) {
  //     book += item + ",";
  //   }

  // console.log(book.length);
  // book = book.slice(0, -1);

  return `Receipt for ${customerName} \nItems:${items.join(",")} \nTotal:${total}`;

  // return `Receipt for ${customerName} \nItems:${book} \nTotal:${total}`;

  // Concatenate string
  return (
    "Receipt for " +
    customerName +
    "\nItems: " +
    items.join(", ") +
    "\nTotal: ৳" +
    total
  );
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
// Receipt for Rakib
// Items: Pen, Book
// Total: ৳150

console.log(generateReceipt("Sadia", ["Milk"], 60));
// Receipt for Sadia
// Items: Milk
// Total: ৳60

console.log(generateReceipt("Tanvir", [], 0));
// Invalid

console.log(generateReceipt("Rakib", ["Pen"], 100));
// Valid

console.log(generateReceipt("Rakib", ["Pen", "Book", "Bag"], 500)); // Valid
console.log(generateReceipt("Rakib", [], 100)); // Invalid
console.log(generateReceipt("Rakib", "Pen", 100)); // Invalid
console.log(generateReceipt("Rakib", null, 100)); // Invalid
console.log(generateReceipt("Rakib", undefined, 100)); // Invalid
console.log(generateReceipt("Rakib", {}, 100)); // Invalid
console.log(generateReceipt("Rakib", 123, 100)); // Invalid

// task 4 - BMI Calculator (Arrow Refactor) - Used 0 and negative return invalid, Number(), toFixed()
const calculateBMI = (weight, height) => {
  if (weight <= 0 || height <= 0) {
    return "Invalid";
  }

  const calculateBMI = weight / (height * height);

  // toFixed() gives a string with exactly 2 decimal places:
  // 22.857142857142858.toFixed(2); // "22.86"
  // Used Number() to convert string into a number
  return Number(calculateBMI.toFixed(2));
};

console.log(calculateBMI(70, 1.75)); // 22.86
console.log(calculateBMI(50, 1.6)); // 19.53
console.log(calculateBMI(60, -1.7)); // Invalid

console.log(calculateBMI(0, 1.75)); // Invalid
console.log(calculateBMI(70, 0)); // Invalid
console.log(calculateBMI(-70, 1.75)); // Invalid
console.log(calculateBMI(70, -1.75)); // Invalid
console.log(calculateBMI(-70, -1.75)); // Invalid

// task 5 - Inventory Merge & Max Score - spread operator to merge two array (also used concat), Math.max() to extract max score.

// function mergeInventory(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//     return "Invalid";
//   }

//   return [...arr1, ...arr2];
// }

// function highestScore(scores) {
//   if (!Array.isArray(scores)) {
//     return "Invalid";
//   }

//   return Math.max(...scores);
// }

const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  const mergeInventory = [...arr1, ...arr2];
  return mergeInventory;
};

console.log(mergeInventory([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeInventory([], [])); // []
console.log(mergeInventory([], [1, 2])); // [1, 2]
console.log(mergeInventory([1, 2], [])); // [1, 2]

console.log(mergeInventory("123", [4, 5])); // Invalid
console.log(mergeInventory([1, 2], "345")); // Invalid
console.log(mergeInventory(null, [1, 2])); // Invalid
console.log(mergeInventory([1, 2], null)); // Invalid
console.log(mergeInventory(123, 456)); // Invalid

// Math.max(...[3, 7, 2, 9, 4]); = Math.max(3, 7, 2, 9, 4);
// Math.max(...[]) = -Infinity; The problem only says Invalid if the parameter isn't an array. It doesn't say an empty array is invalid, so technically [] gives -Infinity.
const highestScore = (scores) =>
  !Array.isArray(scores) ? "Invalid" : Math.max(...scores);

console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore("3,7,2"));
console.log(highestScore([3, 7, 2, 9, 4])); // 9
console.log(highestScore([100])); // 100
console.log(highestScore([-5, -2, -10])); // -2
console.log(highestScore([0])); // 0
console.log(highestScore([])); // -Infinity

console.log(highestScore("3,7,2")); // Invalid
console.log(highestScore(null)); // Invalid
console.log(highestScore(undefined)); // Invalid
console.log(highestScore({})); // Invalid
console.log(highestScore(123)); // Invalid

// task 6 - User Profile Extractor - ES6 Nested Object Destructuring + Array Destructuring + Default Value + Rename.
function extractUserInfo(userObj) {
  if (!userObj || !userObj.user || !userObj.user.name) {
    return "Invalid";
  }

  // The original property is: name but but we're creating a variable called: userName - rename (works by the exact object key name).
  // "name: userName" means Take name key from the object and store it in userName.
  // firstHobby = "nothing yet" --> That's Array Destructuring (works by the array index number) + Default Value.
  const {
    user: { name: userName, age: userAge },
    hobbies: [firstHobby = "nothing yet"],
  } = userObj;

  return `${userName} ${userAge} likes ${firstHobby}`;
}

console.log(
  extractUserInfo({
    user: {
      name: "Sadia",
      age: 22,
    },
    hobbies: ["reading", "coding"],
  }),
); // Sadia (22) likes reading

console.log(
  extractUserInfo({
    user: {
      name: "Rafi",
      age: 19,
    },
    hobbies: [],
  }),
); // Rafi (19) likes nothing yet

console.log(
  extractUserInfo({
    user: {
      age: 30,
    },
    hobbies: [],
  }),
); // Invalid

console.log(
  extractUserInfo({
    hobbies: ["coding"],
  }),
); // Invalid

console.log(extractUserInfo(null)); // Invalid

// task 7 - Inventory Object Manager - Object Methods
function manageInventoryObject(obj, action) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Object.getPrototypeOf(obj) !== Object.prototype
  ) {
    return "Invalid";
  }

  if (action === "keys") {
    return Object.keys(obj);
  }

  if (action === "values") {
    return Object.values(obj);
  }

  if (action === "entries") {
    return Object.entries(obj);
  }

  if (action.startsWith("delete:")) {
    const propName = action.slice(7);
    const newObj = { ...obj };

    delete newObj[propName];

    return newObj;
  }

  if (action === "seal") {
    return Object.seal(obj);
  }

  if (action === "freeze") {
    return Object.freeze(obj);
  }

  return "Invalid";
}

console.log("Object Method");
const test = { a: 1, b: 2, c: 3 };

console.log(manageInventoryObject(test, "keys")); // ["a", "b", "c"]

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "values")); // [1, 2, 3]

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries")); // [["a", 1], ["b", 2], ["c", 3]]

console.log(manageInventoryObject(test, "delete:c")); // { a: 1, b: 2 }
console.log(test);

const product = {
  name: "Laptop",
  price: 50000,
};

const result = manageInventoryObject(product, "seal");
console.log(result);
console.log(Object.isSealed(result)); // true

const result2 = manageInventoryObject(product, "freeze");
console.log(result2);
console.log(Object.isFrozen(result2)); // true

console.log(manageInventoryObject({ a: 1, b: 2 }, "shrink")); // Invalid
console.log(manageInventoryObject([1, 2, 3], "keys")); // Invalid
console.log(manageInventoryObject(null, "keys")); // Invalid
console.log(manageInventoryObject("hello", "keys")); // Invalid
console.log(manageInventoryObject(123, "keys")); // Invalid
console.log(manageInventoryObject(new Date(), "keys")); // Invalid
console.log(manageInventoryObject(new Map(), "keys")); // Invalid

// task 8 - Object Looper - for...in + for...of + Object.entries() + Array Destructuring
const printObjectDetails = (obj, loopType) => {
  if (loopType === "forin") {
    const result = [];

    for (const key in obj) {
      console.log(key, obj[key]); // fruit Mango, price 50
      result.push(`${key}: ${obj[key]}`);
    }

    return result;
  }

  if (loopType === "forofentries") {
    const result = [];

    for (let keyValue of Object.entries(obj)) {
      const [key, value] = keyValue;
      console.log(key, value); // fruit Mango, price 50
      result.push(`${key}: ${value}`);
    }

    return result;
  }

  // Object.entries() + map() + Array Destructuring ([key, value]) + Arrow Function () => {}  + Template Literal (``).
  //   traditional
  //     function ([key, value]) {
  //       return `${key}: ${value}`;
  //     }

  /* if (loopType === "entriesDestructure") {
    return Object.entries(obj).map(([key, value]) => {
      return `${key}: ${value}`;
    });

    // Implicit return
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
  } */

  // map() goes through every element of the array and creates a new array.
  if (loopType === "entriesDestructure") {
    // converts the object into an array of key-value pairs.
    const entries = Object.entries(obj);
    console.log(entries); // [ [ 'fruit', 'Mango' ], [ 'price', 50 ] ]

    const result = entries.map((item) => {
      console.log(item); // [ 'fruit', 'Mango' ] [ 'price', 50 ]

      // Array Destructuring
      // const [key, value] = item;

      const key = item[0];
      console.log(key); // fruit Mango

      const value = item[1];
      console.log(value); // price 50

      // Template Literal, first iteration: key = "fruit", value = "Mango"; Second iteration: key = "price", value = "50"; final: "fruit: Mango", "price: 50"
      return `${key}: ${value}`;
    });

    // Final map() returns: [ "fruit: Mango", "price: 50" ]
    return result;
  }

  return "Invalid";
};

console.log(printObjectDetails({ fruit: "Mango", price: 50 }, "forin")); // ['fruit: Mango', 'price: 50']

console.log(printObjectDetails({ fruit: "Mango", price: 50 }, "forofentries")); // ['fruit: Mango', 'price: 50']

console.log(
  printObjectDetails({ fruit: "Mango", price: 50 }, "entriesDestructure"),
); // ['fruit: Mango', 'price: 50']

console.log(printObjectDetails({}, "forin")); // []

console.log(printObjectDetails({}, "loopThrough")); // Invalid

// task 9 - ES6 Refactor Challenge
// ES5 — refactor this fully to ES6:
var calculateTotal = function (items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return "Total: " + total + " Taka";
};

// Its magic
// const refactorToES6 = (items) => {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += items[i].price;
//   }
//   return `Total: ${total} Taka`;
// };

const refactorToES6 = (items) => {
  // for loop → reduce()
  // Here initial value, sum = 0; current value, item.price = 100; now sum = 100; current value = 250; then it 350
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return `Total: ${total} Taka`;
};

console.log(refactorToES6([{ price: 100 }, { price: 250 }]));
console.log(refactorToES6([{ price: 80 }]));

// In JavaScript, reduce() loops through an array and squashes all the items down into one single value, such as a single number, string, or object.

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // Logic here
// }, initialValue);

// Summing an Array of Numbers
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, total) => {
  return sum + total;
}, 0); // 0 is the initialValue

console.log(total); // 100

// Grouping Objects by a Property
// You can reduce an array into an object to group related pieces of data together.
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
];

const groupedByAge = people.reduce((grouped, person) => {
  const age = person.age;

  // console.log(grouped); // {} {} {}

  if (!grouped[age]) {
    grouped[age] = [];
  }
  // console.log(grouped); // { '21': [] }

  grouped[age].push(person.name);
  // console.log(grouped); // { '21': [ 'Alice' ] }

  return grouped;
}, {}); // An empty object is the initialValue

console.log(groupedByAge); // Output: { '21': ['Alice', 'Charlie'], '25': ['Bob'] }

// After create key : []
// { '21': [] }
// { '21': [], '25': [] }
// { '21': [], '25': [] }

// Final array push
// { '21': [ 'Alice' ] }
// { '21': [ 'Alice' ], '25': [ 'Bob' ] }
// { '21': [ 'Alice', 'Charlie' ], '25': [ 'Bob' ] }

//  Flattening an Array of Arrays
// Transform a multi-dimensional array into a single-level array.
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArray = nestedArray.reduce(
  (flat, current) => flat.concat(current),
  [], // An empty array is the initialValue
);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// Counting Occurrences of Items
// You can count how many times an item appears inside an array.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounts = fruits.reduce((countMap, fruit) => {
  countMap[fruit] = (countMap[fruit] || 0) + 1;

  return countMap;
}, {});

console.log(fruitCounts); // { apple: 3, banana: 2, orange: 1 }
