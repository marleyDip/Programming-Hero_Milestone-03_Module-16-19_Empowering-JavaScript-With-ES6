// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// Closures: Lexical scoping forms the mechanical foundation for Closures. A closure is a function that remembers its outer variables even after the outer function has finished executing.

function counter1() {
  let count = 0;

  return count;
}

// Here, function return hold or store in a variable
// Call a function that store in a variable
let count = counter1();
console.log(count); // 0

// A function can return string, number, boolean, object, array, or even function
function createCounter() {
  // Outer function
  // Declare a variable
  let counter = 0;

  // Inner function
  return function () {
    // Here, inner function we can access counter variable, that defines in outer function that already call and finished executing
    // Outer function, we declared counter variable that access in inner function

    // update outer function variable value or memory
    counter++;
    return counter;

    // Inner function can access from its outer scope is called closure. Here, crate a lexical scope (static)
    // Here, rule of lexical scope but behavior closure (function or runtime mechanism) because after finished the execution, an inner function can access outer function scope.

    // Lexical scope means a function can access variables based on where the function is written in the code

    // The function isn't getting a new copy of counter each time.
    // It maintains access to the same variable in its lexical environment.
  };
}

// At first, call createCounter() function and finished its execution
// And createCounter function return a function that we store or hold in a variable named counter
let counter = createCounter();

// Here, do not call the return function, and we see the output, it is a function
console.log(counter); // [Function (anonymous)]

// But here, we call the createCounter (function) return function by the variable named "counter()" that stores into return function
console.log(counter()); // 0
// Now we call it again and again, as much times we need
console.log(counter()); // 1
console.log(counter()); // 2

// Multiple Closures - This is even more powerful and interesting: can not collapse and conflict each other
function cashRegister() {
  let amount = 0;

  return function (payableAmount) {
    // console.log(payableAmount);
    amount += payableAmount;
    return amount;
  };
}

const coffeeShopCashCounter = cashRegister();
const restaurantCashCounter = cashRegister();
const juiceBarCashCounter = cashRegister();

console.log("CoffeeShop:", coffeeShopCashCounter(200)); // 200
console.log("CoffeeShop:", coffeeShopCashCounter(100)); // 300
console.log("CoffeeShop:", coffeeShopCashCounter(500)); // 800

console.log("\nRestaurant:", restaurantCashCounter(50)); // 50
console.log("Restaurant:", restaurantCashCounter(200)); // 250

console.log("\nCoffeeShop:", coffeeShopCashCounter(100)); // 900

console.log("\nJuiceBar:", juiceBarCashCounter(250)); // 250
console.log("JuiceBar:", juiceBarCashCounter(500)); // 750

/**
 *
 * Lexical Scope
 *
 * - Scope means: Where a variable can be accessed in your code.
 *
 *  - Lexical Scope is the foundation for understanding Closures in JavaScript.
 * - Lexical scope means a function can access variables based on where the function is written in the code.
 * - In simple words: Where a function is created determines which variables it can access.
 *
 *
 * So JavaScript looks for variables from inside → outside.
 * inner()
 *   ↓
 * inner scope
 *   ↓
 * outer scope
 *   ↓
 * global scope
 * This is called the scope chain.
 *
 * Important Rule:
 * - The inner function can access the outer function's variables.
 * - But the outer function cannot access variables created inside the inner function.
 *
 * How Lexical Scope Works (The Scope Chain):
 * - When your code attempts to access a variable, the JavaScript engine looks for its declaration by moving upward through a hierarchy called the Scope Chain:
 *
 * - 1. Current Scope: It checks the immediate block or function execution context.
 *
 * - 2. Outer Lexical Parent: If not found, it moves one step outward to the enclosing block or function.
 *
 * - 3. Global Scope: This lookup behavior repeats until it reaches the outermost global environment. If the variable is still missing, it throws a ReferenceError.
 *
 *
 * The Scope Chain
 * When JavaScript tries to find a variable inside a function, it follows a step-by-step lookup process known as the Scope Chain:
 * 1. It looks inside the current local scope.
 * 2. If not found, it moves one step up to the immediate outer function's scope.
 * 3. It repeats this process upward until it reaches the global scope.
 * 4.If the variable is still missing, it throws a ReferenceError
 *
 *
 * Key Rules of Lexical Scope:
 * - 1. The Direction is One-Way Visibility: Inner functions can look up to see outer variables, but outer functions cannot look down into inner scopes to see local variables.
 *
 * - 2. Static, Not Dynamic: Scope is determined where the function is defined, not where it is executed.
 *
 * - 3. Foundation for Closures: Because functions remember their lexical scope, a function can access variables from its birthplace even if you execute it outside of its original location later on.
 *
 *
 * Types of Lexical Scopes in JavaScript:
 * - 1. Global Scope: Variables declared outside of any function or curly braces {} that are accessible anywhere.
 *
 * - 2.Function Scope: Variables declared inside a function block (using var, let, or const) that cannot be accessed from outside that function.
 *
 * - 3.Block Scope: Variables declared with let or const inside any curly braces {} (like if statements or for loops) that are bound strictly to that block.
 *
 *
 *
 * Lexical Scope vs Closure
 * This distinction is important for your ES6 learning
 *
 * Lexical Scope
 * - Determines Where a function can access variables.
 *
 * Closure
 * - Happens when the function continues to access those outer variables after the outer function has finished.
 *
 * Lexical Scope
 *   ↓
 * Where was the function written?
 *   ↓
 * Which variables can it access?
 *
 * Closure
 *   ↓
 * Function + remembered outer variables
 *   ↓
 * Can access them even after outer function finishes
 *
 * Lexical Scope:
 * - A function's variable access is determined by where the function is defined in the source code.
 *
 * Closure:
 * - A function remembers variables from its outer lexical scope even after the outer function has finished executing.
 *
 */

/**
 *
 *  JavaScript Closure
 * Closure is one of the most important JavaScript concepts for interviews and real-world development.
 * Since you've already learned scope, hoisting, let/const, functions, and arrow functions, you're ready for it.
 *
 *
 * 1. What is a Closure?
 * - A closure is created when an inner function remembers and continue to access variables from its outer lexical scope even after the outer function has finished executing.
 *
 * - A closure happens when an inner function remembers and can access variables from its outer function's scope, even after the outer function has finished executing.
 *
 * - Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
 *
 * Real-World Importance
 * Closures: Lexical scope makes closures possible. A closure is created when an inner function retains access to its parent function's scope even after the parent function has finished executing.
 *
 */

// Lexical Scope
// Determines where a function can access variables.

const globalVar = "I am global";
function outerFunction() {
  const outerVar = "I am from the outer function";

  function innerFunction() {
    // 1. Checks innerFunction scope -> missing outerVar
    // 2. Looks up to outerFunction scope -> finds outerVar!
    console.log(outerVar);

    // 3. Looks all the way up to the global scope -> finds globalVar!
    console.log(globalVar);
  }

  innerFunction();
}
outerFunction();

const name = "Marley";
function greet() {
  console.log(name); // Marley
}
greet(); // Why can greet() access name?
// Because greet was written inside a scope where name exists.

const x = 10;
function outer() {
  const y = 20;

  // inner() can access x and y because of lexical scope.
  function inner() {
    console.log(x); // 10
    console.log(y); // 20
  }

  inner();
}
outer();

// Nested Lexical Scope
const a = 200;

function outer2() {
  const b = 300;

  function inner() {
    const c = 400;

    console.log(a); // 200
    console.log(b); // 300
    console.log(c); // 400

    // inner() can access:

    // a → global scope
    // Here b, c is the function scope
    // b → outer scope
    // c → inner scope
  }

  inner();
}
outer2();

// Important Rule
// The inner function can access the outer function's variables:
function outer3() {
  const message = "Hello World!";

  function inner() {
    console.log(message); // Hello World!
  }

  inner();
}
outer3();

// But the outer function cannot access variables created inside the inner function:
function outer4() {
  function inner() {
    const message = "Hello World!";
  }

  // Because message belongs to inner()'s scope.
  console.log(message); // ReferenceError: message is not defined
}
// outer4();

// Closure
// Here's where it gets interesting.
// Happens when the function continues to access those outer variables after the outer function has finished.
function outer5() {
  const message = "Hello World!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const result = outer5();
// outer5() has already finished executing. But still result() access for closure
result(); // Hello World!

// Think of it like a Backpack 🎒, When inner leaves outer, imagine it carries a backpack:
function outer6() {
  const secret = "JavaScript";

  function inner() {
    console.log(secret); // JavaScript
  }

  return inner;
}

const result2 = outer6();
// Even though outer6() is finished, result2 still has access to secret.
result2();

// Very Common Closure Example
function counter3() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter3();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

/* Why doesn't count disappear?
=> Because the returned function has a closure over count.
=> The function remembers: count = 0

Then:

increment()
   ↓
count = 1

increment()
   ↓
count = 2

increment()
   ↓
count = 3 */

// Multiple Closures
// This is even more interesting:
function counter4() {
  let count = 0;

  return function () {
    count--;
    return count;
  };
}

const counter5 = counter4();
const counter6 = counter4();

console.log(counter5()); // -1
console.log(counter5()); // -2

console.log(counter6()); // -1
console.log(counter6()); // -2

/* Why?
Because each call to: counter()
creates a new lexical environment.

counter1
   ↓
count = 0 → -1 → -2

counter2
   ↓
count = 0 → -1 → -2

They don't share the same count. */

function outer7() {
  const x = 100;

  return function inner() {
    console.log(x);
  };
}

const fn = outer7();
fn(); // 100
