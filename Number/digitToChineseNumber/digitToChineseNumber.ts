const digitToChinese = function (digit: string): string {
  const digitMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  return digitMap[digit];
}

const numberToChineseNumber = function (number: string): string {
  let chineseNumber = '';

  for (let i = 0; i < number.length; i++) {
    chineseNumber += digitToChinese(number[i]);
  }

  return chineseNumber;
}

// example
/*
const number = '12345';
const chineseNumber = numberToChineseNumber(number);
console.log(chineseNumber); // '一二三四五'
*/