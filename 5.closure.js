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
 * - Lexical Scope is the foundation for understanding Closures in JavaScript.
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
 *
 * How Closure Works
 * Think about the scopes like this:
 * Global Scope
 * │
 * └── outer()
 *      │
 *      ├── message = "Hello"
 *      │
 *      └── inner()
 *            │
 *            └── remembers message
 * - When outer() returns inner, the inner function doesn't forget the variables it needs from the outer scope.
 *
 * Conceptually:
 * myFunction
 *     ↓
 * inner function
 *     ↓
 * remembers outer scope
 *     ↓
 * message = "Hello"
 *
 *
 * Closure Creates Private Data
 * - This is called data privacy / encapsulation.
 *
 * Why Closures Are Useful
 * Closures are commonly useful for:
 * 1. Data Privacy
 * 2. Counters
 * 3. Function Factories
 * 4. Callbacks
 * 5. Event Handlers
 *
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

// The Classic Closure Example
// Because counterFunction remembers the count variable.
// The outer function doesn't need to execute again.
function outerFunction1() {
  let count = 0;

  // function innerFunction() {
  // return function innerFunction() {
  // return function () {
  return () => {
    count++;
    console.log("The Count:", count);
  };

  // return innerFunction;
}

const counterFunction = outerFunction1();

counterFunction(); // 1
counterFunction(); // 2
counterFunction(); // 3

/* Why Does count Remember Its Value?

This is the key idea.
When you do: const counterFunction = outer();
outer() runs: count = 0 and returns: inner()

The returned function maintains access to count.
Then: counterFunction(); changes: 0 → 1
Next: counterFunction(); changes: 1 → 2
Next: counterFunction(); changes: 2 → 3

The variable isn't recreated every time. */

// Closure Creates Private Data
// This is one of the most useful applications of closures.

// This code creates a private state using a closure in JavaScript. The balance variable is hidden inside the outer function.
// It cannot be accessed from the outside. You can only change or see the balance by using the deposit and getBalance methods.

// Closure: The inner functions remember the balance variable even after createBankAccount finishes running.
// Encapsulation: No other code can change balance directly. This keeps the data safe from bugs.

// 1. "Creates a private state..."
// In JavaScript, variables declared inside a function cannot be accessed from outside that function.
// The line let balance = 0; is a private state.
// It is protected because it lives only inside the scope of createBankAccount.

// 2. "...using a closure..."
// A closure happens when an inner function remembers and accesses variables from its outer function, even after the outer function has finished running.
// createBankAccount() runs and returns the object.
// Normally, its local variables would be deleted from memory.
// However, deposit() and getBalance() are inner functions that "close over" the balance variable.
// They keep balance alive in memory exclusively for themselves.

// 3. "It cannot be accessed from the outside."
// Because balance is not a property of the returned object, you cannot touch it directly using dot notation.

// 4. "You can only change or see the balance by using the deposit and getBalance methods."
// The returned object acts like a control panel. You cannot touch the internal wiring (balance), but you can use the buttons provided to you:
// To change it: You must call account.deposit(50). The deposit method safely modifies the inner balance.
// To see it: You must call account.getBalance(). The getBalance method safely reads and returns the inner balance.

// This specific part of the code creates and returns an object containing two methods (deposit and getBalance) that have exclusive access to the private balance variable.

// This defines a factory function named createBankAccount.
// Every time you call this function, it sets up a brand new, isolated account environment.
function createBankAccount() {
  //  Private State Variable
  // Due to lexical scoping, it is completely hidden from the outside world.
  // It acts as private data that cannot be read or changed directly from outside the function.
  let balance = 0;
  // balance = 100;

  // Returning the Method Object
  // The function outputs (returns) a plain JavaScript object.
  // This object serves as the public interface to interact with your private balance.
  return {
    // balance: balance,

    // The Deposit Method - This is an shorthand syntax for an object method - ES6
    // It modifies the private balance variable by adding the amount.
    // It forms a closure, meaning it remembers and retains access to the balance variable even after createBankAccount() finishes executing.
    deposit(amount) {
      balance += amount;
    },

    // Traditional Syntax - ES5
    // deposit: function (amount) {
    //   balance = balance + amount;
    // },

    // The GetBalance Method
    // This is another object method.
    // It safely reads and returns the current value of the private balance variable.
    // The closing brackets end the object literal and the outer function.
    getBalance() {
      return balance;
    },

    // Arrow function
    // getBalance: () => {
    //   return balance;
    // },
  };
}

// Key Concept: Closure
// The returned object methods "trap" the balance variable in their scope.
// Even though createBankAccount() runs and finishes, the methods keep a live link to that specific balance variable in memory.

const account = createBankAccount();
const myAccount = createBankAccount();

myAccount.balance = 5000; // This just creates a useless public property. It does NOT change the real inner balance.
console.log(myAccount.balance); // undefined

account.deposit(500);
console.log("The 1st account balance", account.getBalance()); // 500

myAccount.deposit(1000);
console.log("The 2nd account balance", myAccount.getBalance()); // 1000

account.deposit(1500);
myAccount.deposit(500);

account.deposit(2500);
myAccount.deposit(1200);

myAccount.deposit(1300);
account.deposit(3500);

console.log("The 1st account balance", account.getBalance()); // 8000
console.log("The 2nd account balance", myAccount.getBalance()); // 4000

// Real-Life Example — Shopping Cart
// Imagine you're building an e-commerce application.
// The total variable is protected inside the closure.
const createCart = () => {
  let total = 0;

  return {
    addItem(price) {
      total += price;
    },

    getTotal() {
      return total;
    },
  };
};

const cart = createCart();

cart.addItem(1000);
cart.addItem(500);
cart.addItem(200);

console.log("The total price for specific customer:", cart.getTotal());

// Multiple Closures Have Separate Data
// Each call to: createCounter()
// creates a new execution environment.
// Conceptually: counter1 -> count = 0 and counter2 -> count = 0
// They don't share the same count.
const createCounterFunction = () => {
  let count = 10;

  return function () {
    count++;
    return count;
  };
};

// Closure Doesn't Mean "Copying" the Variable
// The function isn't getting a new copy of count each time.
// It maintains access to the same variable in its lexical environment.

const counter8 = createCounterFunction();
const counter9 = createCounterFunction();

console.log(counter8()); // 11
console.log(counter8()); // 12

console.log(counter9()); // 11
console.log(counter9()); // 12

// Closure with Parameters
// Each returned function remembers its own name.
function greetFunction(name = "Guest") {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const greetSufian = greetFunction("Sufian");
const greetRahim = greetFunction("Rahim");
const greetDefault = greetFunction();

greetSufian();
greetRahim();
greetDefault();

// Closure with Arrow Functions
// Closures work exactly the same way with arrow functions.
function createMultiplier(number) {
  return (value) => {
    return value * number;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Closure in Loops
// With let
// let creates block-scoped bindings for the loop iterations.
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000);
}

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000);
}

// Why Closures Are Useful
// Closures are commonly useful for:

// 1. Data Privacy
function createUser0() {
  let password = "secret";

  return function () {
    return password;
  };
}

// 2. Counters
function counter0() {
  let count = 0;

  return () => ++count;
}

// 3. Function Factories
function createMultiplier0(x) {
  return (y) => x * y;
}

// 4. Callbacks
function greet0(name) {
  setTimeout(() => {
    console.log(name);
  }, 1000);
}
// The callback remembers name.

// 5. Event Handlers
// Closures are heavily used when event handlers need access to variables from their surrounding scope.

// Real-World Example — Login Attempts
// Imagine you want to track failed login attempts.
function createLoginSystem() {
  let attempts = 0;

  return function () {
    attempts++;

    if (attempts >= 3) {
      return "Account Locked";
    }

    return `Attempt ${attempts}`;
  };
}

const login = createLoginSystem();

console.log(login());
console.log(login());
console.log(login());
console.log(login());
