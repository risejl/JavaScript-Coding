function createChild(parent) {
  const child = Object.create(parent);
  child.age = 18;
  child.sayAge = function () {
    console.log(`I am ${this.age} years old`);
  }
  return child;
}

const parent = {
  name: 'Frank',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const child = createChild(parent);
child.sayHello(); // Hello, my name is Frank
child.sayAge(); // I am 18 years old