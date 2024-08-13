function deepMerge(valA: unknown, valB: unknown): unknown {
  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }

  if (isPlainObject(valA) && isPlainObject(valB)) {
    const objA = valA as any;
    const objB = valB as any;
    const newObj = { ...objA };

    for (const key in objB) {
      if (Object.prototype.hasOwnProperty.call(valA, key)) {
        newObj[key] = deepMerge(objA[key], objB[key]);
      } else {
        newObj[key] = objB[key];
      }
    }

    return newObj;
  }

  return valB;
}

function isPlainObject(value: unknown): boolean {
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