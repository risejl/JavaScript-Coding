/**
 * @param {number} initialValue
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function makeCounter(initialValue = 0) {
  let count = initialValue - 1;

  return function (...args) {
    count += 1;
    return count;
  };
}

// Usage example
const counter = makeCounter(0);
console.log(counter()); // => 0
console.log(counter()); // => 1
console.log(counter()); // => 2

//------------------------------
// return an object
/**
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */

// Time: O(1) | Space: O(1)
function makeCounter(initialValue = 0) {
  let count = initialValue;

  return {
    get: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initialValue),
  };
}

// Usage example
const counterObj = makeCounter(0);
console.log(counterObj.get()); // => 0
counterObj.increment();
console.log(counterObj.get()); // => 1
counterObj.decrement();
counterObj.reset();
console.log(counterObj.get()); // => 0
