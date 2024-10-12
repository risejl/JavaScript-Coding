/**
 * @template T
 * @param {T} value
 * @return {T}
 */

// I: use structuredClone API

// II: use JSON.parse(JSON.stringify(value));

// III: use lodash._deepClone();

// IV:
// Handle primitive types and functions
function isPrimitiveTypeOrFunction(value) {
  return (
    typeof value !== 'object' ||
    value === null ||
    typeof value === 'function'
  );
}

// Check types
function getType(value) {
  const type = typeof value;

  // primitive
  if (type !== 'object') {
    return type;
  }

  // non-primitive
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
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
  if (type === 'set') {
    const cloned = new Set();
    value.forEach((item) => {
      cloned.add(deepCloneImpl(item, cache));
    });

    return cloned;
  }

  // map
  if (type === 'map') {
    const cloned = new Map();
    value.forEach((value_, key) => {
      cloned.set(key, deepCloneImpl(value_, cache));
    });

    return cloned;
  }

  // date
  if (type === 'date') {
    return new Date(value);
  }

  // function
  if (type === 'function') {
    return value;
  }

  // regexp
  if (type === 'regexp') {
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
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: 'foo', id: 1 },
  arr: [0, 1, 2],
  date: new Date(),
  reg: new RegExp('/bar/ig'),
  [Symbol('s')]: 'baz',
};

const clonedObj1 = deepClone(obj1);
clonedObj1.arr.push(3);
console.log(obj1.arr); // => [0, 1, 2]

const obj2 = { a: {} };
obj2.a.b = obj2; // Circular reference

const clonedObj2 = deepClone(obj2); // Should not cause a stack overflow by recursing into an infinite loop.

clonedObj2.a.b = 'something new';

console.log(obj2.a.b === obj2); // => true