/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function(obj) {
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
};