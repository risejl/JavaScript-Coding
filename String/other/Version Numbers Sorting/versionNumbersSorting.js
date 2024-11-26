/**
 * @param {string[]} versions
 * @return {string[]}
 */

// Time: O(n^2logn) | Space: O(n)
function sortVersions(versionsArr) {
  versionsArr.sort((a, b) => {
    const aArr = a.split(".");
    const bArr = b.split(".");

    for (let i = 0; i < Math.max(aArr.length, bArr.length); i += 1) {
      const aItem = Number(aArr[i] ?? 0);
      const bItem = Number(bArr[i] ?? 0);

      if (aItem > bItem) {
        return 1;
      } else if (aItem < bItem) {
        return -1;
      } else {
        continue;
      }
    }

    return 0;
  });

  return versionsArr;
}

// Usage example
const sortedVersions = sortVersions([
  "0.1.1",
  "2.3.3",
  "0.302.1",
  "4.2",
  "4.3.5",
  "4.3.4.5",
]);
console.log(sortedVersions); // => [ '0.1.1', '0.302.1', '2.3.3', '4.2', '4.3.4.5', '4.3.5' ]
