
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */

function pow(base, exponent){
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  if (base === 0) {
    return 0;
  }

  if (base === 1) {
    return 1;
  }

  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }

  let result = 1;
  while (exponent > 0) {
    if (exponent & 1) {
      result *= base;
    }

    base *= base;
    exponent >>= 1;
  }

  return result;
}