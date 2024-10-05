function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();

// example
const child = new Child('John', 23);
child.sayHello(); // 'Hello, my name is John'