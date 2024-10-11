class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}

// Usage example
const child = new Child('Dylan', 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty('sayHello')); // => false
console.log(child.hasOwnProperty('sayAge'));   // => false
console.log(child instanceof Parent);       // => true
console.log(child instanceof Parent);       // => true