const Parent = {
  init(name) {
    this.name = name;
  },
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const Child = Object.create(Parent);

Child.init = function(name, age) {
  Parent.init.call(this, name);
  this.age = age;
};

Child.sayAge = function () {
  console.log(`I am ${this.age} years old`);
};

// Usage example
const child1 = Object.create(Child);
child1.init("Alice", 8);

child1.sayHello(); // => Hello, my name is Alice
child1.sayAge();   // => I am 8 years old

console.log(child1.hasOwnProperty('sayHello')); // => false
console.log(child1.hasOwnProperty('sayAge'));   // => false
console.log(Child.isPrototypeOf(child1));       // => true
console.log(Parent.isPrototypeOf(Child));       // => true