You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Inheritance).

---

## Object inheritance methods

---

### Class-based

Recommend after ES6.

`Class` + `extends` is the way.

```js
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
const child = new Child("Dylan", 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty("sayHello")); // => false
console.log(child.hasOwnProperty("sayAge")); // => false
console.log(child instanceof Parent); // => true
console.log(child instanceof Parent); // => true
```

---

### Factory-based

```js
function Parent(name) {
  return {
    name,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

function Child(name, age) {
  const parent = Parent(name);
  return Object.assign({}, parent, {
    age,
    sayAge() {
      console.log(`I am ${this.age} years old`);
    },
  });
}

// Usage example
const child = new Child("Dylan", 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty("sayHello")); // => true
console.log(child.hasOwnProperty("sayAge")); // => true
console.log(child instanceof Parent); // => false
console.log(child instanceof Parent); // => false
```

---

### Mix-in-based

```js
const ParentMixin = {
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const AgeMixin = {
  sayAge() {
    console.log(`I am ${this.age} years old`);
  },
};

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
child1.sayAge(); // => I am 8 years old

const child2 = new Child("Bob", 10);
child2.sayHello(); // => Hello, my name is Bob
child2.sayAge(); // => I am 10 years old

console.log(child1.sayHello === child2.sayHello); // => true
console.log(child1.sayAge === child2.sayAge); // => true

console.log(child1 instanceof ParentMixin); // => false
console.log(child1 instanceof AgeMixin); // => false
console.log(child1 instanceof Child); // => true
```

---

### `Object.create()` - based

```js
const Parent = {
  init(name) {
    this.name = name;
  },
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const Child = Object.create(Parent);

Child.init = function (name, age) {
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
child1.sayAge(); // => I am 8 years old

console.log(child1.hasOwnProperty("sayHello")); // => false
console.log(child1.hasOwnProperty("sayAge")); // => false
console.log(Child.isPrototypeOf(child1)); // => true
console.log(Parent.isPrototypeOf(Child)); // => true
```

---

### Prototype-based

Recommend before ES6.

- Step1: in the child constructor, call the parent constructor.
- Step2: setting the prototype of child to the parent prototype.
- Step3: binding the `constructor` property to the child constructor function.

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // Step 1
  this.age = age;
}

// Child.prototype = Object.create(Parent.prototype); // step2
Object.setPrototypeOf(Child.prototype, Parent.prototype); // step2
Child.prototype.constructor = Child; // step3

Child.prototype.sayAge = function () {
  console.log(`I am ${this.age} years old`);
};

// Usage example
const child = new Child("Dylan", 10);
child.sayHello(); // => Hello, my name is Dylan
child.sayAge(); // => I am 10 years old

console.log(child.hasOwnProperty("sayHello")); // => false
console.log(child.hasOwnProperty("sayAge")); // => false
console.log(child instanceof Parent); // => true
console.log(child instanceof Parent); // => true
```

---

## Reference

- [Inheritance (object-oriented programming) - Wikipedia.org](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>)
- [Inheritance and the prototype chain - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Prototype Pattern - patterns.dev](https://www.patterns.dev/vanilla/prototype-pattern)
- [Factory Pattern - patterns.dev](https://www.patterns.dev/vanilla/factory-pattern)
- [Mixin Pattern - patterns.dev](https://www.patterns.dev/vanilla/mixin-pattern)
