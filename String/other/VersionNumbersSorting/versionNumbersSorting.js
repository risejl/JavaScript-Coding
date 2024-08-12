/**
 * @param {string[]} versionArr 
 * @return {string[]}
 */

const versionSorting = function (versionArr) {
  versionArr.sort((a, b) => {
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    let i = 0;
    while (true) {
      const s1 = parseInt(arr1[i]);
      const s2 = parseInt(arr2[i]);
      i++;
      if (s1 === undefined || s2 === undefined) {
        return arr2.length - arr1.length;
      }
      if (s1 === s2) {
        continue;
      }

      return s2 - s1;
    }
  });

  return versionArr;
}

// example
/*
const arr = versionSorting(["1.2", "2.5", "1.8", "3.1", "2.0"]);
console.log(arr); // ['3.1', '2.5', '2.0', '1.8', '1.2']
const arr2 = versionSorting(["10.5", "5.2", "1.0", "7.3", "3.0"]);
console.log(arr2); // ['10.5', '7.3', '5.2', '3.0', '1.0']
const arr3 = versionSorting(["0.5.2", "1.2.3", "2.1.1", "3.0.0", "0.1.5"]);
console.log(arr3); // ['3.0.0', '2.1.1', '1.2.3', '0.5.2', '0.1.5']
*/