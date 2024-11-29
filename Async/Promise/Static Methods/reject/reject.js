/**
 * @param {*} reason
 * @returns Promise
 */

function promiseReject(reason) {
  return new Promise((_, reject) => {
    reject(reason);
  });
}

// Usage example
const promise = promiseReject("err");
promise.catch((err) => {
  console.log(`Error: ${err}`); // => Error: err
});
