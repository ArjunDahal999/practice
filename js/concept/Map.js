/*
A Map is a built-in JavaScript object that allows you
to store key-value pairs where both the keys and values can
be of any type. It's similar to a regular object, but with
some important differences:

Key differences :
--> Keys can be any type (objects, functions, primitives), not just strings

*/

// Create a new Map
const userMap = new Map();

// Set key-value pairs
userMap.set("name", "John");
userMap.set(42, "age"); // Number as key
userMap.set({ id: 1 }, "object"); // Object as key

// Get values
console.log(userMap.get("name")); // "John"

// // Check if key exists
console.log(userMap.has(42)); // true

// // Get size
// console.log(userMap.size); // 3

// // Delete entry
userMap.delete(42);

// // Clear all entries
userMap.clear();

// Note: This will return undefined because { id: 1 } creates a new object
// Objects are compared by reference, not by value
console.log(userMap.get({ id: 1 }));

// To get object values, store the object reference
const objKey = { id: 1 };
userMap.set(objKey, "objectsdasdaasda");
console.log(userMap.get(objKey)); // "object"
