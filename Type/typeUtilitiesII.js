function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === 'function';
}

function isObject(value) {
  // for null and undefined
  if (value == null) {
    return false;
  }

  return typeof value === 'object';
}

function isPlainObject(value) {
  // for null and undefined
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

// Usage example
console.log(isArray(new Array())); // => true
console.log(isObject(Object(null))); // => true
console.log(isFunction(Object.prototype.toString)); // => true
console.log(isPlainObject(Object.create(null))); // => true