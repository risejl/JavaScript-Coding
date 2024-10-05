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
    console.log(`Hello, my age is ${this.age}`);
  }
}

const child = new Child('Mitchell', 18);
child.sayAge(); // 'Hello, my age is 18'
child.sayHello(); // 'Hello, my name is Mitchell'