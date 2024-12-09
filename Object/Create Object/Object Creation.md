You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Create%20Object).

---

## Object creation methods

---

### Class-based

Recommend after ES6.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

// Usage example
const person1 = new Person("John", "Doe", 30);
person1.greet(); // => 'Hello, my name is John Doe'

const person2 = new Person("Jane", "Smith", 25);
person2.greet(); // => 'Hello, my name is Jane Smith'
```

---

### Constructor-based

Recommend before ES6.

```js
/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };
}

// Usage example
const person1 = new Person("John", "Doe", 30);
person1.greet(); // => Hello, my name is John Doe

const person2 = new Person("Jane", "Smith", 25);
person2.greet(); // => Hello, my name is Jane Smith
```

---

### Object literals

`{}`

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

person.greet(); // => 'Hello, my name is John Doe'
```

---

### `Object.create()`

> The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object. - MDN

```js
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

const person = Object.create(personPrototype);
person.firstName = "John";
person.lastName = "Doe";

// Usage example
person.greet(); // => 'Hello, my name is John Doe'
```

---

### Factory Pattern

```js
/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @return {object}
 */

function createPerson(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
}

// Usage example
const person1 = createPerson("John", "Doe", 30);
person1.greet(); // => 'Hello, my name is John Doe'

const person2 = createPerson("Jane", "Smith", 25);
person2.greet(); // => 'Hello, my name is Jane Smith'
```

---

## Reference

- [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Object-oriented programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Object-oriented programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Object initializer - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Object.create() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [Factory Pattern - patterns.dev](https://www.patterns.dev/vanilla/factory-pattern)
