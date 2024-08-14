type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };

function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results as ReturnValue<T>);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results as ReturnValue<T>);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

// example
/*
const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
*/
