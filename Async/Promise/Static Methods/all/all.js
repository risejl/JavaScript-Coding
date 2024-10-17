/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */

// Use async await
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let len = iterable.length;
    let resolved = 0;
    const results = Array.from({ length: len });

    if (len === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const result = await item;
        results[index] = result;
        resolved += 1;

        if (resolved === len) {
          resolve(results);
          return;
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

/*
// Use Promise chaining
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;

    if (!iterable.length) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((data) => {
          results[index] = data;
          resolved += 1;

          if (resolved === iterable.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
*/

// Usage example
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

promiseAll([p0, p1, p2])
  .then((data) => {
    console.log(data); // => [3, 42, 'foo']
  });