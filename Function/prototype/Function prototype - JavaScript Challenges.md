You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Function/prototype).

---

## Function prototype related challenges

---

### `Function.prototype.call()`

Solution 1: use `Function.prototype.apply()`
Solution 2: use `Symbol`

```js
/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */

// Solution 1
// Time: O(1) | Space: O(1)
Function.prototype.myCall = function (thisArg, ...args) {
  return this.apply(thisArg, args);
};

// Solution 2
// Time: O(1) | Space: O(1)
Function.prototype.myCall = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);

  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
};

// Usage example
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary)); // => 21
console.log(multiplyAge.myCall(john, 2)); // => 84
```

---

### `Function.prototype.apply()`

Solution 1: use `Function.prototype.call()`
Solution 2: use `Symbol`

```js
/**
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */

// Solution 1
// Time: O(1) | Space: O(1)
Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};

// Solution 2
// Time: O(1) | Space: O(1)
Function.prototype.myApply = function (thisArg, argArray = []) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);

  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
};

// Usage example
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myApply(mary)); // => 21
console.log(multiplyAge.myApply(john, [2])); // => 84
```

---

### `Function.prototype.bind()`

Solution 1: use `Function.prototype.call()`
Solution 2: use `Function.prototype.apply()`
Solution 3: use `Symbol`

```js
/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */

// Solution 1
// Time: O(1) | Space: O(1)
Function.prototype.myBind = function (thisArg, argArray) {
  return (...innerArgs) => {
    return this.call(thisArg, ...argArray, ...innerArgs);
  };
};

// Solution 2
// Time: O(1) | Space: O(1)
Function.prototype.myBind = function (thisArg, argArray = []) {
  return (...innerArgs) => {
    return this.apply(thisArg, [...argArray, ...innerArgs]);
  };
};

// Solution 3
// Time: O(1) | Space: O(1)
Function.prototype.myBind = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);

  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return function (...args) {
    return wrapperObj[sym](...argArray, ...args);
  };
};

// Usage example
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // => undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // => 42

const jack = {
  age: 21,
  getAge: function () {
    return this.age;
  },
};

// For multiple `.bind()` chaining, only the first one would work
const boundJohnGetAge = john.getAge.myBind(john).myBind(jack);
console.log(boundGetAge()); // => 42
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [61. create your own `Function.prototype.call` - BFE.dev](https://bigfrontend.dev/problem/create-call-method)
- [Function.prototype.call() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
