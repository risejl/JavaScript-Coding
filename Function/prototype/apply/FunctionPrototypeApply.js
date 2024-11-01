/**
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */

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
