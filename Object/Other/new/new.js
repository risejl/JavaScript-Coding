/**
 * @param {Function} constructor
 * @param {any[]} args
 * @return {Object}
 */

const myNew = function (constructor, ...args) {
  const emptyObj = {}
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
function Person(name) {
  this.name = name;
}
const person = myNew(Person, 'Mike');
console.log(person); // Person { name: 'Mike' }
*/