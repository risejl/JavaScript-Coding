function promiseAny<T>(iterable: Array<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;

        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}

// example
/*
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
})

await promiseAny([p0, p1]); // 42
*/