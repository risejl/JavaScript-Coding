interface Array<T> {
  myMap<U>(
    callbackFn: (value: T, index: number, array: Array<T>) => U,
    thisArg?: any,
  ): Array<U>
}


Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = new Array(len);

  for (let i = 0; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      newArray[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return newArray;
};