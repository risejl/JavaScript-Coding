/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flatten(arr, depth = 1) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i]) && depth !== 0) {
      newArray.push(...flatten(arr[i], depth - 1));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Usage example
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result); // => ["exuberant", "destruction", "present"]
