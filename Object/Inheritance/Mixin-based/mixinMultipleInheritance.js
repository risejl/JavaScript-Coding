const ParentMixin = {
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const AgeMixin = {
  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}

class Child {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Object.assign(Child.prototype, ParentMixin, AgeMixin);

// Usage examples
const child1 = new Child("Alice", 8);
child1.sayHello(); // => Hello, my name is Alice
child1.sayAge();   // => I am 8 years old

const child2 = new Child("Bob", 10);
child2.sayHello(); // => Hello, my name is Bob
child2.sayAge();   // => I am 10 years old

console.log(child1.sayHello === child2.sayHello); // => true
console.log(child1.sayAge === child2.sayAge);     // => true

console.log(child1 instanceof ParentMixin); // => false
console.log(child1 instanceof AgeMixin);    // => false
console.log(child1 instanceof Child);       // => true