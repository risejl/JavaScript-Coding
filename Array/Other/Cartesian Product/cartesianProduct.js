/**
 * @param {array} arrs
 * @return {array}
 */

// Time: O(m * n) | Space: O(n)
function generateCombinations(arrs) {
  const result = [];

  function backtrack(start, current) {
    if (start === arrs.length) {
      result.push(current.join(""));
      return;
    }

    for (const item of arrs[start]) {
      current.push(item);
      backtrack(start + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);

  return result;
}

// Usage example
const nestedArray = [
  ["a", "b"],
  [1, 2],
  [3, 4],
];
console.log(generateCombinations(nestedArray)); // => ['a13', 'a14', 'a23', 'a24', 'b13', 'b14', 'b23', 'b24']
