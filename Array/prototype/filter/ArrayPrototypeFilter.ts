interface Array<T> {
  myFilter<U>(
    callbackFn: (value: T, index: number, array: Array<T>) => U,
    thisArg?: any,
  ): Array<U>
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const newArray = [];

  for (let i = 0; i < len; i++) {
    const iValue = this[i];
    if (
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, iValue, i, this)
    ) {
      newArray.push(iValue);
    }
  }

  return newArray;
};