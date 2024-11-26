/**
 * @param {any} char
 * @return {Boolean}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function isAlphaNumeric(char) {
  return /[A-Za-z0-9]/.test(char);
}

// Solution 2
// Time: O(1) | Space: O(1)
function isAlphaNumeric(char) {
  if (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= 0 && char <= 9)
  ) {
    return true;
  } else {
    return false;
  }
}

// Usage example
console.log(isAlphaNumeric("a")); // => true
console.log(isAlphaNumeric(0)); // => true
console.log(isAlphaNumeric("!")); // => false
