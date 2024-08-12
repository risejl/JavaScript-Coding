function partial(func: Function, ...args: any[]): Function {
  return function(...restArgs: any[]) {
    const copyArgs = args.map(
      (arg) => arg === partial.placeholder ? restArgs.shift() : arg
    );
    return func.call(this, ...copyArgs, ...restArgs);
  }
}

partial.placeholder = Symbol();

// example 
/*
const func = (...args: any[]): any[] => args;
const func123 = partial(func, 1, 2, 3);
console.log(func123(4)); // [1, 2, 3, 4]

// support placeholder
const _ = partial.placeholder;
const func1_3 = partial(func, 1, _, 3);
console.log(func1_3(2, 4)); // [1, 2, 3, 4]
*/