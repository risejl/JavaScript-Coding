/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */

// One-line solution
function myInstanceOf(obj, fn) {
  return fn.prototype.isPrototypeOf(obj);
}

function myInstanceOf(obj, fn) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  if (typeof fn !== "function") {
    return false;
  }

  let proto = Object.getPrototypeOf(obj);

  while (proto) {
    if (proto === fn.prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

// Usage example
class A {}
class B extends A {}
const b = new B();
console.log(myInstanceOf(b, B)); // => true
console.log(myInstanceOf(b, A)); // => true
console.log(myInstanceOf(b, Object)); // => true
function C() {}
console.log(myInstanceOf(b, C)); // => false
C.prototype = B.prototype;
console.log(myInstanceOf(b, C)); // => true
C.prototype = {};
console.log(myInstanceOf(b, C)); // => false
