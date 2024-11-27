You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Array/prototype).

---

## Array prototype related challenges

Something to notice:

- Use `this` within the function to access the original array.
- For some methods, copy the original array first and then modify the copied array.
- When iterating over the array, use `Object.hasOwn()` to check if the index exists.
- The parameters order of the callback function is: `(element, index, array)`.

---

### `Array.prototype.at()`

Use `(index + len) % len` to support a negative index.

```js
/**
 * @param {number} index
 * @return {any | undefiend}
 */

// Time: O(1) | Space: O(1)
Array.prototype.myAt = function (index) {
  const len = this.length;

  if (index < -len || index >= len) {
    return;
  }

  return this[(index + len) % len];
};

// Usage example
console.log([1, 2, 3, 4].myAt(2)); // => 3
console.log([1, 2, 3, 4].myAt(-1)); // => 4
console.log([1, 2, 3, 4].myAt(5)); // => undefined
```

---

### `Array.prototype.concat()`

Copy the original array first and add the rest arrays.

```js
/**
 * @template T
 * @param {...(T | Array<T>)} itemes
 * @return {Array<T>}
 */

// Time: O(n) | Space: O(n)
Array.prototype.myConcat = function (...items) {
  const newArray = [...this];

  for (const item of items) {
    if (Array.isArray(item)) {
      newArray.push(...item);
    } else {
      newArray.push(item);
    }
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3].myConcat([])); // => [1, 2, 3];
console.log([1, 2, 3].myConcat([4, 5, 6, [2]])); // => [1, 2, 3, 4, 5, 6, [2]];
```

---

### `Array.prototype.every()`

Use a flag variable.

```js
/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {boolean}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myEvery = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = true;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i) && !callbackFn.call(thisArg, this[i], i, this)) {
      flag = false;
      break;
    }
  }

  return flag;
};

// Usage example
console.log([1, 2, 3].myEvery((item) => item > 2)); // => false
console.log([1, 2, 3].myEvery((item) => item > 0)); // => true
```

---

### `Array.prototype.filter()`

Use the callback function as the conditional filter function.

```js
/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param { any } [thisArg]
 * @return {Array<T>}
 */

// Time: O(n) | Space: O(n)
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0)); // => [2, 4]
console.log([1, 2, 3, 4].myFilter((value) => value < 3)); // => [1, 2]
```

---

### `Array.prototype.flat()`

Recursively flatten the given array based on the depth.

```js
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

// Time: O(n) | Space: O(n)
function flatten(arr, depth = 1) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i]) && depth !== 0) {
      newArray.push(...flatten(arr[i], depth - 1));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Usage example
const array = [[1, 2], [1], 1, [[[1]]]];
console.log(flatten(array)); // => [ 1, 2, 1, 1, [ [ 1 ] ] ]
```

---

### `Array.prototype.forEach()`

Invoking callback function on every item in the array.

```js
/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myForEach = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const O = Object(this);
  // Zero-fill Right Shift to ensure that the result if always non-negative.
  const len = O.length >>> 0;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(O, i)) {
      callbackFn.call(thisArg, O[i], i, O);
    }
  }
};

// Usage example
console.log(
  [1, 2, 3].myForEach((el) => el * el),
  null
); // => [1, 4, 9];
```

---

### `Array.prototype.indexOf()`

Iterates over the array to find the index of the first occurrence of the specified element.

```js
/**
 * @param {any} searchElement
 * @param {number} fromIndex
 * @return {number}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  const len = this.length;

  if (fromIndex < 0) {
    fromIndex = Math.max(0, fromIndex + this.length);
  }

  for (let i = fromIndex; i < len; i += 1) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

// Usage example
console.log([1, 2, 3, 4, 5].myIndexOf(3)); // => 2
console.log([1, 2, 3, 4, 5].myIndexOf(6)); // => -1
console.log([1, 2, 3, 4, 5].myIndexOf(1)); // => 0
console.log(["a", "b", "c"].myIndexOf("b")); // => 1
console.log([NaN].myIndexOf(NaN)); // => -1 (since NaN !== NaN)
```

---

### `Array.prototype.last()`

Return the last element in the array.

```js
/**
 * @return {null|boolean|number|string|Array|Object}
 */

// Time: O(1) | Space: O(1)
Array.prototype.myLast = function () {
  return this.length ? this.at(-1) : -1;
  // or
  // return this.length ? this[this.length - 1] : -1;
};

// Usage example
console.log([].myLast()); // => -1;
console.log([1].myLast()); // => 1
console.log([1, 2].myLast()); // => 2
```

---

### `Array.prototype.map()`

Similar to `.forEach()` but returns a new array.

```js
/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */

// Time: O(n) | Space: O(n)
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = Array.from({ length: len });

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i)) {
      newArray[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3, 4].myMap((i) => i)); // => [1, 2, 3, 4]
console.log([1, 2, 3, 4].myMap((i) => i * i)); // => [1, 4, 9, 16])
```

---

### `Array.prototype.reduce()`

Invoking the callback function on the accumulator.

```js
/**
 * @template T, U
 * @param { (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U } callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */

// Time: O(n) | Space: O(1)
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = initialValue !== undefined;
  const len = this.length;

  if (!hasInitialValue && !len) {
    throw new Error("Reduce of empty array with no initial value");
  }

  let accumulator = hasInitialValue ? initialValue : this[0];
  let startingIndex = hasInitialValue ? 0 : 1;

  for (let i = startingIndex; i < len; i += 1) {
    if (Object.hasOwn(this, i)) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Usage example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // => 15
const products = numbers.myReduce((acc, num) => acc * num, 1);
```

---

### `Array.prototype.some()`

The solution structure is similar to `.every()`.
Use a flag variable.

```js
/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {boolean}
 */

// Time: O(n) | Space: O(1)
Array.prototype.mySome = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = false;

  for (let i = 0; i < len; i += 1) {
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      flag = true;
      break;
    }
  }

  return flag;
};

// Usage example
console.log([1, 2, 3].mySome((item) => item > 2)); // => true
console.log([1, 2, 3].mySome((item) => item < 0)); // => false
```

---

### `Array.prototype.square()`

The solution structure is similar to `.map()`.

```js
/**
 * @return {Array<number>}
 */

// Time: O(n) | Space: O(n)
Array.prototype.mySquare = function () {
  const len = this.length;
  const newArray = Array.from({ length: len });

  for (let i = 0; i < len; i += 1) {
    newArray[i] = this[i] * this[i];
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3].mySquare()); // => [1, 4, 9];
console.log([].mySquare()); // => [];
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [Array.prototype.at() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [Array.prototype.concat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Array.prototype.every() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.filter() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.flat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Array.prototype.forEach() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.indexOf() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.some() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [2635. Apply Transform Over Each Element in Array - LeetCode](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)
- [2634. Filter Elements from Array - LeetCode](https://leetcode.com/problems/filter-elements-from-array/)
- [2626. Array Reduce Transformation - LeetCode](https://leetcode.com/problems/array-reduce-transformation/)
- [2619. Array Prototype Last - LeetCode](https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2625. Flatten Deeply Nested Array - LeetCode](https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [3. implement Array.prototype.flat() - BFE.dev](https://bigfrontend.dev/problem/implement-Array-prototype.flat)
- [151. implement Array.prototype.map() - BFE.dev](https://bigfrontend.dev/problem/implement-Array-prototype-map)
- [146. implement Array.prototype.reduce() - BFE.dev](https://bigfrontend.dev/problem/implement-Array-prototype-reduce)
