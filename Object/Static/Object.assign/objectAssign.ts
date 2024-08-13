function myObjectAssign<T extends object, U extends object>(target: T, ...sources: U[]): T & U {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  target = Object(target);

  for (const source of sources) {
    if (source != null) {  // Skip null or undefined sources
      for (const key of [...Object.keys(source), ...Object.getOwnPropertySymbols(source)]) {
        (target as any)[key] = (source as any)[key];
      }
    }
  }

  return target as T & U;
}

// example
/*
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true
*/