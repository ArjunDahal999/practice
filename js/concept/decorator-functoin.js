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

function decoratorFunction(fn) {
  console.log("This is function name =  " + fn.name);
  return (...args) => {
    console.log("This is argument = " + args);
    fn(...args);
  };
}

/**
 *
 * @param {String} str
 */
function display(str) {
  console.log("display = " + str);
  const up = str.toUpperCase();
  console.log("up = " + up);
  return up;
}

const test = decoratorFunction(display);

test("arjun");
