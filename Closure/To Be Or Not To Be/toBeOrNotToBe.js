/**
 * @param {any} val
 * @return {true | Error}
 */

// Time: O(1) | Space: O(1)
function expect(val) {
  return {
    toBe: function (arg) {
      if (val === arg) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (arg) {
      if (val !== arg) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Usage example
expect(5).toBe(5); // Passes
expect(5).notToBe(6); // Passes

try {
  expect(5).toBe(6); // Throws an error
} catch (error) {
  console.log(error.message); // Not Equal
}
