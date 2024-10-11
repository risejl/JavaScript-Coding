/**
 * @params {Array} iterable
 * @params {callbackFn} Function
 * @return {Array}
 */

// Use Promise.all()
function mapAsync(iterable, callbackFn) {
  return Promise.all(iterable.map(callbackFn));
}

// Iterative
function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    const results = [];
    let unresolved = iterable.length;

    if (!unresolved) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then((result) => {
          results[index] = result;
          unresolved -= 1;

          if (!unresolved) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// Usage example
function asyncDouble(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

mapAsync([1, 2], asyncDouble)
  .then((results) => {
    console.log(results); // => [2, 4]
  });