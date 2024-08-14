function promiseResolve<T>(
  value: T | PromiseLike<T>,
): Promise<Awaited<T>> {
  if (value instanceof Promise) {
    return value;
  }

  if (typeof (value as PromiseLike<T>).then === 'function') {
    return new Promise((value as PromiseLike<T>).then.bind(value) as any);
  }

  return new Promise((resolve) => resolve(value as Awaited<T>));
}

// example
/*
const p = promiseResolve(42);
await p; // 42

const original = new Promise((resolve) => resolve(42));
const cast = promiseResolve(original);
await cast; // 42

const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
});
await resolvedThenable; // 42
*/