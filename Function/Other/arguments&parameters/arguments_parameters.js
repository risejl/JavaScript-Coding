/**
 * @param {Function} fn
 * @return {number}
 */

// Time: O(1) | Space: O(1)
function functionLength(fn) {
  return fn.length;
}

// Usage example
function myFunction(a, b, c) {
  console.log(a, b, c);
}

console.log(functionLength(myFunction)); // => 3

/**
 * @param {...any} args
 * @return {number}
 */

// Time: O(1) | Space: O(1)
function numOfArguments(...args) {
  return arguments.length;
  // or
  // return args.length;
}

// Usage example
console.log(numOfArguments(1, 2, 3, 4, 5)); // => 5
console.log(numOfArguments()); // => 0
