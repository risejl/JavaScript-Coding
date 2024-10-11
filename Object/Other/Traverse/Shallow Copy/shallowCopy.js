function shallowClone(obj) {
  const copyObj = {};
  
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      copyObj[key] = obj[key];
    }
  }
  
  return copyObj;
}

// test case
/*
const obj = {
  "name": "Mitchell",
  "age": 25,
};

const nestedObj = {
  "name": "Mitchell",
  "address": {
    "province": "Liaoning",
    "city": "Dalian"
  }
};

console.log(shallowClone(obj));
console.log(shallowClone(nestedObj));
*/