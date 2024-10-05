function setObjectValue(obj, keys, value) {
  let currentObj = obj;

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    // Check if the current object is null or undefined
    if (currentObj === null || currentObj === undefined) {
      return obj; // Return the original object if any part of the path is null or undefined
    }

    // If it's the last key, set the value
    if (i === keys.length - 1) {
      currentObj[key] = value;
    } else {
      // Create a new object if the current key doesn't exist or is not an object
      if (typeof currentObj[key] !== 'object' || Array.isArray(currentObj[key])) {
        currentObj[key] = {};
      }

      // Move to the next part of the path
      currentObj = currentObj[key];
    }
  }

  return obj;
}

/*
const obj = {
  a: {
    b: {
      c: 42
    }
  }
};

const updatedObj = setObjectValue(obj, ['a', 'b', 'c'], 100);
console.log(updatedObj);
// Output: { a: { b: { c: 100 } } }

const anotherObj = {
  x: {
    y: null
  }
};

const updatedAnotherObj = setObjectValue(anotherObj, ['x', 'y', 'z'], 'value');
console.log(updatedAnotherObj);
// Output: { x: { y: null } } (original object returned because 'y' is null);
*/