/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam)
    ? pathParam
    : pathParam.split('.');
  let len = path.length;
  let obj = objectParam;
  let index = 0;

  while (index < len && obj != null) {
    obj = obj[String(path[index])];
    index += 1;
  }

  const value = index && index === len
    ? obj
    : undefined;

  return value !== undefined
    ? value
    : defaultValue;
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
