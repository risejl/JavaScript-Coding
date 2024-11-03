interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
}

function createPerson(firstName: string, lastName: string, age: number): Person {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
  };
}

/*
const person1 = createPerson('John', 'Doe', 30);
person1.greet(); // 'Hello, my name is John Doe'

const person2 = createPerson('Jane', 'Smith', 25);
person2.greet(); // 'Hello, my name is Jane Smith'
*/