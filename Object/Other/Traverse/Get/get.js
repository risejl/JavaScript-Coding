/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */

function get(objectParam, pathParam, defaultValue) {
  // Convert pathParam to array
  const path = Array.isArray(pathParam)
    ? pathParam
    : pathParam.replaceAll('[', '.').replaceAll(']', '').split('.');

  if (path.length === 0) {
    return defaultValue;
  }

  let obj = objectParam;

  for (const key of path) {
    if (obj === null || obj[key] === undefined) {
      return defaultValue;
    }

    obj = obj[key];
  }

  return obj;
}


// Usage example

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

console.log(get(john, 'profile.name.firstName')); // => 'John'
console.log(get(john, 'profile.gender')); // => 'Male'
console.log(get(jane, 'profile.name.firstName')); // => undefined

console.log(get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c')); // => 3
