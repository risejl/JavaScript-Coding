function promisify(callbackFn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      callbackFn((err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(data);
        }
      }, ...args);
    });
  };
}

/**
 * @param {AsyncFunc[]} fns
 * @return {Function}
 */

function race(fns) {
  return function (callbackFn, ...args) {
    return Promise.race(fns.map((fn) => promisify(fn)(...args)))
      .then((data) => callbackFn(undefined, data))
      .catch((err) => callbackFn(err, undefined));
  };
}

// Usage example
function asyncFunc1(callback, input) {
  setTimeout(() => {
    callback(null, input * 2);
  }, 1000);
}

function asyncFunc2(callback, input) {
  setTimeout(() => {
    callback(null, input + 10);
  }, 2000);
}

function asyncFunc3(callback, input) {
  setTimeout(() => {
    callback(null, input * input);
  }, 3000);
}

const asyncFunctions = [asyncFunc1, asyncFunc2, asyncFunc3];
const raceExecution = race(asyncFunctions);

raceExecution((err, results) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Results:", results);
  }
}, 5); // => Results: 10
