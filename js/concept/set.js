/**
 A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.
 */

const set = new Set();

set.add("a");
set.add("b");
set.add("c");
set.add("c");

console.log(set.has("c"));
console.log(set);
set.forEach((e) => {
  console.log(e);
});

set.clear();
console.log(set);
