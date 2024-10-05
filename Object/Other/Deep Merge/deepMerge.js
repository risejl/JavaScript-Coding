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
      if (Object.prototype.hasOwnProperty.call(valueA, key)) {
        newObj[key] = deepMerge(valueA[key], valueB[key]);
      } else {
        newObj[key] = valueB[key];
      }
    }

    return newObj;
  }
  
  return valueB;
}