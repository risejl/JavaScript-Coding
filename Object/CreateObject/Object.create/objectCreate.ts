interface Person {
  firstName: string;
  lastName: string;
  greet(): void;
}

const personPrototype: Person = {
  firstName: '',
  lastName: '',
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

const person = Object.create(personPrototype);
person.firstName = 'John';
person.lastName = 'Doe';

//person.greet(); // 'Hello, my name is John Doe'