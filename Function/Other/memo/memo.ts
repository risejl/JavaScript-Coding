function memoize(func: Function): Function {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  }
}

// example
/*
function expensiveFunction(n) {
  console.log('Computing ...');
  return n * 2;
}

const memoizedExpensiveFunction = memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(5)); // Computing... 10
console.log(memoizedExpensiveFunction(5)); // return the cached: Computing... 10
console.log(memoizedExpensiveFunction(10)); // Computing... 20
console.log(memoizedExpensiveFunction(10)); // return the cached: Computing... 20
*/