interface Function {
  myCall(this: Function, thisArg: any, ...argArray: any[]): any;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
}