/**
 * @param {number} num
 */

// Time: O(1) | Space: O(1)
function sum(num) {
  const func = function (num2) {
    return num2 ? sum(num + num2) : num;
  };

  func.valueOf = () => num;
  return func;
}

// Usage example
const sum1 = sum(1);
console.log(sum1(2) == 3); // => true
console.log(sum1(3) == 4); // => true
console.log(sum(1)(2)(3) == 6); // => true
console.log(sum(5)(-1)(2) == 6); // => true
