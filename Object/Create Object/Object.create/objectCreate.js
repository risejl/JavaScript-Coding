const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

const person = Object.create(personPrototype);
person.firstName = 'John';
person.lastName = 'Doe';

// example
// person.greet(); // 'Hello, my name is John Doe'