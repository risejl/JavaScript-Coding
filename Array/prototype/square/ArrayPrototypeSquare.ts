interface Array<T> {
  mySquare(): Array<number>
}

Array.prototype.mySquare = function () {
  const length = this.length;
  const newArray = new Array(length);

  for (let i = 0; i < length; i++) {
    newArray[i] = this[i] ** 2;
  }

  return newArray;
}