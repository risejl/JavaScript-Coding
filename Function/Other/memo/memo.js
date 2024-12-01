/**
 * @param {Function} func
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn.call(this, arg);
    cache.set(arg, result);

    return result;
  };
}

// Usage example
function expensiveFunction(n) {
  console.log("Computing...");
  return n * 2;
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // => Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction(5)); // => 10

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveFunction(10)); // => Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveFunction(10)); // => 20

// ----------------------------------------
// When parameters could be array
/**
 * @param {Function} fn
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.call(this, ...args);
    cache.set(key, result);

    return result;
  };
}

// Usage example
function expensiveMul(a, b) {
  console.log("Computing...");
  return a * b;
}

// Create a memoized version of the function.
const memoizedExpensiveMul = memoize(expensiveMul);

// First call (computes and caches the result).
console.log(memoizedExpensiveMul(3, 7)); // => Computing... 21

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveMul(3, 7)); // => 21

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveMul(5, 8)); // => Computing... 40

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveMul(5, 8)); // => 40

/* pass the case for parameters are all empty arrays */

function createKey() {
  let count = 0;
  let map = new Map();

  return function (input) {
    if (map.has(input)) {
      return map.get(input);
    }

    map.set(input, ++count);
    return count;
  };
}

function memoize(fn) {
  const cache = new Map();
  const keyGenerator = createKey();

  return function (...args) {
    const numbers = args.map(keyGenerator);
    const key = numbers.join(",");

    if (cache.has(key)) {
      return cache.get(key);
    }

    const value = fn.call(this, ...args);
    cache.set(key, value);

    return value;
  };
}
