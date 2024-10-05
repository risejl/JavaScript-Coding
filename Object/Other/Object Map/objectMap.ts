function objectMap<V, R>(
  obj: Record<string, V>,
  fn: (val: V) => R,
): Record<string, R> {
  const result: Record<string, R> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = fn.call(obj, obj[key]);
    }
  }

  return result;
}

// example
/*
const double = (x: number): number => x * 2;
console.log(objectMap({ foo: 1, bar: 2 }, double)); // { foo: 2, bar: 4 }
*/
