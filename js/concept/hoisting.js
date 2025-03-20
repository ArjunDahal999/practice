/**
 
--> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before execution. 
--> Hoisting happens during the compilation phase (before execution).
-->The effects of hoisting are seen at runtime when JavaScript tries to access the variables and functions.



-->The Temporal Dead Zone (TDZ) is the period between hoisting and variable initialization where accessing the variable results in a ReferenceError.
In simple terms:
Variables declared with let and const are hoisted but not initialized immediately.
They remain in the TDZ until JavaScript reaches the line where they are assigned a value.
Accessing them before initialization causes a ReferenceError.

 */

console.log(a);
let a = 1;
console.log(a);
