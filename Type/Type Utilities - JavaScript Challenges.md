## Introduction

Checking types is a common practice in JavaScript in everyday coding and technical interviews.

You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Type).

---

### Primitive values

In JavaScript, all types except `Object` define immutable values represented directly at the lowest level of the language. We refer to values of these types as _primitive values_.

There are 7 primitive values:

1. `Null`
2. `Undefined`
3. `Boolean`
4. `Number`
5. `BigInt`
6. `String`
7. `Symbol`

All primitive types, except `null`, can be tested by the `typeof` operator. `typeof null` returns `"object"`, so we have to use `=== null` to test for `null`.

Therefore, we get our first type utility function.

```js
// Time: O(1) | Space: O(1)

function isBoolean(value) {
  return typeof value === "boolean";
}

function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isBigInt(value) {
  return typeof value === "bigint";
}

function isUndefined(value) {
  return typeof value === "undefined";
}

function isNull(value) {
  return value === null;
}

// Usage example
console.log(isSymbol(Symbol("test"))); // => true
console.log(isNull(null)); // => true
console.log(isUndefined(undefined)); // => true
console.log(isNumber(1)); // => true
console.log(isString("")); // => true
console.log(isBoolean(true)); // => true
console.log(isBigInt(9007199254740991n)); // => true
```

---

### Objects

Everything that's not a primitive type is an object in JavaScript. This includes:

- Plain objects
- Arrays
- Functions
- Dates
- RegExps
- Other built-in object types

Here comes the second utility function for Arrays, Functions, Objects.

- For array, use `Array.isArray()` method
- For function, use `typeof` operator
- For object, use `typeof` operator but check if it is `null` first
- For POJO, check if the object's prototype is `Object.prototype` or `null`. Use `Object.getPrototypeOf()` to access the prototype.

```js
// Time: O(1) | Space: O(1)

function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
}

function isObject(value) {
  // for null and undefined
  if (value == null) {
    return false;
  }

  return typeof value === "object";
}

function isPlainObject(value) {
  // for null and undefined
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

// Usage example
console.log(isArray(new Array())); // => true
console.log(isObject(Object(null))); // => true
console.log(isFunction(Object.prototype.toString)); // => true
console.log(isPlainObject(Object.create(null))); // => true
```

---

### `Object.prototype.toString.call()`

There are several methods to check types in JavaScript, including:

- `typeof` for all the primitive types except `null`.
- `instanceof` determines whether an object is an instance of a specific constructor or class. It does not work with primitive values.

`Object.prototype.toString.call()` is the most reliable method for type checking in JavaScript.

We can extract the types by:

```js
// Time: O(1) | Space: O(1)

function getType(value) {
  const type = typeof value;

  if (type !== "object") {
    return type;
  }

  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// Usage example
console.log(getType(1)); // => number
console.log(getType("")); // => string
console.log(getType({})); // => object
console.log(getType(null)); // => null
console.log(getType(undefined)); // => undefined
console.log(getType(Symbol())); // => symbol
console.log(getType(BigInt(1234567890123456789012345))); // => bigint
console.log(getType(function () {})); // => function
console.log(getType(new Date())); // => date
console.log(getType(new Map())); // => map
console.log(getType(new Set())); // => set
console.log(getType(new RegExp("cat", "i"))); // => regex
```

---

## Reference

- [JavaScript data types and data structures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)
- [Data types - JavaScript.info](https://javascript.info/types)
- [Reference Type - JavaScript.info](https://javascript.info/reference-type)
- [GreatFrontEnd](https://www.greatfrontend.com/)
- [20. Detect data type in JavaScript - BFE.dev](https://bigfrontend.dev/problem/detect-data-type-in-JavaScript)
