/*
--> A decorator function is a higher-order function that takes another 
 function as an argument and extends or alters its behavior.
-->Decorators are often used in scenarios where you want to add functionality to existing functions in a reusable way.

*/

/**
 *
 * @param {function} fn
 * @returns {function}
 */

// Timer decorator function
function timerDecorator(func) {
  return function (...args) {
    const start = performance.now(); // Start the timer
    const result = func(...args); // Call the original function
    const end = performance.now(); // End the timer
    console.log(
      `Function ${func.name} took ${(end - start).toFixed(2)}ms to execute.`
    );
    return result;
  };
}

// A simple function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Apply the timer decorator to the factorial function
const timedFactorial = timerDecorator(factorial);

// Call the decorated function
console.log(timedFactorial(100)); // Outputs the factorial result along with the time taken
