/**
 * @param {Object} obj
 * @return {Object}
 */
function shallowClone(obj) {
  const copyObj = {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      copyObj[key] = obj[key];
    }
  }

  return copyObj;
}

// Usage example
const obj = {
  name: "Mike",
  age: 25,
};

const nestedObj = {
  name: "Mike",
  address: {
    state: "NY",
    city: "NYC",
  },
};

console.log(shallowClone(obj)); // => { name: 'Mike', age: 25 }
console.log(shallowClone(nestedObj)); // => { name: 'Mike', address: { state: 'NY', city: 'NYC' } }
