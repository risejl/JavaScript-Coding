/**
 * @param {number} range
 * @param {number} outputCount
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function generateUniqueRandomArray(range, outputCount) {
  const arr = Array.from({ length: range }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < outputCount; i += 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr[randomIndex] = arr.at(-1);
    arr.pop();
  }

  return result;
}

// Usage example
const uniqueRandomNumbers = generateUniqueRandomArray(10, 5);
console.log(uniqueRandomNumbers); // => [*, *, *, *, *]
