/**
 * @param {object} obj 
 * @return {Array}
 */

function objToArr(obj) {
  return Object.keys(obj).reduce((value, key) => {
    const op = Object.keys(obj[key])[0];
    value.push({
      key: key,
      op: op,
      value: obj[key][op]
    });

    return value;
  }, []);
}

// Usage example
const obj = {
  key1: {
    op1: "value1",
  },
  key2: {
    op2: "value2",
  },
}

console.log(objToArr(obj));
/*
[
  { key: 'key1', op: 'op1', value: 'value1' },
  { key: 'key2', op: 'op2', value: 'value2' }
]
*/