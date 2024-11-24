/**
 * @param {Function} fn
 * @return {Function}
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return curried.bind(this, ...args);
  };
}

// Usage example
// single parameter case
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4)); // => 7
const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // => 7

// fixed parameters case
function addTwo(a, b) {
  return a + b;
}

const curriedAddTwo = curry(addTwo);
console.log(curriedAddTwo(3, 4)); // => 7
console.log(curriedAddTwo(3)(4)); // => 7
const alreadyAddedThreeB = curriedAdd(3);
console.log(alreadyAddedThreeB(4)); // => 7

//-------------------------------------------

/**
 * @param {Function} fn
 * @return {Function}
 */

function curry(fn) {
  return function curried(...args) {
    const bindFn = curried.bind(this, ...args);
    bindFn[Symbol.toPrimitive] = () => fn.call(this, ...args);

    return bindFn;
  };
}

// Usage example
// non-fixed parameters case
function multiply(...numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

const curriedMultiply = curry(multiply);
const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree); // => 3
console.log(multiplyByThree(4)); // => 12

const multiplyByFifteen = multiplyByThree(5);
console.log(multiplyByFifteen); // => 15
console.log(multiplyByFifteen(2)); // => 30

console.log(curriedMultiply(1)(2)(3)(4)); // => 24
console.log(curriedMultiply(1, 2, 3, 4)); // => 24

//-------------------------------------------
// support placeholder "_"
function curry(fn) {
  return function curried(...args) {
    const complete =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder);

    if (complete) {
      return fn.call(this, ...args);
    }

    return function (...newArgs) {
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      );
      return curried(...res, ...newArgs);
    };
  };
}

curry.placeholder = Symbol();
