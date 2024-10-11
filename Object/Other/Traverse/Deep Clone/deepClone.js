/**
 * @template T
 * @param {T} value
 * @return {T}
 */

function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
  );
}

// support all kinds of data types and handle circular refernece
/**
 * @template T
 * @param {T} value
 * @return {T}
 */
function isPrimitiveTypeOrFunction(value) {
  return (
    typeof value !== 'object' ||
    value === null ||
    typeof value === 'function'
  );
}

function getType(value) {
  const type = typeof value;
  
  if (type !== 'object') {
    return type;
  }

  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
  /*
  return Object.prototype.toString
    .call(value)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase();
  */
}

export default function deepClone(value) {
  return deepCloneWithCache(value, new Map());
}

function deepCloneWithCache(value, cache) {
  if (isPrimitiveTypeOrFunction(value)) {
    return value;
  }

  const type = getType(value);

  if (type === 'set') {
    const cloned = new Set();

    value.forEach((item) => {
      cloned.add(deepCloneWithCache(item, cache));
    });

    return cloned;
  }

  if (type === 'map') {
    const cloned = new Map();

    value.forEach((value_, key) => {
      cloned.set(key, deepCloneWithCache(value_, cache));
    });

    return cloned;
  }

  if (type === 'function') {
    return value;
  }

  if (type === 'array') {
    return value.map((item) => deepCloneWithCache(item));
  }

  if (type === 'date') {
    return new Date(value);
  }

  if (type === 'regexp') {
    return new RegExp(value);
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  const cloned = Object.create(Object.getPrototypeOf(value));

  cache.set(value, cloned);

  for (const key of Reflect.ownKeys(value)) {
    const item = value[key];
    cloned[key] = isPrimitiveTypeOrFunction(item)
      ? item
      : deepCloneWithCache(item, cache);
  }

  return cloned;
}