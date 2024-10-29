/**
 * @param {string} arabicNumber
 * @return {string}
 */

function digitToChinese(digit) {
  const digitMap = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  return digitMap[digit];
}

function arabicToChineseNumber(arabicNumber) {
  let chineseNumber = "";

  for (let i = 0; i < arabicNumber.length; i++) {
    chineseNumber += digitToChinese(arabicNumber[i]);
  }

  return chineseNumber;
}

// Usage example
console.log(arabicToChineseNumber("12345")); // => 一二三四五
