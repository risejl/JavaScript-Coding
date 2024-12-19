/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */

// Solution 1
function parse(str) {
  let val;

  eval('val=' + str);

  if (str !== JSON.stringify(val)) {
    throw new Error('unexpected token');
  }
  return val;
}
