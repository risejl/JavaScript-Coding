/**
 * @param {any} obj
 * @param {Function} fn
 * @return {boolean}
 */

function myInstanceOf(obj, fn) {
  return fn.prototype.isPrototypeOf(obj);
}

// example
/*
class A {}
class B extends A {}
const b = new B()
console.log(myInstanceOf(b, B)); // true
console.log(myInstanceOf(b, A)); // true
console.log(myInstanceOf(b, Object)); // true
function C() {}
console.log(myInstanceOf(b, C)); // false
C.prototype = B.prototype
console.log(myInstanceOf(b, C)); // true
C.prototype = {}
console.log(myInstanceOf(b, C)); // false
*/