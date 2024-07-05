type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = { [key: string]: JSONValue } | Array<JSONValue>;

const compactObject = function(obj: Obj): Obj {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const compactArr: JSONValue[] = [];
    obj.forEach((item) => {
      if (item) {
        compactArr.push(compactObject(item as Obj));
      }
    });
    return compactArr;
  }

  const compactObj: { [key: string]: JSONValue } = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      compactObj[key] = compactObject(value as Obj);
    }
  });
  
  return compactObj;
};