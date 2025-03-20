/*

Lexical scoping means that a function's scope is determined by where it is written in the code, not where it is called.

inner function having the property defined on the outer function scope

*/

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 1
increment(); // 2

/*
counter() runs and returns an inner function.
increment() still has access to count because of lexical scoping.
Even though counter() is finished, the returned function remembers count.
*/
