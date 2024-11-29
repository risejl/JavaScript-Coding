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
