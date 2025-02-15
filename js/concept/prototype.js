/**
 * The JavaScript prototype property allows you to add new properties/method to object constructors:
 */

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const p = new Person("a", "b", 3, 5);

console.log(p.name());
