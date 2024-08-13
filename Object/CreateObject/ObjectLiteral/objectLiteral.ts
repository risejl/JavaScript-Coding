interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet: () => void;
}

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

// person.greet(); // 'Hello, my name is John Doe'
