/**
 * @param {number} num
 * @return {string}
 */

function addComma(num) {
  const [integerStr, floatStr] = String(num).split('.');
  let count = 0;
  let result = '';

  for (let i = integerStr.length - 1; i >= 0; i -= 1) {
    count += 1;
    result = integerStr[i] + result;

    if (count % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  return floatStr ? result + `.${floatStr}` : result;
}

/*
addComma(1) // '1'
addComma(1000) // '1,000'
addComma(-12345678) // '-12,345,678'
addComma(12345678.12345) // '12,345,678.12345'
*/