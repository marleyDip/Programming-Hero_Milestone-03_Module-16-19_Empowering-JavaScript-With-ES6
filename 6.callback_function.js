// A callback is a function passed as an argument to another function.
// "I will call back later!"

function registerStudent(callback) {
  console.log("User is registering. Need more data.");

  // console.log(callback); // [Function: userBasicInfo]

  callback();
}

function userBasicInfo() {
  let student = {
    name: "Deep",
    age: 27,
    roll: 30,
  };
  console.log(student);
}

function pasteAcademicInfo() {
  let academicInfo = {
    ssc: "5.00",
    hsc: "5.00",
  };
  console.log(academicInfo);
}

console.log(registerStudent(userBasicInfo));
console.log(registerStudent(pasteAcademicInfo));

function calculator(a, b, callback) {
  let sum = a + b;
  callback(sum);

  // return sum;
}

function displayResult(result) {
  console.log(result);
}

calculator(5, 5, displayResult);
calculator(50, 15, displayResult);

// calculator(50, 15, displayResult()); // TypeError: callback is not a function

/**
 *
 * JavaScript Callback Function
 *
 * What is a Callback Function?
 * - A callback function is a function that is passed as an argument to another function and is called later by that function
 *
 * Simple definition:
 * - A callback is a function passed to another function so that the other function can execute it when needed.
 *
 * Syntax or Common pattern:
 * function doSomething(data, callback) {
 *   // process data
 *
 *   callback(result);
 * }
 *
 */
