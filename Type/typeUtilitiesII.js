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