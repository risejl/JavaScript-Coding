/**
 * @param {Object} obj
 * @return {string}
 */

function urlFormat(obj) {
  return Object.keys(obj)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    })
    .join("&");
}

// Example usage
const data = {
  a: 3,
  b: 4,
  c: 5,
};

console.log(urlFormat(data)); // => 'a=3&b=4&c=5'
