type Fn<T> = (this: any, ...args: Array<any>) => T | undefined;

function once<T>(func: Fn<T>): Fn<T> | undefined {
  let flag = true;

  return function (...args): T | undefined {
    if (flag) {
      flag = false;
      return func.apply(this, args);
    } else {
      return undefined;
    }
  };
}

// example
/*
const fn = (a, b, c) => (a + b + c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // `undefined`
*/