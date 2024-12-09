You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Closure).

---

## Closure related challenges

Closure means you always need to return a function.

---

### Add

The `sum` variable stores the accumulated result. Returns a function to collect more parameters.

```js
/**
 * @param  {...any} args
 * @return {Function | number}
 */

// Time: O(1) | Space: O(1)
function add(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function innerAdd(...moreArgs) {
    sum += moreArgs.reduce((acc, val) => acc + val, 0);
    return innerAdd;
  }
  innerAdd.getValue = function () {
    return sum;
  };

  return innerAdd;
}

// Usage example
console.log(add(1).getValue()); // => 1
console.log(add(1)(2).getValue()); // => 3
console.log(add(1)(2)(3).getValue()); // => 6
console.log(add(1)(2, 3).getValue()); // => 6
console.log(add(1, 2)(3).getValue()); // => 6
console.log(add(1, 2, 3).getValue()); // => 6
```

---

### Counter

The inner function can access the `count` variable.

```js
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
```

---

### Cycle

The inner function can access the `index` variable.

```js
/**
 * @template T
 * @param  {...T} values
 * @returns () => T
 */

// Time: O(1) | Space: O(1)
function cycle(...values) {
  let index = -1;

  return function (...args) {
    index = (index + 1) % values.length;
    return values[index];
  };
}

// Usage example
const helloFn = cycle("hello");
console.log(helloFn()); // => "hello"
console.log(helloFn()); // => "hello"

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // => "on"
console.log(onOffFn()); // => "off"
console.log(onOffFn()); // => "on"
```

---

### Hello World

Returns a function which returns "Hello World".

```js
/**
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

// Usage example
const output = createHelloWorld();
console.log(output()); // => "Hello World"
```

---

### Limit

The inner function can access the `count` variable.

```js
/**
 * @param {Function} func
 * @param {Number} count
 * @return {Function}
 */

// Time: O(1) | Space: O(1)
function limit(fn, max) {
  let count = 0;
  let value;

  return function (...args) {
    if (count < max) {
      value = fn.call(this, ...args);
      count += 1;
    }

    return value;
  };
}

// Usage example
let i = 1;
function incrementBy(value) {
  i += value;
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 3);
console.log(incrementByAtMostThrice(2)); // i is now 3; The function returns 3.
console.log(incrementByAtMostThrice(3)); // i is now 6; The function returns 6.
console.log(incrementByAtMostThrice(4)); // i is now 10; The function returns 10.
console.log(incrementByAtMostThrice(5)); // i is still 10 as this is the 4th invocation; The function returns 10 as it's the result of the last invocation.
i = 4;
console.log(incrementByAtMostThrice(2)); // i is still 4 as it is not modified. The function still returns 10.
```

---

### Once

The inner function can access the boolean `ranOnce` variable.

```js
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
```

---

### Sum

```js
/**
 * @param {number} num
 */

// Time: O(1) | Space: O(1)
function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };

  func.valueOf = () => num;
  return func;
}

// Usage example
const sum1 = sum(1);
console.log(sum1(2) == 3); // => true
console.log(sum1(3) == 4); // => true
console.log(sum(1)(2)(3) == 6); // => true
console.log(sum(5)(-1)(2) == 6); // => true
```

---

### To be or not to be

```js
/**
 * @param {any} val
 * @return {true | Error}
 */

// Time: O(1) | Space: O(1)
function expect(val) {
  return {
    toBe: function (arg) {
      if (val === arg) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (arg) {
      if (val !== arg) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Usage example
expect(5).toBe(5); // Passes
expect(5).notToBe(6); // Passes

try {
  expect(5).toBe(6); // Throws an error
} catch (error) {
  console.log(error.message); // Not Equal
}
```

---

## Reference

- [Closure (computer programming) - Wikipedia.org](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>)
- [148. create a counter object - BFE.dev](https://bigfrontend.dev/problem/create-a-counter-object)
- [2620. Counter - LeetCode](https://leetcode.com/problems/counter/)
- [2665. Counter II - LeetCode](https://leetcode.com/problems/counter-ii/description/)
- [2665. Counter II - LeetCode](https://leetcode.com/problems/counter-ii/description/)
- [GreatFrontEnd](https://www.greatfrontend.com/)
- [2667. Create Hello World Function - LeetCode](https://leetcode.com/problems/create-hello-world-function/description/)
- [23. create a sum() - BFE.dev](https://bigfrontend.dev/problem/create-a-sum)
- [46. implement `_.once()` - BFE.dev](https://bigfrontend.dev/problem/implement-once)
- [2704. To Be Or Not To Be - BFE.dev](https://leetcode.com/problems/to-be-or-not-to-be/)
- [161. toBe() or not.toBe() - BFE.dev](https://bigfrontend.dev/problem/jest-assertion)
- ["Hello, World!" program - Wikipedia.org](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)
