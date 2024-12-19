/**
 * @param {any} number
 * @return {number}
 */

function mySqrt(number) {
  if (number < 0) {
    return NaN;
  }

  if (number === 0 || number === 1) {
    return number;
  }

  let guess = number / 2;
  const epsilon = 0.0000001;

  while (Math.abs(guess * guess - number) > epsilon) {
    guess = (guess + number / guess) / 2;
  }

  return Math.floor(guess);
}