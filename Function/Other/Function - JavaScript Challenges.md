You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Function/Other).

---

## Function related challenges

---

### Arguments & parameters length

- Arguments are the parameters you pass to an invoked function. You can access it by the "arguments" object.
- Parameters are the parameters a function expects to receive. You can access it by the `.length` property of the function.

```js
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
```

---

### Batch functions

Batching is a common technique for performance optimization. For example, `useState()` hook in React use batching to flush the pending updates to prevent multiple re-rendering [thrashing](<https://en.wikipedia.org/wiki/Thrashing_(computer_science)>)

```js
let executeCount = 0;

const targetFn = async (nums) => {
  executeCount += 1;
  return nums.map((num) => 2 * num + 1);
};

const batcher = (fn, delay = 0) => {
  let nums = [];
  let timer = null;

  return (arr) => {
    nums = nums.concat(arr);

    if (!timer) {
      timer = setTimeout(async () => {
        const result = await fn(nums);
        nums = [];
        timer = null;
        return result;
      }, delay);
    }

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (timer == null) {
          clearInterval(interval);
          resolve(targetFn(nums.slice(-arr.length)));
        }
      }, 10);
    });
  };
};

const batchedFn = batcher(targetFn, 0);

// Usage example
const main = async () => {
  const [result1, result2, result3] = await Promise.all([
    batchedFn([1, 2, 3]),
    batchedFn([4, 5]),
    batchedFn([6, 7]),
  ]);

  console.log(result1, result2, result3); // => [ 3, 5, 7 ] [ 9, 11 ] [ 13, 15 ]
  console.log(executeCount); // => 1
};

main();
```

---

### Compose

The thing to notice is that the functions are invoked in the reverse order of passing.

```js
/**
 * @param {...Functions} fns
 * @return Function
 */

// Time: O(n) | Space: O(1)
function compose(...fns) {
  return function (x) {
    let result = x;

    for (const fn of fns.reverse()) {
      result = fn(result);
    }

    return result;
  };
}

// Usage example
const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2
```

---

### Currying

This challenge is about currying and partial applications.
The idea is to count the number of arguments, if it excels the number of parameters, then invoke the original function with arguments. Otherwise, return a curried function to continue to collect the remaining arguments.

```js
/**
 * @param {Function} fn
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
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

// Time: O(1) | Space: O(1)
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
// Time: O(1) | Space: O(1)
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
```

---

### Koa-compose

Middleware composition used in koa framework. The idea is similar to compose.

```js
/**
 * @param {Array} middlewares
 * @return
 */

function compose(middlewares) {
  return function (context) {
    const dispatch = (index) => {
      if (index === middlewares.length) {
        return Promise.resolve();
      }

      const middleware = middlewares[index];
      return Promise.resolve(middleware(context, () => dispatch(index + 1)));
    };

    return dispatch(0);
  };
}

// Example usage
const m1 = async (_, next) => {
  console.log("Middleware 1 start");
  await next(); // Call the next middleware
  console.log("Middleware 1 end");
};

const m2 = async (_, next) => {
  console.log("Middleware 2 start");
  await next(); // Call the next middleware
  console.log("Middleware 2 end");
};

const m3 = async (_, next) => {
  console.log("Middleware 3 start");
  await next(); // Call the next middleware
  console.log("Middleware 3 end");
};

// Compose the middlewares
const composedMiddleware = compose([m1, m2, m3]);

// Simulate Koa's context and call the composed middleware
composedMiddleware({}, () => Promise.resolve()).then(() => {
  console.log("All middlewares executed");
});

// =>
/*
Middleware 1 start
Middleware 2 start
Middleware 3 start
Middleware 3 end
Middleware 2 end
Middleware 1 end
All middlewares executed
 */
```

---

### Memo

This challenge is about memorization which is a technique for storing expensive computing and saving resources.

You can use a cache `Map` to store the key-value pairs. Each time when invoking the function, check whether arguments are in the keys of cache, if there are, simply return the corresponding value. Otherwise, invoke the function with the new key, return the result, and store it in the cache.

```js
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
```

---

### Partial

This challenge is about partial application.
The solution needs to support placeholder `_`.
The idea is to check the passed parameters, if it is a placeholder, then skip it.

```js
/**
 * @param {Function} fn
 * @param {any[]} args
 * @returns {Function}
 */

// Time: O(1) | Space: O(1)
function partial(fn, ...args) {
  return function (...restArgs) {
    const copyArgs = args.map((arg) => {
      return arg === partial.placeholder ? restArgs.shift() : arg;
    });

    return fn.call(this, ...copyArgs, ...restArgs);
  };
}

partial.placeholder = Symbol();

// Usage example
const func = (...args) => args;
const func123 = partial(func, 1, 2, 3);
console.log(func123(4)); // => [1, 2, 3, 4]
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [The arguments object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Parameter - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
- [Function composition (computer science) - Wikipedia.org](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>)
- [11. what is Composition? create a pipe() - BFE.dev](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)
- [1. implement curry() - BFE.dev](https://bigfrontend.dev/problem/implement-curry)
- [2. implement curry() with placeholder support - BFE.dev](https://bigfrontend.dev/problem/implement-curry-with-placeholder)
- [2. implement curry() with placeholder support - BFE.dev](https://bigfrontend.dev/problem/implement-curry-with-placeholder)
- [Currying - Wikipedia.org](https://en.wikipedia.org/wiki/Currying)
- [14. Implement a general memoization function - `memo()` - BFE.dev](https://bigfrontend.dev/problem/implement-general-memoization-function)
- [122. implement memoizeOne() - BFE.dev](https://bigfrontend.dev/problem/implement-memoizeOne)
- [Memoization - Wikipedia.org](https://en.wikipedia.org/wiki/Memoization)
- [Partial application - Wikipedia.org](https://en.wikipedia.org/wiki/Partial_application)
- [139. implement \_.partial() - BFE.dev](https://bigfrontend.dev/problem/implement-partial)
- [2629. Function Composition - LeetCode](https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2666. Allow One Function Call - LeetCode](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2623. Memoize - LeetCode](https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2703. Return Length of Arguments Passed - LeetCode](https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [Thrashing (computer science) - Wikipedia.org](<https://en.wikipedia.org/wiki/Thrashing_(computer_science)>)
- [Batch processing - Wikipedia.org](https://en.wikipedia.org/wiki/Batch_processing)
