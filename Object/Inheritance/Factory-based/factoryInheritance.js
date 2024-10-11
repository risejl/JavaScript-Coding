function Parent(name) {
  return {
    name,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
}

function Child(name, age) {
  const parent = Parent(name);
  return Object.assign({}, parent, {
    age,
    sayAge() {
      console.log(`I am ${this.age} years old`);
    }
  });
}

// Usage example
const child = new Child('Dylan', 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty('sayHello')); // => true
console.log(child.hasOwnProperty('sayAge'));   // => true
console.log(child instanceof Parent);       // => false
console.log(child instanceof Parent);       // => false