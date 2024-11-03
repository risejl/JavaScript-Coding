/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };
}

// Usage example
const person1 = new Person("John", "Doe", 30);
person1.greet(); // => Hello, my name is John Doe

const person2 = new Person("Jane", "Smith", 25);
person2.greet(); // => Hello, my name is Jane Smith
