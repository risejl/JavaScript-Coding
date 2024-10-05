/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */

function compact(arr) {
  const newArray = [];

  for (const item of arr) {
    if (item) {
      newArray.push(item);
    }
  }

  return newArray;
}

// compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
// compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]



// handle circular reference

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const compactArr = [];

    obj.forEach((item) => {
      if (item) {
        compactArr.push(compactObject(item));
      }
    });

    return compactArr;
  }

  const compactObj = Object.create(null);
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      compactObj[key] = compactObject(value);
    }
  });

  return compactObj;
}

// compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
// compact({ foo: true, bar: null }); // => { foo: true }