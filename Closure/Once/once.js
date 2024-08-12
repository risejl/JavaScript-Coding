/** 
 * @param {Function} fn 
 * @return {Function | undefined} 
 */

const once = function (fn) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      return fn.apply(this, args);
    } else {
      return undefined;
    }
  }
}

// example
/*
const fn = (a, b, c) => (a + b + c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // `undefined`
*/