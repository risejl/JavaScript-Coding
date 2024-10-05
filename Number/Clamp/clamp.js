/**
 * @param {number} value
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
}