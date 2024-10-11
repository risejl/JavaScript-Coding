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
  }
}

/**
 * @param {AsyncFunc[]} fns
 * @return {Function}
 */

function sequence(fns) {
  const promises = fns.map(promisify);

  return async function (callbackFn, ...args) {
    try {
      let result = args;
      for (const promise of promises) {
        result = await promise(...result);
        result = [result];
      }
      callbackFn(undefined, result[0]);
    } catch (err) {
      callbackFn(err, undefined);
    }
  }
}

// Usage example
function asyncFunc1(callback, x, y) {
  setTimeout(() => {
    callback(null, x + y);
  }, 1000);
}

function asyncFunc2(callback, sum) {
  setTimeout(() => {
    callback(null, sum * 2);
  }, 1000);
}

function asyncFunc3(callback, result) {
  setTimeout(() => {
    callback(null, result + 10);
  }, 1000);
}


const asyncFunctions = [asyncFunc1, asyncFunc2, asyncFunc3];
const sequentialExecution = sequence(asyncFunctions);

console.log("Starting sequential execution...");
sequentialExecution((err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Final Result:', result);
  }
}, 5, 3); 
/*
=> Starting sequential execution...
=> Final Result: 26 (after about 3 seconds)
*/