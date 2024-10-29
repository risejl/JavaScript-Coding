// camel case to snake case
/**
 * @param {string} str
 * @return {string}
 */
function toKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return "_" + i.toLowerCase();
  });

  if (temp[0] === "_") {
    temp = temp.slice(1);
  }

  return temp;
}

// Usage example
console.log(toKebabCase("testMethod")); // => "test_method"

// snake case to camel case
/**
 * @param {string} str
 * @return {string}
 */
function toCamelCase(str) {
  return str.replace(
    /([a-z])_([a-z])/gi,
    (_, left, right) => left + right.toUpperCase()
  );
}

// Usage example
console.log(toCamelCase("test_method")); // => "testMethod"
