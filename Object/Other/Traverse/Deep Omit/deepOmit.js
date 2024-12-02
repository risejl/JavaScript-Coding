/**
 * @param {object} obj
 * @param {array} []
 * @return {object}
 */

function omit(obj, keys) {
  const result = { ...obj };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
}

/**
 * @param {object} obj
 * @param {function} callbackFn
 * @return {object}
 */

function omitBy(obj, callbackFn) {
  const result = { ...obj };

  Object.entries(result).forEach(([key, value]) => {
    const isDrop = callbackFn(value, key);

    if (isDrop) {
      delete result[key];
    }
  });

  return result;
}

// Usage example
const object = {
  a: 3,
  b: 4,
  c: 5,
};

console.log(omit(object, ["a", "b"])); // => { c: 5 }

console.log(omitBy(object, (value) => value === 3)); // => { b: 4, c: 5 }
