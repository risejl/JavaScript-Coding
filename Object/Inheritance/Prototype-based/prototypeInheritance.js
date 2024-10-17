function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
}

function Child(name, age) {
  Parent.call(this, name); // Step 1
  this.age = age;
}

// Child.prototype = Object.create(Parent.prototype); // step2
Object.setPrototypeOf(Child.prototype, Parent.prototype); // step2
Child.prototype.constructor = Child; // step3

Child.prototype.sayAge = function() {
  console.log(`I am ${this.age} years old`);
};

// Usage example
const child = new Child('Dylan', 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty('sayHello')); // => false
console.log(child.hasOwnProperty('sayAge'));   // => false
console.log(child instanceof Parent);       // => true
console.log(child instanceof Parent);       // => true