/**
 * @param {string} str
 * @returns {string}
 */

function uncompress(str) {
  const stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (const char of str) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "(") {
      stack.push([currentStr, currentNum]);
      currentStr = "";
      currentNum = 0;
    } else if (char === ")") {
      const [prevStr, num] = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}

// Usage example
console.log(uncompress("3(ab)")); // => 'ababab'
console.log(uncompress("3(ab2(c))")); // => 'abccabccabcc'
