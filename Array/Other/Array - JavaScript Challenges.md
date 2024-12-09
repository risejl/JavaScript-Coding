You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Array/Other).

---

## Array related challenges

---

### ArrayOf

The operations perform array copy.

- Solution 1: `.slice.call()`
- Solution 2: `...` operator
- Solution 3: `Array.from()`

```js
/**
 * @return {Array}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return [].slice.call(arguments);
}

// Solution 2
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return [...arguments];
}

// Solution 3
// Time: O(1) | Space: O(1)
function arrayOf(arr) {
  return Array.from(arguments);
}

// Usage example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = arrayOf(array1, array2);
console.log(combinedArray); // => [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
```

---

### Array to tree

Converting an array to a tree-like structure.

For this challenge, you can use a `Map` to store the all the items for efficient access later.

```js
/**
 * @param {Array} arr
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function arrToTree(arr) {
  const tree = [];
  const hashmap = new Map();

  // create nodes and store references
  arr.forEach((item) => {
    hashmap[item.id] = {
      id: item.id,
      name: item.name,
      children: [],
    };
  });

  // build the tree
  arr.forEach((item) => {
    if (item.parentId === null) {
      tree.push(hashmap[item.id]);
    } else {
      hashmap[item.parentId].children.push(hashmap[item.id]);
    }
  });

  return tree;
}

// Usage example
const flatArray = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 1.1", parentId: 1 },
  { id: 3, name: "Node 1.2", parentId: 1 },
  { id: 4, name: "Node 1.1.1", parentId: 2 },
  { id: 5, name: "Node 2", parentId: null },
  { id: 6, name: "Node 2.1", parentId: 5 },
  { id: 7, name: "Node 2.2", parentId: 5 },
];

const tree = arrToTree(flatArray);

console.log(tree); // => [{ id: 1, name: 'Node 1', children: [ [Object], [Object] ] }, { id: 5, name: 'Node 2', children: [ [Object], [Object] ] }]
```

---

### Array wrapper

In this challenge, the `valueOf()` method should be implemented as the sum of all the elements. The `toString()` method should concatenate all the elements into a string.

```js
class ArrayWrapper {
  constructor(arr) {
    this._arr = arr;
  }

  valueOf() {
    return this._arr.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this._arr.join(",")}]`;
  }
}

// Usage example
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // => 10
console.log(String(obj1)); // => [1,2]
```

---

### Array-like to Array

Similar to the ArrayOf challenge.

```js
/**
 * @param {any} arrayLike
 * @return {Array}
 */

// Time: O(1) | Space: O(1)
function arrayLikeToArray(arrayLike) {
  return Array.from(arrayLike);
}

// Usage example
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
console.log(arrayLikeToArray(arrayLike)); // => ['a', 'b', 'c']
```

---

### Cartesian Product

Backtracking is the method to find all the possible combinations.

```js
/**
 * @param {array} arrs
 * @return {array}
 */

// Time: O(m * n) | Space: O(n)
function generateCombinations(arrs) {
  const result = [];

  function backtrack(start, current) {
    if (start === arrs.length) {
      result.push(current.join(""));
      return;
    }

    for (const item of arrs[start]) {
      current.push(item);
      backtrack(start + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);

  return result;
}

// Usage example
const nestedArray = [
  ["a", "b"],
  [1, 2],
  [3, 4],
];
console.log(generateCombinations(nestedArray)); // => ['a13', 'a14', 'a23', 'a24', 'b13', 'b14', 'b23', 'b24']
```

---

### Chunk

Use `.slice()` to select subarrays with the given size.

```js
/**
 * @template T
 * @param {Array<T>} arr The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */

// Time: O(n) | Space: O(n)
function chunk(arr, size = 1) {
  if (!Array.isArray(arr) || size < 1) {
    return [];
  }

  const newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArray.push(chunk);
  }

  return newArray;
}

// Usage example
console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
```

---

### Complement

Set operations.

Solution 1: `set.difference()`
Solution 2: Set + loop

```js
/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1: set.difference()
// Time: O(1) | Space: O(n)
function difference(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).difference(new Set(values.filter(Boolean)))
  );
}

// Solution 2: Set + loop
// Time: O(n) | Space: O(n)
function difference(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];

    if (
      !valueSet.has(value) &&
      !(value === undefined && !Object.hasOwn(arr, i))
    ) {
      newArray.push(value);
    }
  }

  return newArray;
}

// Usage example
console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]
```

### Decode a message

```js
/**
 * @param {string[][]} message
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function decode(message) {
  if (!message.length || !message[0].length) {
    return "";
  }

  let result = "";
  let row = 0;
  let col = 0;
  let goingDown = true;
  const rows = message.length;
  const cols = message[0].length;

  while (col < cols) {
    result += message[row][col];

    if (goingDown) {
      // Moving down-right
      if (row + 1 >= rows || col + 1 >= cols) {
        goingDown = false;
        row -= 1;
        col += 1;
        continue;
      }
      row += 1;
      col += 1;
    } else {
      // Moving up-right
      if (row - 1 < 0 || col + 1 >= cols) {
        goingDown = true;
        row += 1;
        col += 1;
        continue;
      }
      row -= 1;
      col += 1;
    }
  }

  return result;
}

// Usage example
const message = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decode(message)); // => IROCLED
```

---

Set's difference operation.

```js
/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1: set.difference()
// Time: O(1) | Space: O(n)
function difference(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).difference(new Set(values.filter(Boolean)))
  );
}

// Solution 2: Set + loop
// Time: O(n) | Space: O(n)
function difference(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];

    if (
      !valueSet.has(value) &&
      !(value === undefined && !Object.hasOwn(arr, i))
    ) {
      newArray.push(value);
    }
  }

  return newArray;
}

// Usage example
console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]
```

---

Challenges like finding all the possible combinations can often be solved by backtracking.

```js
/**
 * @param {array} arrs
 * @return {array}
 */

// Time: O(m * n) | Space: O(n)
function generateCombinations(arrs) {
  const result = [];

  function backtrack(start, current) {
    if (start === arrs.length) {
      result.push(current.join(""));
      return;
    }

    for (const item of arrs[start]) {
      current.push(item);
      backtrack(start + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);

  return result;
}

// Usage example
const nestedArray = [
  ["a", "b"],
  [1, 2],
  [3, 4],
];
console.log(generateCombinations(nestedArray)); // => ['a13', 'a14', 'a23', 'a24', 'b13', 'b14', 'b23', 'b24']
```

---

Set operations.

Solution 1: `set.difference()`
Solution 2: Set + loop

```js
/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1: set.difference()
// Time: O(1) | Space: O(n)
function difference(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).difference(new Set(values.filter(Boolean)))
  );
}

// Solution 2: Set + loop
// Time: O(n) | Space: O(n)
function difference(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];

    if (
      !valueSet.has(value) &&
      !(value === undefined && !Object.hasOwn(arr, i))
    ) {
      newArray.push(value);
    }
  }

  return newArray;
}

// Usage example
console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]
```

---

Set operations.

Solution 1: `.union()`
Solution 2: Set + loop

```js
/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function union(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).union(new Set(values.filter(Boolean)))
  );
}

// Solution 2
// Time: O(n) | Space: O(n)
function union(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  valueSet.forEach((item) => {
    newArray.push(item);
  });

  for (let i = 0; i < arr.length; i += 1) {
    if (!valueSet.has(arr[i]) && arr[i] !== undefined) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Usage example
console.log(union([1, 2, 3], [2, 3])); // => [1, 2, 3]
console.log(union([1, 2, 3, 4], [2, 3, 1])); // => [1, 2, 3, 4]
console.log(union([1, 2, 3], [2, 3, 1, 4])); // => [1, 2, 3, 4]
console.log(union([1, , 3], [1])); // => [1, 3]
```

---

### Drop right while

```js
/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */

// Time: O(n) | Space: O(1)
function dropRightWhile(arr, predicate) {
  let index = arr.length - 1;

  while (index >= 0 && predicate(arr[index], index, arr)) {
    index -= 1;
  }

  return arr.slice(0, index + 1);
}

// Usage example
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
```

---

### Drop while

Twin challenge with the dropRightWhile.

```js
/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */

// Time: O(n) | Space: O(1)
function dropWhile(arr, predicate) {
  let index = 0;

  while (index < arr.length && predicate(arr[index], index, arr)) {
    index += 1;
  }

  return arr.slice(index);
}

// Usage example
dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
```

---

### Flatten

```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function flatten(arr) {
  const newArray = [];
  const copy = [...arr];

  while (copy.length) {
    const item = copy.shift();

    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      newArray.push(item);
    }
  }

  return newArray;
}

// Usage example
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
```

---

### Generate a unique random array

```js
/**
 * @param {number} range
 * @param {number} outputCount
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function generateUniqueRandomArray(range, outputCount) {
  const arr = Array.from({ length: range }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < outputCount; i += 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr[randomIndex] = arr.at(-1);
    arr.pop();
  }

  return result;
}

// Usage example
const uniqueRandomNumbers = generateUniqueRandomArray(10, 5);
console.log(uniqueRandomNumbers); // => [3, 7, 1, 9, 5]
```

---

### Intersection By

```js
/**
 * @param {Function} iteratee
 * @param {Array[]} arrays
 * @returns {Array}
 */

// Time: O(n) | Space: O(n)
function intersectionBy(iteratee, ...arrs) {
  if (!arrs.length) {
    return [];
  }

  const mappedArrs = arrs.map((arr) => arr.map(iteratee));
  let intersectedValues = mappedArrs[0].filter((value) => {
    return mappedArrs.every((mappedArr) => mappedArr.includes(value));
  });

  intersectedValues = intersectedValues.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return intersectedValues.map((value) => {
    const index = mappedArrs[0].indexOf(value);
    return arrs[0][index];
  });
}

// Usage example
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]
console.log(result); // => [2.4]

const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ["apple", "banana", "ORANGE", "orange"],
  ["Apple", "Banana", "Orange"]
);
console.log(result2); // => ['apple', 'banana', 'ORANGE']
```

---

### Intersections

Set operations.

Solution 1: `set.intersection()`
Solution 2: Set + loop

```js
/**
 * @param {Array<unknown>[]} arrays - The arrays to find the intersection of.
 * @returns {Array<unknown>} - An array containing the elements common to all input arrays.
 */

// Solution 1: set.intersection()
// Time: O(n) | Space: O(n)
function intersectArrays(...arrs) {
  if (!arrs.length) {
    return [];
  }

  let set = new Set(arrs[0]);

  for (let i = 1; i < arrs.length; i += 1) {
    set = set.intersection(new Set(arrs[i]));
  }

  return Array.from(set);
}

// Solution 2: Set + loop
// Time: O(n) | Space: O(n)
function intersectArrays(...arrs) {
  if (!arrs.length) {
    return [];
  }

  const set = new Set(arrs[0]);

  for (let i = 1; i < arrs.length; i += 1) {
    set.forEach((value) => {
      if (!arrs[i].includes(value)) {
        set.delete(value);
      }
    });
  }

  return Array.from(set);
}

// Usage example
console.log(intersectArrays([1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 6])); // => [3, 4]
```

---

### Mean

Calculating by definition.

```js
/**
 * @param {Array} array
 * @return {Number}
 */

// Time: O(1) | Space: O(1)
function mean(arr) {
  return arr.reduce((sum, number) => sum + number, 0) / arr.length;
}

// Usage example
console.log(mean([1, 2, 3])); // => 2
console.log(mean([1, 2, 3, 4, 5])); // => 3
```

---

### Remove duplicates

Non-duplicate is one of the properties of `Set`.

```js
/**
 * @param {*} arr
 */

// Time: O(1) | Space: O(1)
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Usage example
const inputArray = [1, 2, 3, 2, 1, 4, 5, 6, 5, 4];
const outputArray = removeDuplicates(inputArray);

console.log(outputArray); // => [1, 2, 3, 4, 5, 6]
```

---

### Shuffle

Fisher-Yates algorithm.

```js
/**
 * @param {any[]} arr
 * @returns {void}
 */

// Time: O(n) | Space: O(n)
function shuffle(arr) {
  if (arr.length < 1) {
    return [];
  }

  for (let i = 0; i < arr.length; i += 1) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    [arr[randIdx], arr[i]] = [arr[i], arr[randIdx]];
  }

  return arr;
}

// Usage example
console.log(shuffle([1, 2, 3, 4])); // => [*, *, *, *]
```

---

### SortBy

`Array.prototype.sort()` accepts a comparing function.

```js
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// Time: O(1) | Space: O(1)
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// Usage example
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // => [1, 2, 3, 4, 5]
```

---

### Tree to array

It's a reverse problem of array to tree.

```js
/**
 * @param {Array} tree
 * @param {number} parentId
 * @return {Array}
 */

// Time: O(n) | Space: O(h)
function treeToArr(tree, parentId = null) {
  const arr = [];

  tree.forEach((node) => {
    const { id, name } = node;
    arr.push({ id, name, parentId });

    // recursive
    if (node.children && node.children.length > 0) {
      arr.push(...treeToArr(node.children, id));
    }
  });

  return arr;
}

// Usage example
const tree = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
        children: [
          {
            id: 4,
            name: "Node 1.1.1",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "Node 1.2",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: "Node 2",
    children: [
      {
        id: 6,
        name: "Node 2.1",
        children: [],
      },
      {
        id: 7,
        name: "Node 2.2",
        children: [],
      },
    ],
  },
];
const flatArray = treeToArr(tree);
console.log(flatArray);
/*
[
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 1.1', parentId: 1 },
  { id: 4, name: 'Node 1.1.1', parentId: 2 },
  { id: 3, name: 'Node 1.2', parentId: 1 },
  { id: 5, name: 'Node 2', parentId: null },
  { id: 6, name: 'Node 2.1', parentId: 5 },
  { id: 7, name: 'Node 2.2', parentId: 5 }
]
*/
```

---

### Union

Set operations.

Solution 1: `set.union()`
Solution 2: Set + loop

```js
/**
 * @param {Array} array
 * @param {Array} values
 * @return {Array}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function union(arr, values) {
  return Array.from(
    new Set(arr.filter(Boolean)).union(new Set(values.filter(Boolean)))
  );
}

// Solution 2
// Time: O(n) | Space: O(n)
function union(arr, values) {
  const newArray = [];
  const valueSet = new Set(values);

  valueSet.forEach((item) => {
    newArray.push(item);
  });

  for (let i = 0; i < arr.length; i += 1) {
    if (!valueSet.has(arr[i]) && arr[i] !== undefined) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Usage example
console.log(union([1, 2, 3], [2, 3])); // => [1, 2, 3]
console.log(union([1, 2, 3, 4], [2, 3, 1])); // => [1, 2, 3, 4]
console.log(union([1, 2, 3], [2, 3, 1, 4])); // => [1, 2, 3, 4]
console.log(union([1, , 3], [1])); // => [1, 3]
```

---

### Reference

- [2695. Array Wrapper - LeetCode](https://leetcode.com/problems/array-wrapper/)
- [2677. Chunk Array - LeetCode](https://leetcode.com/problems/chunk-array/)
- [2724. Sort By - LeetCode](https://leetcode.com/problems/sort-by/)
- [2625. Flatten Deeply Nested Array - LeetCode](https://leetcode.com/problems/flatten-deeply-nested-array/)
- [3. implement Array.prototype.flat() - BFE.dev](https://bigfrontend.dev/problem/implement-Array-prototype.flat)
- [131. implement \_.chunk() - BFE.dev](https://bigfrontend.dev/problem/implement-lodash-chunk)
- [8. can you shuffle() an array? - BFE.dev](https://bigfrontend.dev/problem/can-you-shuffle-an-array)
- [384. Shuffle an Array - LeetCode](https://leetcode.com/problems/shuffle-an-array/)
- [138. Intersection of two sorted arrays - BFE.dev](https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays)
- [167. Intersection of unsorted arrays - BFE.dev](https://bigfrontend.dev/problem/array-intersect)
- [66. remove duplicates from an array - BFE.dev](https://bigfrontend.dev/problem/remove-duplicates-from-an-array)
- [9. decode message - BFE.dev](https://bigfrontend.dev/problem/decode-message)
- [Array.prototype.sort() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Cartesian product - Wikipedia.org](https://en.wikipedia.org/wiki/Cartesian_product)
- [Complement (set theory) - Wikipedia.org](<https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement>)
- [Union (set theory) - Wikipedia.org](<https://en.wikipedia.org/wiki/Union_(set_theory)>)
- [Intersection (set theory) - Wikipedia.org](<https://en.wikipedia.org/wiki/Intersection_(set_theory)>)
- [Set.prototype.difference() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference)
- [Set.prototype.intersection() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection)
- [Set.prototype.union() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union)
