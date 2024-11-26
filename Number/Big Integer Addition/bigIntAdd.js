/**
 * @param {string} numStr1
 * @param {string} numStr2
 * @return {string}
 */

// Time: O(n) | Space: O(n)
function add(num1, num2) {
  const num1Arr = num1.split("").map(Number);
  const num2Arr = num2.split("").map(Number);
  let carry = 0;
  let result = [];

  while (num1Arr.length || num2Arr.length || carry) {
    const sum = (num1Arr.pop() ?? 0) + (num2Arr.pop() ?? 0) + carry;
    carry = sum > 9 ? 1 : 0;
    result.push(sum % 10);
  }

  return result.reverse().join("");
}

// Usage example
console.log(add("999999999999999999", "1")); // => '1000000000000000000'
