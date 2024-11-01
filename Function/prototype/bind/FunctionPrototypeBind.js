/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */

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
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42

const jack = {
  age: 21,
  getAge: function () {
    return this.age;
  },
};

// For multiple `.bind()` chaining, only the first one would work
const boundJohnGetAge = john.getAge.myBind(john).myBind(jack);
console.log(boundGetAge()); // 42
