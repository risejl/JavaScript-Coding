/**
 * @param {any} char
 * @return {Boolean}
 */

function isAlphaNumeric(char) {
  return /[A-Za-z0-9]/.test(char);
}

// Usage example
console.log(isAlphaNumeric("a")); // => true
console.log(isAlphaNumeric(0)); // => true
console.log(isAlphaNumeric("!")); // => false
