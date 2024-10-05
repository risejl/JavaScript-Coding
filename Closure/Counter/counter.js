/**
 * @param {number} initialValue
 * @return {Function}
 */

function makeCounter(initialValue = 0) {
  let count = initialValue - 1;

  return function (...args) {
    count += 1;
    return count;
  }
}

// return an object

/**
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */
function makeCounter (initialValue = 0) {
  let count = initialValue;
  
  return {
    get: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initialValue),
  };
}