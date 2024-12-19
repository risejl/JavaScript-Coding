/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */

function deepOmit(val, keys) {
  if (Array.isArray(val)) {
    return val.map((item) => deepOmit(item, keys));
  }

  if (isPlainObject(val)) {
    const newObj = {};
    for (const key in val) {
      if (!keys.includes(key)) {
        newObj[key] = deepOmit(val[key], keys);
      }
    }

    return newObj;
  }

  return val;
}

function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}