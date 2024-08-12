/**
 * @param {any} val 
 * @return {Object}
 */

const expect = function (val) {
  return {
    toBe: function (arg) {
      if (val === arg) {
        return true
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe: function (arg) {
      if (val !== arg) {
        return true;
      } else {
        throw new Error('Equal');
      }
    }
  }
}

// example 
/*
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
*/
