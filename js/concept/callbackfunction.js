/*

--> A callback is simply a function that is passed to another function as a parameter.
--> The callback function gets executed after the asynchronous operation or task it’s tied to completes.

*/

//-------------------synchronous operation--------------------------//
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Callback is executed after logging the greeting
}

function thankYou() {
  console.log("Thank you!");
}

greet("Alice", thankYou);
// Output:
// Hello, Alice
// Thank you!

//-------------------asynchronous operation--------------------------//
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched.");
    callback(); // Callback executed once the task completes
  }, 2000); // Simulate 2-second delay
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
