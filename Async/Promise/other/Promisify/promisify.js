/**
 * @param {Function} func 
 * @return Function
 */
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }
}

// example
/*
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo('example.com', { foo: 1 });
*/