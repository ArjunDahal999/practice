/*

A constructor function is a special type of function used to create multiple objects with the same structure. It serves as a blueprint for creating objects dynamically.
A constructor function follows these rules:

It starts with an uppercase letter (by convention).

*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Alice", 25);
person1.greet();
console.log(person1.name);
console.log(person1.age);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(typeof Person2);
