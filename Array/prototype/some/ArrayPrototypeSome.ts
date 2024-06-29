interface Array<T> {
  mySome(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any,
  ): boolean
}

Array.prototype.mySome = function (callbackFn, thisArg) {
  const len = this.length;
  let flag = false;
  
  for (let i = 0; i < len; i++) {
    if (
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, this[i], i, this)
    ) {
      flag = true;
      break;
    }
  }

  return flag;
};