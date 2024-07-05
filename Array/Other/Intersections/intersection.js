/**
 * @param {Array<unknown>[]} arrays - The arrays to find the intersection of.
 * @returns {Array<unknown>} - An array containing the elements common to all input arrays.
 */

export default function intersection(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const set = new Set(arrays[0]);
  
  for (let i = 1; i < arrays.length; i++) {
    set.forEach((value) => {
      if (!arrays[i].includes(value)) {
        set.delete(value);
      }
    });
  }
  return Array.from(set);
}