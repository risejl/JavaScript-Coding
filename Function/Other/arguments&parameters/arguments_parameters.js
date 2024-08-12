/**
 * @param  {...any} args 
 * @return {number}
 */
function argumentsLength(...args) {
  return arguments.length;
};

/**
 * @param {Function} fn 
 * @return {number}
 */
function functionLength(fn) {
  return fn.length;
}

// example
/*
console.log(argumentsLength(1, 2, 3)); // 3
console.log(functionLength((a, b) => a + b)); // 2
*/