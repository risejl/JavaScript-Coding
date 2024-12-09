You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Other/OOP).

---

## OOP related challenges

---

### `instanceof`

`instanceof` checks if the prototype of a function is on the object prototype chain.

You can use `function.prototype.isPrototypeOf()` to implement it.

```js
/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */

// One-line solution
function myInstanceOf(obj, fn) {
  return fn.prototype.isPrototypeOf(obj);
}

function myInstanceOf(obj, fn) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  if (typeof fn !== "function") {
    return false;
  }

  let proto = Object.getPrototypeOf(obj);

  while (proto) {
    if (proto === fn.prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

// Usage example
class A {}
class B extends A {}
const b = new B();
console.log(myInstanceOf(b, B)); // => true
console.log(myInstanceOf(b, A)); // => true
console.log(myInstanceOf(b, Object)); // => true
function C() {}
console.log(myInstanceOf(b, C)); // => false
C.prototype = B.prototype;
console.log(myInstanceOf(b, C)); // => true
C.prototype = {};
console.log(myInstanceOf(b, C)); // => false
```

---

### Method chaining

To implement method chaining, you need to return `this` in every methods.

```js
class Calculator {
  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

// Usage example
const calculator = new Calculator(10);
console.log(calculator.add(5).subtract(7).getResult()); // => 8
```

---

### `new`

`new` keyword performs 4 steps:

1. Create an empty object
2. Set the object's prototype to the constructor.prototype
3. Call the constructor on the empty object
4. Return the result object

```js
/**
 * @param {Function} constructor
 * @param {any[]} args
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  const result = constructor.call(obj, ...args);

  if (typeof result !== "object" || result == null) {
    return obj;
  } else {
    return result;
  }
}

// Usage example
function Person(name) {
  this.name = name;
}
const person = myNew(Person, "Mike");
console.log(person); // => Person { name: 'Mike' }
```

---

## Reference

- [60. create your own `new` operator - BFE.dev](https://bigfrontend.dev/problem/create-your-own-new-operator)
- [90. write your own `instanceof` - BFE.dev](https://bigfrontend.dev/problem/write-your-own-instanceof)
- [instanceof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [new - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [Method chaining - Wikipedia.org](https://en.wikipedia.org/wiki/Method_chaining)
- [2726. Calculator with Method Chaining - LeetCode](https://leetcode.com/problems/calculator-with-method-chaining/)
