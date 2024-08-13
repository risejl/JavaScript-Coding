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

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child('Charlie', 15);
child.sayHello(); 'Hello, my name is Charlie'