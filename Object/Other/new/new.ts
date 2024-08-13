const myNew = function (constructor: Function, ...args: any[]): object {
  const emptyObj = {};
  Object.setPrototypeOf(emptyObj, constructor.prototype);
  const returned = constructor.call(emptyObj, ...args);

  if (typeof returned !== 'object' || returned === null) {
    return emptyObj;
  } else {
    return returned;
  }
}

// example
/*
function Person(this:any, name: string) {
  this.name = name;
}
const person = myNew(Person, 'Mike');
console.log(person); // Person { name: 'Mike' }
*/