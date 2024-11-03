/**
 * @param {any} op1
 * @param {any} op2
 * @return {boolean}
 */

function myObjectIs(op1, op2) {
  if (op1 === op2) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}

// Usage example
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
