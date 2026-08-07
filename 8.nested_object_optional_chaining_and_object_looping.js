/**
 *
 * Nested Object, Optional Chaining (?.) & Object Looping
 *
 * - These three topics are used constantly in modern JavaScript, especially when working with APIs, React, and Node.js
 *
 *
 * 1. Nested Objects
 * => A nested object is an object that contains another object as one of its properties.
 *
 * - defining an object as a property inside another object using object literal notation.
 * - Here, the word "another" refers to the outer object or container object, which is commonly called the parent object.
 *
 * To put it simply:
 * - The Parent Object (Outer): The main object that contains everything.
 * - The Child/Nested Object (Inner): The object that lives inside one of the parent object's properties.
 *
 * Syntax:
 * const object = {
 *   key1: value;
 *   key2: {
 *     nestedKey: value
 *   }
 * }
 *
 * i. Access Nested Properties
 * - Use the dot (.) operator.
 * - Bracket Notation
 *
 * ii. Update Nested Properties
 * iii. Add New Nested Property
 * iv. Delete Nested Property
 *
 *
 *
 * 2. Optional Chaining (?.)
 * => Optional chaining lets you safely access nested properties.
 * - If a property doesn't exist, JavaScript returns undefined instead of throwing an error.
 * - If the value before the ?. operator is nullish (null or undefined), the entire expression immediately stops executing - this is called short-circuiting-and returns undefined.
 *
 * Syntax: object.key?.nestedKey
 *
 * Traditional Syntax: object.key && object.key.nestedKey
 *
 * i. Accessing Nested Object Properties
 * ii. Accessing Arrays and Dynamic Properties
 * iii. Calling Optional Functions
 *
 * Combining with the Nullish Coalescing Operator (??)
 * - Optional chaining is frequently paired with the nullish coalescing operator (??) to provide fallback fallback default values whenever a link in the chain is missing.
 *
 *
 * Vital Behavior Constraints:
 * - Invalid for Assignments: You cannot use optional chaining on the left side of an assignment operator.
 * let object = {};
 * object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
 *
 * - Root Declarations: The root-level variable itself must be declared. If myVariable was never created using let, const, or var, running myVariable?.prop will throw a ReferenceError.
 * - Falsy vs Nullish: It ignores other falsy values like empty strings "", 0, or false. Only null and undefined trigger the safety fallback mechanism.
 *
 *
 *
 *
 * 3. Object Looping
 * - Unlike arrays, objects cannot be looped over directly with for...of.
 * - Instead, use Object.keys(), Object.values(), or Object.entries().
 *
 * Using for...in
 * - Loops through the object's keys.
 *
 * Comparison
 * Method	          Returns	              Best For
 * for...in	          Keys	                  Simple object iteration
 * Object.keys()	  Array of keys	          Keys only
 * Object.values()	  Array of values	      Values only
 * Object.entries()	  Array of [key, value]	  Keys and values together
 *
 *
 *
 * Common Interview Questions:
 * Q1. What is optional chaining?
 * => A feature (?.) that safely accesses nested properties without throwing an error if an intermediate property is null or undefined.
 *
 * - To solve this undefined, we used Nullish Coalescing Operator (??)
 * - Syntax: null or undefined ?? access right side value.
 * - If left side value is null or undefined (falsy value), then access right side value.
 *
 * Q2. What is the difference between . and ?.?
 * object.key.nestedKey
 * - Throws an error if key doesn't exist.
 *
 * object.key?.nestedKey
 * - Returns undefined instead of throwing an error.
 *
 * - If the value before the ?. operator is nullish (null or undefined), the entire expression immediately stops executing - this is called short-circuiting-and returns undefined.
 *
 * Q3. Can we use for...of directly on an object?
 * - ❌ No.
 *
 * const user = {
 *   name: "Sufian"
 * };
 *
 * for (const item of user) {
 * }
 *
 * This throws a TypeError because plain objects are not iterable.
 *
 * Instead use:
 * - Object.keys(user)
 * - Object.values(user)
 * - Object.entries(user)
 *
 *
 *
 * Summary:
 * Topic	                 Purpose
 * Nested Object	         Store objects inside objects
 * Optional Chaining (?.)	 Safely access nested properties
 * for...in	                 Loop through object keys
 * Object.keys()	         Get all keys
 * Object.values()	         Get all values
 * Object.entries()	         Get key-value pairs
 *
 *
 */

/* 1. Nested Objects --> A nested object is an object that contains another object as one of its properties. */

// Syntax
/* const object = {
  key1: value,
  key2: {
    nestedKey: value,
  },
}; */

const user = {
  name: "Sufian",
  age: 22,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user); // { name: 'Sufian', age: 22, address: { city: 'Dhaka', country: 'Bangladesh' } }

/* i. Access Nested Properties */

// Use the dot (.) operator.
console.log(user.address.city); // Dhaka
console.log(user.address.country); // Bangladesh

// Bracket Notation
console.log(user["address"]); // { city: 'Dhaka', country: 'Bangladesh' }
console.log(user["address"]["city"]); // Dhaka
console.log(user["address"]["country"]); // Bangladesh

const dynamicKey = "address";
console.log(user[dynamicKey]); // { city: 'Dhaka', country: 'Bangladesh' }

/* ii. Update Nested Properties */

// user.address.city = "Rajshahi";
user[dynamicKey].city = "Rajshahi";

console.log(user); // { name: 'Sufian', age: 22, address: { city: 'Rajshahi', country: 'Bangladesh' } }

/* iii. Add New Nested Property */

// user.address.zipcode = 1207;
user[dynamicKey].zipcode = 1207;

console.log(user); // { name: 'Sufian', age: 22, address: { city: 'Rajshahi', country: 'Bangladesh', zipcode: 1207 } }

/* iv. Delete Nested Property */

// delete user.address.country;
delete user[dynamicKey].country;

console.log(user); // { name: 'Sufian', age: 22, address: { city: 'Rajshahi', zipcode: 1207 } }

/* Deeply Nested Object */
const company = {
  name: "Programming Hero",
  departments: {
    web: {
      frontend: {
        mentor: "Jhankar Mahbub",
      },
    },
  },
};

console.log(company.departments.web.frontend.mentor); // Jhankar Mahbub

/* 2. Optional Chaining (?.) - Optional chaining lets you safely access nested properties. If a property doesn't exist, JavaScript returns undefined instead of throwing an error. */

/* i. Accessing Nested Object Properties - Without optional chaining, checking deeply nested values requires verbose logic to prevent crashes. */
const userInfo = {
  name: "Alice",
  address: { city: "Paris" },
};

// Traditional verbose way
const legacyCity = userInfo.address && userInfo.address.city;
console.log(legacyCity); // Paris

console.log(
  "Traditional verbose way:",
  userInfo.address && userInfo.address.zipcode,
); // Traditional verbose way: undefined

// Modern optional chaining way
const city = userInfo.address?.city; // Returns "Paris"
const zipcode = userInfo.address?.zipcode; // Returns undefined
const country = userInfo.location?.country; // Returns undefined safely (doesn't crash)

// Without Optional Chaining
const userPro = {
  name: "Md Sofian Hasan",
};

console.log(userPro.address); // undefined
// console.log(userPro.address.city); // TypeError: Cannot read properties of undefined (reading 'city')

// With Optional Chaining, here it found undefined and stop the executing immediately and return undefined - userPro.address?.
console.log(userPro.address?.city); // undefined, No error occurs

// If the value before the ?. operator is nullish (null or undefined), the entire expression immediately stops executing - this is called short-circuiting-and returns undefined.

// Real-World Example - Imagine you receive data from an API.
const response = {
  data: {
    user: {
      name: "Sufian",
    },
  },
};

console.log(response.data.user?.name); // Sufian
console.log(response.data.user?.age); // undefined

// Multiple Levels
const userProfile = {};

// console.log(user.profile.address?.city); // TypeError: Cannot read properties of undefined (reading 'address')
console.log(user.profile?.address.city); // undefined
console.log(user.profile?.address?.city); // undefined

/* ii. Accessing Arrays and Dynamic Properties (Optional Chaining with Arrays) - You must place a dot before the opening bracket (?.[]) when dealing with array indexes or dynamic variable evaluation. */
const usersList = [{ name: "Bob" }, { name: "Charlie" }];
const emptyList = null;

console.log(usersList?.[0]?.name); // "Bob"
console.log(emptyList?.[0]?.name); // undefined (safely bypassed)

// console.log(emptyList[0]?.name); // TypeError: Cannot read properties of null (reading '0')
// console.log(emptyList[0]?.name); // TypeError: Cannot read properties of undefined (reading '0')

const propertyName = "name";
console.log(usersList[0]?.[propertyName]); // "Bob"

/* iii. Calling Optional Functions (Optional Chaining with Functions) - You can use ?.() to invoke callback functions or methods that might be missing or unconfigured. */
const UIController = {
  // Modern method
  render() {
    return "Rendering...";
  },
};

// Call existing method
console.log(UIController.render?.()); // "Rendering..."

// Call missing method safely
console.log(UIController.update?.()); // undefined

const user2 = {
  // old method
  greet: function () {
    return "Hello";
  },
};

console.log(user2.greet?.()); // Hello
console.log(user2.sayBye?.()); // undefined
console.log(user2.sayBye?.() ?? "Hi"); // Hi

// Combining with the Nullish Coalescing Operator (??)
// Optional chaining is frequently paired with the nullish coalescing operator (??) to provide fallback fallback default values whenever a link in the chain is missing.

config = { settings: { theme: null } };

// Combines the safe check with a fallback value
const userTheme = config.settings?.theme ?? "default-dark";
console.log(userTheme); // "default-dark"

/* 3. Object Looping - Unlike arrays, objects cannot be looped over directly with for...of. Instead, use Object.keys(), Object.values(), or Object.entries(). */

// Using for...in - Loops through the object's keys.
const userForIn = {
  name: "Deep",
  age: 27,
  country: "Bangladesh",
};

console.log(userForIn["age"]); // 27

// Get Keys
for (const key in userForIn) {
  console.log(key); // "name" "age" "country"
}

// Get Values
for (const key in userForIn) {
  console.log(userForIn[key]); // Deep 27 Bangladesh
}

// Get Both Key and Value
for (const key in userForIn) {
  console.log(`${key}: ${userForIn[key]}`);
}
// name: Deep
// age: 27
// country: Bangladesh

// Using Object.keys()
const keys = Object.keys(userForIn);
console.log(keys); // [ 'name', 'age', 'country' ]

for (const key of keys) {
  console.log(key); // name age country
}

// Using Object.values()
const values = Object.values(userForIn);
console.log(values); // [ 'Deep', 27, 'Bangladesh' ]

// Here, 1st value = 'Deep', 2nd value = 27, 3rd value = 'Bangladesh'
for (const value of values) {
  console.log(value); // Deep 27 Bangladesh
}

// Using Object.entries() - This is the cleanest way to get both keys and values.
console.log(Object.entries(userForIn)); // [ [ 'name', 'Deep' ], [ 'age', 27 ], [ 'country', 'Bangladesh' ] ]

// Here, [key, value] =  [ 'name', 'Deep' ]
for (const [key, value] of Object.entries(userForIn)) {
  console.log(`${key}: ${value}`);
}
// name: Deep
// age: 27
// country: Bangladesh

// Real-World Example
const product = {
  id: 101,
  name: "Laptop",
  price: 65000,
  stock: true,
};

console.log(Object.entries(product)); // [ [ 'id', 101 ], [ 'name', 'Laptop' ], [ 'price', 65000 ], [ 'stock', true ] ]

for (const [key, value] of Object.entries(product)) {
  console.log(`${key} : ${value}`);
}
// id : 101
// name : Laptop
// price : 65000
// stock : true

/* ===== Practice Problems ===== */
const student = {
  name: "Rahim",
  marks: {
    math: 90,
    english: 85,
  },
};

console.log(student.marks.math); // 90
console.log(student["marks"]["math"]); // 90

// Object Destructuring
const {
  marks: { math: mathematics },
} = student;

// const { math: mathematics } = student.marks;

// console.log(math); // ReferenceError: math is not defined
console.log(mathematics); // 90

// Object Destructuring with rest operator
const { name, ...marksInfo } = student;

console.log(name); // Rahim
console.log(marksInfo); // { marks: { math: 90, english: 85 } }

// const {
//   marks: { math, english },
// } = marksInfo;

// const { math, english } = marksInfo.marks;

const math = marksInfo.marks?.math;
const english = marksInfo.marks?.english;

console.log(math); // 90
console.log(english); // 85

const {
  name: myName,
  marks: { ...nestedMarks },
} = student;

console.log(myName); // Rahim
console.log(nestedMarks); // { math: 90, english: 85 }

const { english: eng } = nestedMarks;
console.log(eng); // 85

// Loop Through an Object
const book = {
  title: "JavaScript",
  author: "John",
  price: 500,
};

// Using for..in
for (const key in book) {
  console.log(key);

  console.log(`${key}: ${book[key]}`);
  // console.log(key + ": " + book[key]);
  // console.log(key, ":", book[key]);
}

// Using for...of
for (const [key, value] of Object.entries(book)) {
  console.log(key);
  console.log(value);
  console.log(`${key}: ${value}`);
}

// Count Object Properties - Write a function that returns the number of properties in an object.
const person = {
  name: "Rahim",
  age: 20,
  city: "Dhaka",
  address: {
    city: "Dhaka",
  },
};

const objectPropertiesCount = (person) => {
  let count = 0;

  for (const key in person) {
    console.log(key);
    count++;

    // Only increment if the property belongs directly to person
    // if (Object.hasOwn(person, key)) {
    //   count++;
    // }
  }

  return count;
};

console.log(objectPropertiesCount(person)); // 3

console.log(Object.values(person));
// const objectProperties = (obj) => Object.values(obj).length;
// const objectProperties = (obj) => Object.keys(obj).length; // give three elements (obj keys) of array like ['', '', '']
const objectProperties = (obj) => Object.entries(obj).length; // give three arrays (obj key-value) of array like [ [], [], [] ]

console.log(objectProperties(person)); // 3

// Find the Highest-Priced Product - Loop through the object and print the product with the highest price.
const products = {
  laptop: 65000,
  phone: 30000,
  tablet: 25000,
};

function findHighestPriced(products) {
  let highestProduct = "";
  let maxPrice = 0;

  for (const product in products) {
    if (products[product] > maxPrice) {
      maxPrice = products[product];
      highestProduct = product;
    }
  }

  //   for (const [key, value] of Object.entries(products)) {
  //     if (value > maxPrice) {
  //       maxPrice = value;
  //       highestProduct = key;
  //     }
  //   }

  //   for (const key of Object.keys(products)) {
  //     if (products[key] > maxPrice) {
  //       maxPrice = products[key];
  //       highestProduct = key;
  //     }
  //   }

  //   for (const values of Object.values(products)) {
  //     if (values > maxPrice) {
  //       maxPrice = values;
  //     }
  //   }

  return `Highest-Priced Product: ${highestProduct} (${maxPrice})`;
  // return highestProduct;
  // return (highestProduct, maxPrice);
}

console.log(findHighestPriced(products));

// Alternative Modern Approach
const highestProduct = (products) =>
  Object.keys(products).reduce((a, b) => (products[a] > products[b] ? a : b));

console.log(highestProduct(products)); // laptop

console.log(
  `Highest-Priced Product: ${highestProduct(products)} (${products[highestProduct(products)]})`,
);

// const person = {
//   name: "Rahim",
//   age: 20,
//   city: "Dhaka",
//   address: {
//     city: "Dhaka",
//   },
// };

// const countAllPropertiesEntries = (obj) => {
//   return Object.entries(obj).reduce((total, [key, value]) => {
//     // Standard count is 1 for the current key
//     let currentCount = 1;

//     // If the value is a nested object, add its internal properties count
//     if (typeof value === "object" && value !== null) {
//       currentCount += countAllPropertiesEntries(value);
//     }

//     return total + currentCount;
//   }, 0);
// };

// console.log(countAllPropertiesEntries(person)); // Output: 5

// const countAllProperties = (obj) => {
//   let count = 0;

//   for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//       count++; // Count the current property

//       // If the property is an object, recursively count its properties
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         count += countAllProperties(obj[key]);
//       }
//     }
//   }

//   return count;
// };

// console.log(countAllProperties(person)); // Output: 5 (name, age, city, address, address.city)
