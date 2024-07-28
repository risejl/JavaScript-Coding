interface Function {
  myApply(this: any, thisArg: any, argArray?: any[]): any;
}

Function.prototype.myApply = function (thisArg, argArray = []) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
}