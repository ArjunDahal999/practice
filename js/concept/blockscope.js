/*
 Variable are hoisted to the top of the block scope , 
*/

function test() {
  var x = 5; // there the vairable are function scope so it will not be available outside the function
  console.log("fn = " + x);
}

while (true) {
  var z = 10;
  const z = 9;
  break;
}

console.log(z); // can be accessed outside the block since it is declared with var keyword , is it non-block scope

console.log(x); // ReferenceError: x is not defined
