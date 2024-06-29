interface Array<T> {
  myEvery(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any,
  ): boolean;
}

Array.prototype.myEvery = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = true;
  
  for (let i = 0; i < len; i++) {
    if (
      Object.hasOwn(this, i) &&
      !callbackFn.call(thisArg, this[i], i, this)
    ) {
      flag = false;
      break;
    }
  }

  return flag;
};