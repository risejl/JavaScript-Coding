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
      if (Object.hasOwn(valueA, key)) {
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
