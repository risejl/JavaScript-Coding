class ArrayWrapper {
  constructor(arr) {
    this._arr = arr;
  }

  valueOf() {
    return this._arr.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this._arr.join(",")}]`;
  }
}

// Usage example
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // => 10
console.log(String(obj1)); // => [1,2]
