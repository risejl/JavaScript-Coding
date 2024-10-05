/**
 * @param {Array} iterable
 * @return {Promise}
 */

function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (!iterable.length) {
      resolve(new AggregateError([]));
    }

    let pending = iterable.length;
    const errors = Array.from({ length: iterable.length });

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

/*
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

await promiseAny([p0, p1]); // 42
*/