/**
 * @param {string} str
 * @returns {string | string[]}
 */

// Time: O(n) | Space: O(1)
function count(str) {
  const bin = Array.from({ length: 256 }, () => 0);
  let maxCount = 0;

  for (const char of str) {
    bin[char.charCodeAt(0)] += 1;

    if (bin[char.charCodeAt(0)] > maxCount) {
      maxCount = bin[char.charCodeAt(0)];
    }
  }

  const result = [];
  for (let i = 0; i < bin.length; i += 1) {
    if (bin[i] === maxCount) {
      result.push(String.fromCharCode(i));
    }
  }

  return result.length === 1 ? result[0] : result;
}

// Usage example
console.log(count("abbccc")); // => 'c'
console.log(count("abbcccddd")); // => ['c', 'd'];
