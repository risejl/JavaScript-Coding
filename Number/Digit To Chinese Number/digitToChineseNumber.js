/**
 * @param {string} arabicNumber
 * @return {string}
 */
 
const digitToChinese = function (digit) {
  const digitMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  return digitMap[digit];
}

const arabicToChineseNumber = function (arabicNumber) {
  let chineseNumber = '';

  for (let i = 0; i < arabicNumber.length; i++) {
    chineseNumber += digitToChinese(arabicNumber[i]);
  }

  return chineseNumber;
}

// test
const arabicNumber = '12345';
const chineseNumber = arabicToChineseNumber(arabicNumber);
console.log(chineseNumber); // output：一二三四五