/**
 * @param {Object | Array} valA
 * @param {Object | Array} valB
 * @return {Object | Array}
 */

function deepMerge(valA, valB) {
  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }

  if (isPlainObject(valA) && isPlainObject(valB)) {
    const newObj = { ...valA };
    for (const key in valB) {
      if (Object.prototype.hasOwnProperty.call(valA, key)) {
        newObj[key] = deepMerge(valA[key], valB[key]);
      } else {
        newObj[key] = valB[key];
      }
    }
    return newObj;
  }

  return valB;
}

function isPlainObject(value) {
  if (value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

// example
/*
console.log(deepMerge({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(deepMerge({ a: 1 }, { a: 2 })); // { a: 2 }
console.log(deepMerge({ a: 1, b: [2] }, { b: [3, 4] })); // { a: 1, b: [2, 3, 4] }
*/
