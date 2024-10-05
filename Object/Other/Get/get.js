// GFE
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
  let index = 0;
  let len = path.length;
  let obj = objectParam;

  while (obj != null && index < len) {
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