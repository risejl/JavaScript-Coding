type Fn = (...params: any[]) => Promise<any>;

function timeLimit<T extends (...args: any[]) => Promise<any>>(fn: T, t: number): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise<ReturnType<T>>(async (resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      try {
        const value = await fn(...args);
        clearTimeout(timeoutId);
        resolve(value);
      } catch (err) {
        clearTimeout(timeoutId);
        reject(err);
      }
    });
  };
}

// example
/*
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/