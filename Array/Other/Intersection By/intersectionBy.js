/**
 * @param {Function} iteratee
 * @param {Array[]} arrays
 * @returns {Array}
 */

// Time: O(n) | Space: O(n)
function intersectionBy(iteratee, ...arrs) {
  if (!arrs.length) {
    return [];
  }

  const mappedArrs = arrs.map((arr) => arr.map(iteratee));
  let intersectedValues = mappedArrs[0].filter((value) => {
    return mappedArrs.every((mappedArr) => mappedArr.includes(value));
  });

  intersectedValues = intersectedValues.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return intersectedValues.map((value) => {
    const index = mappedArrs[0].indexOf(value);
    return arrs[0][index];
  });
}

// Usage example
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]
console.log(result); // => [2.4]

const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ["apple", "banana", "ORANGE", "orange"],
  ["Apple", "Banana", "Orange"]
);
console.log(result2); // => ['apple', 'banana', 'ORANGE']
