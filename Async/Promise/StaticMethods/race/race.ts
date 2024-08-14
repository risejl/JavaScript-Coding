function promiseRace<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<Awaited<T[number]>> {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result as Awaited<T[number]>);
      } catch (err) {
        reject(err);
      }
    });
  });
}

// example
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

await promiseRace([p0, p1]); // 42
*/