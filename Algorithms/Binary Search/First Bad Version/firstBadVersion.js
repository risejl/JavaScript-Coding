/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */

function firstBadVersion(isBad) {
  return (version) => {
    let left = 0;
    let right = version;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBad(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left <= version ? left : -1;
  };
}

// Usage example
function isBad(version) {
  return version >= 4;
}

const solution = firstBadVersion(isBad);

console.log(solution(8)); // => 4
