/**
 * @param {Array<unknown>[]} arrays - The arrays to find the intersection of.
 * @returns {Array<unknown>} - An array containing the elements common to all input arrays.
 */

function intersectArrays(...arrs) {
  if (!arrs.length) {
    return [];
  }

  const set = new Set(arrs[0]);

  for (let i = 1; i < arrs.length; i += 1) {
    set.forEach((value) => {
      if (!arrs[i].includes(value)) {
        set.delete(value);
      }
    });
  }

  return Array.from(set);
}

// Usage example
console.log(intersectArrays([1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 6])); // => [3, 4]
