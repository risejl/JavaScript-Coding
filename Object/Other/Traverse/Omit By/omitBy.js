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
