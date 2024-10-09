/**
 * @param {Array} iterable
 * @return {Promise}
 */

function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const len = iterable.length;
    
    if (!len) {
      resolve(new AggregateError([]));
    }

    let pending = len;
    const errors = Array.from({ length: len });

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending -= 1;

        if (!pending) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}

// Usage example
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

promiseAny([p0, p1])
  .then((data) => {
    console.log(data); // => 42
  });