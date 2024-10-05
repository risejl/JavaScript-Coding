/**
 * @param {string[]} versions 
 * @return {string[]}
 */

function sortVersions(versions) {
  return versions.sort((a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i += 1) {
      const aPart = aParts[i] ?? 0;
      const bPart = bParts[i] ?? 0;

      if (aPart !== bPart) {
        return aPart - bPart;
      }
    }
    
    return 0;
  });
}

/*
const versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
const sortedVersions = sortVersions(versions);
console.log(sortedVersions);
*/