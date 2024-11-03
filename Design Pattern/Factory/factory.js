/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @return {object}
 */

function createPerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
}

// Usage example
const person1 = createPerson("John", "Doe", 30);
person1.greet(); // => 'Hello, my name is John Doe'

const person2 = createPerson("Jane", "Smith", 25);
person2.greet(); // => 'Hello, my name is Jane Smith'
