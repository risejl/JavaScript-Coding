/**
 * @param {string} arabicNumber
 * @return {string}
 */

// Time: O(n) | Space: O(n)
function arabicToChineseNumber(arabicNumber) {
  const map = {
    0: "零",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
  };
  // or
  // const map = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
  let result = "";

  const stArr = arabicNumber.split("");
  for (let i = 0; i < stArr.length; i += 1) {
    result += map[stArr[i]];
  }

  return result;
}
// Usage example
console.log(arabicToChineseNumber("12345")); // => "一二三四五"
