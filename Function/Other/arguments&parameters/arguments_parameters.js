/**
 * @param {Function} fn
 * @return {number}
 */

function FunctionLength(fn) {
  return fn.length;
}

// Usage example
function myFunction(a, b, c) {
  console.log(a, b, c);
}

console.log(FunctionLength(myFunction)); // => 3

/**
 * @param {...any} args
 * @return {number}
 */

function numOfArguments(...args) {
  // return args.length;
  return arguments.length;
}

// Usage example
console.log(numOfArguments(1, 2, 3, 4, 5)); // => 5
console.log(numOfArguments()); // => 0
