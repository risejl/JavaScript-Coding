/**
 * @param {*} value
 * @return Promise
 */

function promiseResolve(value) {
  // Promise
  if (value instanceof Promise) {
    return value;
  }

  // Thenable
  if (typeof value.then === 'function') {
    return new Promise(value.then.bind(value));
  }

  return new Promise((resolve) => resolve(value));
}

// Usage example
const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(1);
  }
})

const promise = resolvedThenable;
promise.then((data) => {
  console.log(data); // => 1
});