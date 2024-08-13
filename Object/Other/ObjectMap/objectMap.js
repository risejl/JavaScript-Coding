/**
 * @param {Object} obj
 * @param {Function} fn
 * @return Object
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

// example
/*
const double = (x) => x * 2;
console.log(objectMap({ foo: 1, bar: 2 }, double)); // { foo: 2, bar: 4 }
*/