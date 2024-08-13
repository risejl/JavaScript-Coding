function myObjectIs(a: any, b: any): boolean {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}

// example
// console.log(myObjectIs(0, -0)); // false
// console.log(myObjectIs(NaN, NaN)); // true