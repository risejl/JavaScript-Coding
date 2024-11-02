/**
 * @template T
 * @param {...(T | Array<T>)} itemes
 * @return {Array<T>}
 */

Array.prototype.myConcat = function (...items) {
  const newArray = [...this];

  for (const item of items) {
    if (Array.isArray(item)) {
      newArray.push(...item);
    } else {
      newArray.push(item);
    }
  }

  return newArray;
};

// Usage example
console.log([1, 2, 3].myConcat([])); // => [1, 2, 3];
console.log([1, 2, 3].myConcat([4, 5, 6, [2]])); // => [1, 2, 3, 4, 5, 6, [2]];
