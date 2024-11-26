/**
 * @param {number} num
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function addComma(num) {
  const [integerStr, floatStr] = String(num).split(".");
  let count = 0;
  let result = "";

  for (let i = integerStr.length - 1; i >= 0; i -= 1) {
    count += 1;
    result = integerStr[i] + result;

    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return floatStr ? result + `.${floatStr}` : result;
}

// Usage example
console.log(addComma(1)); // => '1'
console.log(addComma(1000)); // => '1,000'
console.log(addComma(-12345678)); // =>  '-12,345,678'
console.log(addComma(12345678.12345)); // =>  '12,345,678.12345'
