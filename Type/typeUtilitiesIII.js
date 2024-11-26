// Time: O(1) | Space: O(1)

function getType(value) {
  const type = typeof value;

  if (type !== "object") {
    return type;
  }

  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// Usage example
console.log(getType(1)); // => number
console.log(getType("")); // => string
console.log(getType({})); // => object
console.log(getType(null)); // => null
console.log(getType(undefined)); // => undefined
console.log(getType(Symbol())); // => symbol
console.log(getType(BigInt(1234567890123456789012345))); // => bigint
console.log(getType(function () {})); // => function
console.log(getType(new Date())); // => date
console.log(getType(new Map())); // => map
console.log(getType(new Set())); // => set
console.log(getType(new RegExp("cat", "i"))); // => regex
