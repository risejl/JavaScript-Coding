type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

const sortBy = function(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
};