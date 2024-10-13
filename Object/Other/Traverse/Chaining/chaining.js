/**
 * @param {object} obj
 * @param {string} start
 * @return 
 */

function format(obj, start) {
  let result = '';
  let current = start;

  while (current) {
    const entry = obj.find((item) => item.source === current);

    if (entry) {
      result += current;
      current = entry.target;
    } else {
      break;
    }
  }

  result += current;
  return result;
} 

const origin = [
  { source: 'b', target: 'c' },
  { source: 'a', target: 'b' },
  { source: 'c', target: 'd' }
];

console.log(format(origin, 'a')); // => "abcd"