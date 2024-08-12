const expect = function (val: any): Object {
  return {
    toBe: function (arg: any): true | Error {
      if (val === arg) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe: function (arg: any): true | Error {
      if (val !== arg) {
        return true;
      } else {
        throw new Error('Equal');
      }
    }
  }
}

// example 
/*
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
*/