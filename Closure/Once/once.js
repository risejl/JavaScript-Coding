/**
 * @param {Function} fn
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function once(fn) {
  let ranOnce = false;
  let value;

  return function (...args) {
    if (!ranOnce) {
      value = fn.call(this, ...args);
      ranOnce = true;
    }

    return value;
  };
}

// Usage example
function func(num) {
  return num;
}

const onced = once(func);
console.log(onced(1)); // => 1, func called with 1
console.log(onced(2)); // => 1, even 2 is passed, previous result is returned
