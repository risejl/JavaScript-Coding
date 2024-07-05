/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

const flat = function (arr, n) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item) && n !== 0) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  } 

  return result;
};