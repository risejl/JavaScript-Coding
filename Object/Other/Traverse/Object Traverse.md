You can find all the code in this post in the repo [Github](https://github.com/mitchell-cheng/JavaScript-Coding/tree/main/Object/Other/Traverse).

---

## Object traverse related challenges

The following challenges are essentially about object key&value traversal.

---

### Chaining

It's like object key&value depth-first traversal.

```js
/**
 * @param {object} obj
 * @param {string} start
 * @return
 */

function format(obj, start) {
  let result = "";
  let current = start;

  while (current) {
    const entry = obj.find((item) => item.source === current);

    if (entry) {
      result += current;
      current = entry.target;
    } else {
      break;
    }
  }

  result += current;
  return result;
}

// Usage example
const origin = [
  { source: "b", target: "c" },
  { source: "a", target: "b" },
  { source: "c", target: "d" },
];

console.log(format(origin, "a")); // => "abcd"
```

---

### Compact

Filtering the falsy values of the object.

```js
/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */

function compact(arr) {
  const newArray = [];

  for (const item of arr) {
    if (item) {
      newArray.push(item);
    }
  }

  return newArray;
}

// Usage example
console.log(compact([0, 1, false, 2, "", 3, null])); // => [1, 2, 3]
console.log(compact(["hello", 123, [], {}, function () {}])); // => ['hello', 123, [], {}, function() {}]

// handle circular reference

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const compactArr = [];

    obj.forEach((item) => {
      if (item) {
        compactArr.push(compactObject(item));
      }
    });

    return compactArr;
  }

  const compactObj = Object.create(null);
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      compactObj[key] = compactObject(value);
    }
  });

  return compactObj;
}

// Usage example
console.log(compact([0, 1, false, 2, "", 3, null])); // => [1, 2, 3]
console.log(compact({ foo: true, bar: null })); // => { foo: true }
```

---

### Count by

A common pattern to count the result of the function call.

```js
/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */

function countBy(arr, iteratee) {
  const result = Object.create(null);

  for (const item of arr) {
    const key = String(iteratee(item));
    result[key] ??= 0;
    result[key] += 1;
  }

  return result;
}

// Usage example
console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': 1, '6': 2 }
console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n)); // => { '3': 2, '5': 1 }
console.log(countBy([], (o) => o)); // => {}
console.log(countBy([{ n: 1 }, { n: 2 }], (o) => o.m)); // => { undefined: 2 }
```

---

### Deep clone

Deep clone means the modifications to one object doesn't affect the other since they reference the different addresses.

Four ways:

1. `structuredClone()` Web API
2. `JSON.parse(JSON.stringify())`, can't not handle circular references
3. `lodash._cloneDeep()`
4. Implement by your self. Notes:
   1. use a `Map()` or `Set()` to handle circular refernences
   2. use `Reflect.ownKeys()` to get all the properties of an object

```js
/**
 * @template T
 * @param {T} value
 * @return {T}
 */

// I: `use structuredClone API`

// II: use `JSON.parse(JSON.stringify(value))`

// III: use `lodash._cloneDeep()`

// IV:
// Handle primitive types and functions
function isPrimitiveTypeOrFunction(value) {
  return (
    typeof value !== "object" || value === null || typeof value === "function"
  );
}

// Check types
function getType(value) {
  const type = typeof value;

  // primitive
  if (type !== "object") {
    return type;
  }

  // non-primitive
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// deep clone
function deepClone(value) {
  // check circular reference
  return deepCloneImpl(value, new Map());
}

function deepCloneImpl(value, cache) {
  // primitive case
  if (isPrimitiveTypeOrFunction(value)) {
    return value;
  }

  // get type
  const type = getType(value);

  // set
  if (type === "set") {
    const cloned = new Set();
    value.forEach((item) => {
      cloned.add(deepCloneImpl(item, cache));
    });

    return cloned;
  }

  // map
  if (type === "map") {
    const cloned = new Map();
    value.forEach((value_, key) => {
      cloned.set(key, deepCloneImpl(value_, cache));
    });

    return cloned;
  }

  // date
  if (type === "date") {
    return new Date(value);
  }

  // function
  if (type === "function") {
    return value;
  }

  // regexp
  if (type === "regexp") {
    return new RegExp(value);
  }

  // array
  if (Array.isArray(value)) {
    return value.map((item) => deepCloneImpl(item, cache));
  }

  // circular reference
  if (cache.has(value)) {
    return cache.get(value);
  }

  // object
  const cloned = Object.create(Object.getPrototypeOf(value));
  cache.set(value, cloned);

  for (const key of Reflect.ownKeys(value)) {
    const item = value[key];
    cloned[key] = isPrimitiveTypeOrFunction(item)
      ? item
      : deepCloneImpl(item, cache);
  }

  return cloned;
}

// Usage example
const obj1 = {
  num: 0,
  str: "",
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: "foo", id: 1 },
  arr: [0, 1, 2],
  date: new Date(),
  reg: new RegExp("/bar/ig"),
  [Symbol("s")]: "baz",
};

const clonedObj1 = deepClone(obj1);
clonedObj1.arr.push(3);
console.log(obj1.arr); // => [0, 1, 2]

const obj2 = { a: {} };
obj2.a.b = obj2; // Circular reference

const clonedObj2 = deepClone(obj2); // Should not cause a stack overflow by recursing into an infinite loop.

clonedObj2.a.b = "something new";

console.log(obj2.a.b === obj2); // => true
```

---

### Deep equal

```js
function shouldDeepCompare(type) {
  return type === "[object Object]" || type === "[object Array]";
}

function getType(value) {
  return Object.prototype.toString.call(value);
}

/**
 * @param {*} valueA
 * @param {*} valueB
 * @returns
 */
function deepEqual(valueA, valueB) {
  const typeA = getType(valueA);
  const typeB = getType(valueB);

  if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);

    if (entriesA.length !== entriesB.length) {
      return false;
    }

    return entriesA.every(
      ([key, value]) =>
        Object.hasOwn(valueB, key) && deepEqual(value, valueB[key])
    );
  }

  return Object.is(valueA, valueB);
}

// Usage example
console.log(deepEqual("foo", "foo")); // true
console.log(deepEqual({ id: 1 }, { id: 1 })); // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([{ id: "1" }], [{ id: "2" }])); // false
```

---

### Deep merge

```js
function isPlainObject(value) {
  if (value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

/**
 * @param {Object|Array} valueA
 * @param {Object|Array} valueB
 * @returns Object|Array
 */
function deepMerge(valueA, valueB) {
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    return [...valueA, ...valueB];
  }

  if (isPlainObject(valueA) && isPlainObject(valueB)) {
    const newObj = { ...valueA };

    for (const key in valueB) {
      if (Object.prototype.hasOwnProperty.call(valueA, key)) {
        newObj[key] = deepMerge(valueA[key], valueB[key]);
      } else {
        newObj[key] = valueB[key];
      }
    }

    return newObj;
  }

  return valueB;
}

// Usage example
console.log(deepMerge({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(deepMerge({ a: 1 }, { a: 2 })); // { a: 2 }
console.log(deepMerge({ a: 1, b: [2] }, { b: [3, 4] })); // { a: 1, b: [2, 3, 4] }
```

---

### Deep omit && emitBy

```js
/**
 * @param {object} obj
 * @param {array} []
 * @return {object}
 */

function omit(obj, keys) {
  const keysSet = new Set(keys);

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysSet.has(key))
  );
}

/**
 * @param {object} obj
 * @param {function} callbackFn
 * @return {object}
 */

function omitBy(obj, callbackFn) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => !callbackFn(value, key))
  );
}

// Usage example
const object = {
  a: 3,
  b: 4,
  c: 5,
};

console.log(omit(object, ["a", "b"])); // => { c: 5 }

console.log(omitBy(object, (value) => value === 3)); // => { b: 4, c: 5 }
```

---

### Is object empty

```js
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

function isObjectEmpty(obj) {
  for (const _ in obj) {
    return false;
  }

  return true;
}

// Usage example
const emptyObj = Object.create(null);
const emptyObjLiteral = {};
const nonEmptyObj = {
  name: "Jack",
};
console.log(isObjectEmpty(emptyObj)); // true
console.log(isObjectEmpty(emptyObjLiteral)); // true
console.log(isObjectEmpty(nonEmptyObj)); // false
```

---

### Get

```js
/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */

function get(objectParam, pathParam, defaultValue) {
  // Convert pathParam to array
  const path = Array.isArray(pathParam)
    ? pathParam
    : pathParam.replaceAll("[", ".").replaceAll("]", "").split(".");

  if (path.length === 0) {
    return defaultValue;
  }

  let obj = objectParam;

  for (const key of path) {
    if (obj === null || obj[key] === undefined) {
      return defaultValue;
    }

    obj = obj[key];
  }

  return obj;
}

// Usage example
const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

const jane = {
  profile: {
    age: 19,
    gender: "Female",
  },
};

console.log(get(john, "profile.name.firstName")); // => 'John'
console.log(get(john, "profile.gender")); // => 'Male'
console.log(get(jane, "profile.name.firstName")); // => undefined

console.log(get({ a: [{ b: { c: 3 } }] }, "a.0.b.c")); // => 3
```

---

### Does object has any properties

```js
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

function isObjectEmpty(obj) {
  for (const _ in obj) {
    return false;
  }

  return true;
}

// Usage example
const emptyObj = Object.create(null);
const emptyObjLiteral = {};
const nonEmptyObj = {
  name: "Jack",
};
console.log(isObjectEmpty(emptyObj)); // true
console.log(isObjectEmpty(emptyObjLiteral)); // true
console.log(isObjectEmpty(nonEmptyObj)); // false
```

---

### Key By

```js
/**
 * @param {Array} collection
 * @param {Function} iteratee
 * @return {Object}
 */

function keyBy(collection, iteratee) {
  return collection.reduce((result, item) => {
    const key = iteratee(item);
    result[key] = item;

    return result;
  }, {});
}

// Example usage
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Using keyBy to group users by their names
const groupedByName = keyBy(users, (user) => user.name);
console.log(groupedByName);
/*
Output:
{
  Alice: { id: 1, name: 'Alice' },
  Bob: { id: 2, name: 'Bob' },
  Charlie: { id: 3, name: 'Charlie' }
}
*/

// Using keyBy to group users by their IDs
const groupedById = keyBy(users, (user) => user.id);
console.log(groupedById);
/*
Output:
{
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Charlie' }
}
*/
```

---

### Max By

```js
/**
 * @param {Array} arr
 * @param {Function} callbackFn
 * @return {Array}
 */

function maxBy(arr, callbackFn) {
  if (arr.length === 0) {
    return [];
  }

  const values = arr.map(callbackFn);
  const maxValue = Math.max(...values);
  return arr.filter((_, index) => values[index] === maxValue);
}

// Example usage:
const data = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 5 }];

const result = maxBy(data, (item) => item.a);
console.log(result); // Output: [{ a: 5 }, { a: 5 }]
```

---

### Object map

```js
/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
function objectMap(obj, fn) {
  const result = {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      result[key] = fn.call(obj, obj[key]);
    }
  }

  return result;
}

// Usage example
const double = (x) => x * 2;
console.log(objectMap({ foo: 1, bar: 2 }, double)); // => { foo: 2, bar: 4}
```

---

### Object to array

```js
/**
 * @param {object} obj
 * @return {Array}
 */

function objToArr(obj) {
  return Object.keys(obj).reduce((value, key) => {
    const op = Object.keys(obj[key])[0];
    value.push({
      key: key,
      op: op,
      value: obj[key][op],
    });

    return value;
  }, []);
}

// Usage example
const obj = {
  key1: {
    op1: "value1",
  },
  key2: {
    op2: "value2",
  },
};

console.log(objToArr(obj));
/*
[
  { key: 'key1', op: 'op1', value: 'value1' },
  { key: 'key2', op: 'op2', value: 'value2' }
]
*/
```

---

### Set

```js
/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */

function set(obj, path, value) {
  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  for (let i = 0; i < path.length - 1; i += 1) {
    let nextPath = path[i + 1];
    const newObj = "" + +nextPath === nextPath ? [] : {};

    if (!obj[path[i]]) {
      obj[path[i]] = newObj;
    }
    obj = obj[path[i]];
  }

  obj[path.at(-1)] = value;
}

// Usage example
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

set(obj, "a.b.c", "BFE");
console.log(obj.a.b.c); // => "BFE"
set(obj, "a.b.c.0", "BFE");
console.log(obj.a.b.c[0]); // => "B"
```

---

### Set object value

```js
/**
 * @param {Object} obj
 * @param {Array} keys
 * @param {any} value
 * @returns
 */

function setObjectValue(obj, keys, value) {
  let currentObj = obj;

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    // Check if the current object is null or undefined
    if (currentObj === null || currentObj === undefined) {
      return obj; // Return the original object if any part of the path is null or undefined
    }

    // If it's the last key, set the value
    if (i === keys.length - 1) {
      currentObj[key] = value;
    } else {
      // Create a new object if the current key doesn't exist or is not an object
      if (
        typeof currentObj[key] !== "object" ||
        Array.isArray(currentObj[key])
      ) {
        currentObj[key] = {};
      }

      // Move to the next part of the path
      currentObj = currentObj[key];
    }
  }

  return obj;
}

// Usage example
const obj = {
  a: {
    b: {
      c: 42,
    },
  },
};

const updatedObj = setObjectValue(obj, ["a", "b", "c"], 100);
console.log(updatedObj); // => { a: { b: { c: 100 } } }

const anotherObj = {
  x: {
    y: null,
  },
};

const updatedAnotherObj = setObjectValue(anotherObj, ["x", "y", "z"], "value");
console.log(updatedAnotherObj); // => { x: { y: null } } (original object returned because 'y' is null);
```

---

### Squash object

```js
/**
 * @param {Object} obj
 * @return {Object}
 */
function squashObject(obj) {
  const outObj = {};

  function squashImpl(obj_, path, output) {
    for (const [key, value] of Object.entries(obj_)) {
      if (typeof value !== "object" || value === null) {
        output[path.concat(key).filter(Boolean).join(".")] = value;
      } else {
        squashImpl(value, path.concat(key), output);
      }
    }
  }

  squashImpl(obj, [], outObj);

  return outObj;
}

// Usage example
const object = {
  foo: {
    "": { "": 1, bar: 2 },
  },
};
console.log(squashObject(object)); // { foo: 1, 'foo.bar': 2 }
```

---

### Shallow copy

```js
/**
 * @param {Object} obj
 * @return {Object}
 */
function shallowClone(obj) {
  const copyObj = {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      copyObj[key] = obj[key];
    }
  }

  return copyObj;
}

// Usage example
const obj = {
  name: "Mike",
  age: 25,
};

const nestedObj = {
  name: "Mike",
  address: {
    state: "NY",
    city: "NYC",
  },
};

console.log(shallowClone(obj)); // => { name: 'Mike', age: 25 }
console.log(shallowClone(nestedObj)); // => { name: 'Mike', address: { state: 'NY', city: 'NYC' } }
```

---

## Reference

- [GreatFrontEnd](https://www.greatfrontend.com/)
- [63. create `_.cloneDeep()` - BFE.dev](https://bigfrontend.dev/problem/create-cloneDeep)
- [69. implement deep equal `_.isEqual()` - BFE.dev](https://bigfrontend.dev/problem/implement-deep-equal-isEqual)
- [85. implement `_.get()` - BFE.dev](https://bigfrontend.dev/problem/implement-lodash-get)
- [156. implement `_.set()` - BFE.dev](https://bigfrontend.dev/problem/lodash-set)
- [2727. Is Object Empty - LeetCode](https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2705. Compact Object - LeetCode](https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [Falsy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

```

```
