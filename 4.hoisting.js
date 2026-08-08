// var age;
console.log(age); // undefined
var age = 25;

// Hoist but goes Temporal Dead Zone (TDZ)
// console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "deep";

// Function hoists full function body, because it non-primitive (reference) data type, memory reference address goes to the top and it work
console.log(add(50, 60)); // 110
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); // 30
