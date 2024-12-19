
/**
 * @param {number} num
 * @returns {number}
 */

function clz32(num) {
  num = num >>> 0;
  
  if (num === 0) {
    return 32;
  }

  return 31 - (Math.log2(num) | 0);
}