interface String {
  myRepeat(n: number): string;
}

String.prototype.myRepeat = function (n: number): string {
  return (new Array(n + 1)).join(this);
}

// example
// console.log('hello world'.myRepeat(2)); // hello worldhello world