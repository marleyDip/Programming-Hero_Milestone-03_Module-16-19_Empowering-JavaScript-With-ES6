const myUser = {
  name: "John Doe",
  age: 35,
  id: 40003,
};

const userKeys = Object.keys(myUser);
const userValues = Object.values(myUser);

// To know the length of the object total keys
console.log(userKeys.length);
console.log(userValues.length);

for (let key of userKeys) {
  console.log(key, myUser[key]);
}

const userKeyValue = Object.entries(myUser);
// Gives array of array - here each element is array of key-value pair
console.log(userKeyValue);

for (let elem of userKeyValue) {
  const [key, value] = elem;
  console.log(key, value);
}

// delete method
delete myUser.id;
delete myUser["age"];
console.log(myUser);

// seal - add and delete not allowed but still edit is allowed
const bankAccount = {
  accountNumber: "1234",
  balance: 5000,
};

Object.seal(bankAccount);
console.log(Object.isSealed(bankAccount));

// add, delete
delete bankAccount.balance;
bankAccount.nomineeName = "Something";

// update or modify
bankAccount.balance = 6000;

console.log(bankAccount);

// freeze - add, edit, and delete not allowed
const birthCertificate = {
  name: "Deep",
  birthDate: "15-10-2000",
  cerNumber: "423424234234234",
};

Object.freeze(birthCertificate);
console.log(Object.isFrozen(birthCertificate));

delete birthCertificate.cerNumber;
birthCertificate.new = "test";
birthCertificate.cerNumber = "123";

console.log(birthCertificate);

/**
 *
 * JavaScript Object Methods — Keys, Values, Entries, Delete, Seal, Freeze
 *
 * JavaScript provides several built-in methods to manipulate, inspect, and restrict object properties. These methods help you inspect, modify, and protect objects.
 *
 * Data Extraction Methods - Object.keys(obj), Object.values(obj), Object.entries(obj)
 * - These static methods convert object data into arrays for easier iteration.
 *
 * 1. Object.keys()
 * - Returns an array of an object's property names (keys).
 * - Syntax: Object.keys(object)
 *
 * 2. Object.values()
 * - Returns an array of all property values.
 * - Syntax: Object.values(object)
 *
 * 3. Object.entries()
 * - Returns an array of key-value pairs. Each pair is an array.
 * - Syntax: Object.entries(object)
 *
 *
 * 4. The delete Operator
 * - The delete operator removes a property from an object.
 * - Syntax: delete object.property or delete object['property']
 *
 * - Behavior: It mutates the original object.
 * - Return value: Returns true if the property was successfully removed or if the property does not exist. Returns false only if the property is non-configurable.
 *
 *
 * Integrity and Restriction Methods
 * - These methods control whether an object can be modified, configured, or extended.
 *
 * 5. Object.seal(obj)
 * - Prevents adding or deleting properties, but allows updating existing values.
 *
 * - Can add new properties? => No.
 * - Can delete existing properties? => No.
 * - Can change existing values? => Yes.
 * - Check status: Object.isSealed(obj)
 *
 * Think of a Sealed Box 📦
 * - ✅ You can rearrange items already inside.
 * - ❌ You cannot add new items.
 * - ❌ You cannot remove existing items.
 *
 * 6. Object.freeze(obj)
 * - Makes an object completely immutable (shallow).
 * - Freezes an object. A frozen object cannot be changed in any way. It is the highest level of integrity.
 *
 * - Can add new properties? => No.
 * - Can delete existing properties? => No.
 * - Can change existing values? => No.
 * - Note: This is a shallow freeze. Nested objects can still be modified unless they are frozen individually.
 * - Check status: Object.isFrozen(obj)
 *
 * After freezing:
 * - ❌ Cannot add properties
 * - ❌ Cannot delete properties
 * - ❌ Cannot modify existing values
 *
 * Think of a Frozen Box 🧊
 * - ❌ Cannot add
 * - ❌ Cannot remove
 * - ❌ Cannot modify
 *
 * Common Interview Question
 * Does Object.freeze() freeze nested objects?
 * - No. It performs a shallow freeze.
 *
 * Summary Table:
 * Method	              Purpose	            Returns
 * Object.keys(obj)	      Get all keys	        Array of keys
 * Object.values(obj)	  Get all values	    Array of values
 * Object.entries(obj)	  Get key-value pairs   Array of arrays
 * delete obj.key	      Remove a property	    true/false
 * Object.seal(obj)	      Prevent add/delete	Sealed object
 * Object.freeze(obj)	  Prevent all changes	Frozen object
 *
 */

const user = {
  name: "Md Sofian Hasan",
  age: 26,
  country: "Bangladesh",
};

// 1. Object.keys()
// Returns an array of an object's property names (keys).
const keys = Object.keys(user);
console.log(keys); // [ 'name', 'age', 'country' ]

// Real-World Example
const settings = {
  darkMode: true,
  language: "English",
  notification: false,
};

console.log(Object.keys(settings)); // [ 'darkMode', 'language', 'notification' ]

// 2. Object.values()
// Returns an array of all property values.
const values = Object.values(user);
console.log(values); // [ 'Md Sofian Hasan', 26, 'Bangladesh' ]

// 3. Object.entries()
// Returns an array of key-value pairs. Each pair is an array.
const entries = Object.entries(user);
console.log(entries); // [ [ 'name', 'Md Sofian Hasan' ], [ 'age', 26 ], [ 'country', 'Bangladesh' ] ]

// [
//   [ 'name', 'Md Sofian Hasan' ],
//   [ 'age', 26 ],
//   [ 'country', 'Bangladesh' ]
// ]

// Loop Through an Object
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// Here, Object.entries(user) = [ [], [], [] ] => extract value ony by one like []..[]..[]. Thats why use [ key, value ]..track every key-value pairs

// name: Md Sofian Hasan
// age: 26
// country: Bangladesh

// 4. delete
// Removes a property from an object.
delete user.age;
console.log(user); // { name: 'Md Sofian Hasan', country: 'Bangladesh' }

delete user["country"];
console.log(user); // { name: 'Md Sofian Hasan' }

// Add
user.passport_id = 3052;
console.log(user); // { name: 'Md Sofian Hasan', passport_id: 3052 }

// 5. Object.seal()
// Prevents adding or deleting properties, but allows updating existing values.
console.log(Object.isSealed(user)); // false

Object.seal(user);
console.log(Object.isSealed(user)); // true

user.passport_id = 384; // Allowed to update existing values
user.country = "BD"; // Not Added
delete user.name; // Not Delete

console.log(user); // { name: 'Md Sofian Hasan', passport_id: 384 }

// 6. Object.freeze()
// Makes an object completely immutable (shallow).
console.log(Object.isFrozen(user)); // false

Object.freeze(user);
console.log(Object.isFrozen(user)); // true

user.passport_id = 2251; // Not Modify existing values
user.country = "America"; // Not Added properties
delete user.name; // Not Delete properties

console.log(user); // { name: 'Md Sofian Hasan', passport_id: 384 }

// Unseal or unfreeze, create a new shallow copy
const editableUser = { ...user };
console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384 }

// Common Interview Question
// Does Object.freeze() freeze nested objects?
// No. It performs a shallow freeze.

// editableUser.address.city = "Dhaka"; // TypeError: Cannot set properties of undefined (setting 'city')

// We already create the parent "user" name object.
// So now create an object (inner / child) as a property inside another (parent / outer) object (একটা অবজেক্টকে অন্য একটি অবজেক্টের প্রপার্টি হিসেবে ব্যবহার করা), 1st assign an object to a property

// Because it already freeze or frozen user object, can not add, delete, modify or update
user.address = {};
console.log(user); // { name: 'Md Sofian Hasan', passport_id: 384 }

// Thats why create new shallow copy = {...user} and here assign a empty object to address property
editableUser.address = {};
console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384, address: {} }

// 2nd add properties to the nested object
editableUser.address.city = "Dhaka";
console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384, address: { city: 'Dhaka' } }

// Create an object to a property and add properties to the nested object
editableUser.road = { street: 123 };
console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384, address: { city: 'Dhaka' }, road: { street: 123 } }

// Using bracket notation for dynamic keys
const keyName = "role";
// editableUser["role"] = { isAdmin: true };
// editableUser[keyName] = { isAdmin: true };

// Skip repeating the name if the object key matches an existing variable name.
const isAdmin = true;
// editableUser[keyName] = { isAdmin: isAdmin };
editableUser[keyName] = { isAdmin };

console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384, address: { city: 'Dhaka' }, road: { street: 123 },  role: { isAdmin: true } }

// Create separated objects 1st and then plug them into a parent container
const physicalStats = { height: "180cm", weight: "75kg" };

editableUser.stats = physicalStats;
console.log(editableUser); // { name: 'Md Sofian Hasan', passport_id: 384, address: { city: 'Dhaka' }, road: { street: 123 },  role: { isAdmin: true },  stats: { height: '180cm', weight: '75kg' } }

// Now explicitly freeze the object
Object.freeze(editableUser);

editableUser.address.city = "Rajshahi";

// We know, freeze does not add, delete, update or modify but the nested address object is still mutable. Because Object.freeze() performs a shallow freeze (it does not work for nested or child object, it only work parent object)
console.log(editableUser.address.city); // Rajshahi

// Real-World Example
// Imagine an application's configuration.

const config = {
  appName: "DevWatch",
  version: "1.0.0",
};

// This prevents accidental changes to configuration values during runtime.
Object.freeze(config);

/* ===== Practice Problems ===== */
const student = {
  name: "Rahim",
  age: 20,
  grade: "A",
};

console.log(Object.keys(student)); // [ 'name', 'age', 'grade' ]

console.log(Object.values(student)); // [ 'Rahim', 20, 'A' ]

for (const [studentInfo, studentValue] of Object.entries(student)) {
  console.log(`${studentInfo}: ${studentValue}`);
}

delete student.grade;
delete student["age"];
console.log(student); // { name: 'Rahim' }

// Object.seal() method can not add, delete properties but modify or update existing values.
const car = {
  brand: "Toyota",
  year: 2024,
};

console.log(car); // { brand: 'Toyota', year: 2024 }
console.log(Object.isSealed(car)); // false

Object.seal(car);
console.log(Object.isSealed(car)); // true

car.year = 2026;
car.color = "Blue";
delete car.brand;

console.log(car); // { brand: 'Toyota', year: 2026 }

// Object.freeze() method can not add, delete, modify or update properties
const setting = {
  theme: "Dark",
  language: "English",
};

console.log(setting); // { theme: 'Dark', language: 'English' }
console.log(Object.isFrozen(setting)); // false

Object.freeze(setting);
console.log(Object.isFrozen(setting)); //true

setting.theme = "Light";
setting.fontSize = "20px";
delete setting.language;

console.log(setting); // { theme: 'Dark', language: 'English' }

// Predict the output
const person = {
  name: "Sufian",
  age: 22,
};

Object.seal(person);

person.age = 23;
person.city = "Dhaka";
delete person.name;

console.log(person); // { name: 'Sufian', age: 23 }

Object.freeze(person);

person.age = 25;
delete person.name;

// But here age property values can not update to 25
console.log(person); // { name: 'Sufian', age: 23 }
