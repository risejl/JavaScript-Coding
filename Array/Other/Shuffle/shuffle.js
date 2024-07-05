/**
 * @param {Array<unknown>} arr - The array to be shuffled.
 * @returns {Array<unknown>} - The shuffled array.
 */
 
const shuffle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    [arr[randIdx], arr[i]] = [arr[i], arr[randIdx]];
  }
  
  return arr;
};