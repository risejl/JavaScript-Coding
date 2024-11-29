/**
 * @callback fn
 * @returns Function
 */

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

/**
 * @callback fn
 * @returns Function
 */
const promisifyCustomSymbol = Symbol.for("util.promisify.custom");

function promisify(fn) {
  if (fn[promisifyCustomSymbol]) {
    return fn[promisifyCustomSymbol];
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  };
}

// Usage example
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo("example.com", { foo: 1 });
