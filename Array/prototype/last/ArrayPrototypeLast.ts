interface Array<T> {
  myLast(): T | -1;
}

Array.prototype.myLast = function(): any {
  return this.length ? this[this.length - 1] : -1;
};