class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

// example
/*
const person1 = new Person('John', 'Doe', 30);
person1.greet(); // 'Hello, my name is John Doe'

const person2 = new Person('Jane', 'Smith', 25);
person2.greet(); // 'Hello, my name is Jane Smith'
*/