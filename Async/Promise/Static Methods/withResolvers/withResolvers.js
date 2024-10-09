/**
 * @return {promise: Promise, resolve: Function, reject: Function}
 */

function promiseWithResolvers() {
  let resolve = null;
  let reject = null;
  
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

// Usage example
const { promise, resolve, reject } = promiseWithResolvers();

// Later in your code
resolve('Success!');
promise.then((result) => console.log(result)); // => Success!