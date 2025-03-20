/*
In JavaScript, the this keyword is a special identifier that refers to the object that is currently executing the function.

JavaScript classes are syntactic sugar over constructor functions. When you define a class, JavaScript internally treats it as a special type of function (a constructor function), and since functions in JavaScript are objects, a class is also an object.

*/

class Person {
  constructor(name) {
    this.name = name;
  }
}

console.log(typeof Person);

function Add(a, b) {
  this.a = a;
  this.b = b;
}

console.log(typeof add);
