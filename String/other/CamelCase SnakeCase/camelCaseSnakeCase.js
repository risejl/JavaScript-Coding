/* camel case to snake case */

/**
 * @param {string} str
 * @return {string}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function toSnakeCase(str) {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return "_" + i.toLowerCase();
  });

  if (temp[0] === "_") {
    temp = temp.slice(1);
  }

  return temp;
}

// Solution 2
// Time: O(n) | Space: O(1)
function toSnakeCase(str) {
  let temp = "";

  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      temp += "_" + char.toLowerCase();
    } else {
      temp += char;
    }
  }

  return temp;
}

// Usage example
console.log(toSnakeCase("testMethod")); // => "test_method"

/* snake case to camel case */
/**
 * @param {string} str
 * @return {string}
 */

// Solution 1
// Time: O(1) | Space: O(1)
function toCamelCase(str) {
  return str.replace(
    /([a-z])_([a-z])/gi,
    (_, left, right) => left + right.toUpperCase()
  );
}

// Solution 2
// Time: O(n) | Space: O(1)
function toSnakeCase(str) {
  let temp = "";
  const len = str.length;
  let count = 0;

  while (count < len) {
    if (str[count] === "_") {
      temp += str[count + 1].toUpperCase();
      count += 2;
    } else {
      temp += str[count];
      count += 1;
    }
  }

  return temp;
}

// Usage example
console.log(toCamelCase("test_method")); // => "testMethod"
