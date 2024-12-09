You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Static).

---

## Object static methods related challenges

---

### `Object.assign()`

Merging all the properties of objects, don't forget the symbol properties.

Use `Object.getOwnPropertySymbols()` to get all the symbol properties.

```js
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */

function myObjectAssign(target, ...sources) {
  if (target == null) {
    throw Error();
  }

  target = Object(target);

  function merge(keys = [], currSource) {
    for (const key of keys) {
      target[key] = currSource[key];

      if (target[key] !== currSource[key]) {
        throw Error();
      }
    }
  }

  for (const source of sources) {
    if (source == null) {
      continue;
    }

    merge(Object.keys(source), source);
    merge(Object.getOwnPropertySymbols(source), source);
  }

  return target;
}

// Usage example
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // => Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // => true
```

---

### `Object.create()`

Step1: Create a new constructor function
Step2: Set the prototype of the constructor function to the given object's prototype or `null`
Step3: Create a new object with the constructor and return the object

```js
/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  function MyConstructor() {}

  MyConstructor.prototype = proto.prototype ?? proto;

  return new MyConstructor();
}

// Usage example
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = myObjectCreate(person);
me.name = "Matthew"; // => "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction(); // => "My name is Matthew. Am I human? true"
```

---

### `Object.fromEntries()`

Creating an object from an array.

```js
/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */

// One-line solution
function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}

// Iterative solution
function fromPairs(pairs) {
  const result = {};

  for (const [key, value] of pairs) {
    result[key] = value;
  }

  return result;
}

// Usage example
const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

console.log(fromPairs(pairs)); // => { a: 1, b: 2, c: 3 }
```

---

### `Object.groupBy()`

`groupBy` is a common operation of data processing. The method now is in the standard.

```js
/**
 * @param {Array} arr
 * @param {Function} iteratee
 * @return {Array}
 */

function groupBy(arr, iteratee) {
  const result = {};
  const iterateeFn =
    typeof iteratee === "function" ? iteratee : (value) => value[iteratee];

  for (const item of arr) {
    const key = iterateeFn(item);

    if (!Object.hasOwn(result, key)) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

// Usage example
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': [4.2], '6': [6.1, 6.3] }

// Group by string length
console.log(groupBy(["one", "two", "three"], "length"));
// => { '3': ['one', 'two'], '5': ['three'] }

const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
];

// Group by a property of the objects
console.log(groupBy(users, "age"));
// => { '36': [{'user': 'barney', 'age': 36}], '40': [{'user': 'fred', 'age': 40}] }
```

---

### `Object.is()`

`Object.is()` is a implemenation of [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).

The difference between `===` and `Object.is()` is how they treat `NaN` and `+0`, `-0`.

- `Object.is()` treat `NaN` same to each other and `+0` difference to each other `-0`
- `===` is vice versa

```js
/**
 * @param {any} op1
 * @param {any} op2
 * @return {boolean}
 */

function myObjectIs(op1, op2) {
  if (op1 === op2) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}

// Usage example
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [26. implement Object.assign() - BFE.dev](https://bigfrontend.dev/problem/implement-object-assign)
- [94. implement your own `Object.create` - BFE.dev](https://bigfrontend.dev/problem/implement-your-own-Object-create)
- [116. implement Object.is() - BFE.dev](https://bigfrontend.dev/problem/implement-Object.is)
- [177. Implement Object.groupBy() - BFE.dev](https://bigfrontend.dev/problem/implement-groupby)
- [Object.assign() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Object.create() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [Object.fromEntries() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
- [Object.groupBy() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [Object.is() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [Liskov substitution principle - Wikipedia.org](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
