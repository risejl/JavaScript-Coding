interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
}

type PersonConstructor = {
  new (firstName: string, lastName: string, age: number): Person;
};

const Person: PersonConstructor = function (this: Person, firstName: string, lastName: string, age: number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };
} as any;

// example
/*
const person1 = new Person('John', 'Doe', 30);
person1.greet(); // Hello, my name is John Doe

const person2 = new Person('Jane', 'Smith', 25);
person2.greet(); // Hello, my name is Jane Smith
*/