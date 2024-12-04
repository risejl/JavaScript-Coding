function shouldDeepCompare(type) {
  return type === "object" || type === "array";
}

function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * @param {*} valueA
 * @param {*} valueB
 * @returns
 */
function deepEqual(valueA, valueB) {
  const typeA = getType(valueA);
  const typeB = getType(valueB);

  if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);

    if (entriesA.length !== entriesB.length) {
      return false;
    }

    return entriesA.every(
      ([key, value]) =>
        Object.hasOwn(valueB, key) && deepEqual(value, valueB[key])
    );
  }

  return Object.is(valueA, valueB);
}

// Usage example
console.log(deepEqual("foo", "foo")); // true
console.log(deepEqual({ id: 1 }, { id: 1 })); // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([{ id: "1" }], [{ id: "2" }])); // false
