/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function compareVersion(version1, version2) {
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");

  for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
    const v1Num = Number(v1Arr[i] ?? 0);
    const v2Num = Number(v2Arr[i] ?? 0);

    if (v1Num > v2Num) {
      return 1;
    } else if (v1Num < v2Num) {
      return -1;
    }
  }

  return 0;
}

// Usage example
console.log(compareVersion("12.1.0", "12.0.9")); // => 1, meaning first one is greater
console.log(compareVersion("12.1.0", "12.1.2")); // => -1, meaning latter one is greater
console.log(compareVersion("5.0.1", "5.0.1")); // => 0, meaning they are equal.
