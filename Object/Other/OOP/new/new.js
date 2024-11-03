/**
 * @param {Function} constructor
 * @param {any[]} args
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  const result = constructor.call(obj, ...args);

  if (typeof result !== "object" || result == null) {
    return obj;
  } else {
    return result;
  }
}

// Usage example
function Person(name) {
  this.name = name;
}
const person = myNew(Person, "Mike");
console.log(person); // => Person { name: 'Mike' }
