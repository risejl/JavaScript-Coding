const compareVersion = function (version1: string, version2: string): number {
  const v1Arr = version1.split('.');
  const v2Arr = version2.split('.');
  const maxLen = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < maxLen; i++) {
    const v1Char = parseInt(v1Arr[i]) || 0;
    const v2Char = parseInt(v2Arr[i]) || 0;
    if (v1Char > v2Char) {
      return 1;
    } else if (v1Char < v2Char) {
      return -1;
    } else {
      continue;
    }
  }

  return 0;
}

// example
/*
let version1 = "1.2" ,version2 = "1.10";
console.log(compareVersion(version1, version2)); // -1
version1 = "1.01", version2 = "1.001";
console.log(compareVersion(version1, version2)); // 0
version1 = "1.2", version2 = "1.1";
console.log(compareVersion(version1, version2)); // 1
*/