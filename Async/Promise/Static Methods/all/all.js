/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */

function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = Array.from({ length: iterable.length });
    let unresolved = iterable.length;

    if (!unresolved) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (!unresolved) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

/*
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
*/


// How to make `Promise.all()` keeps the execution in order
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */

function promiseAllOrdered(iterable) {
  return new Promise((resolve, reject) => {
    const results = Array.from({ length: iterable.length });
    let resolved = 0;

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((result) => {
          results[index] = result;
          resolved += 1;

          if (resolved === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}