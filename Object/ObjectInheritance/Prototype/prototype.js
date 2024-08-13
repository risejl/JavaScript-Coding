const parent = {
  name: 'David',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const child = Object.create(parent);
child.name = 'Eve';
child.sayHello(); // 'Hello, my name is Eve'