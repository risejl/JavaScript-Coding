/**
* @param {any} val
* @return {true | Error}
*/

function expect(val) {
  return {
    toBe: function (arg) {
      if (val === arg) {
        return true;
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