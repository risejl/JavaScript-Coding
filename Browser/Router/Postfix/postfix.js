/**
 * @param {string} url
 * @return {string}
 */

function getPostfix(url) {
  const segments = url.split("/");
  const lastSegment = segments.at(-1);
  const parts = lastSegment.split(".");

  return parts.length > 1 ? parts.at(-1) : "";
}

// Example usage:
const url = "https://www.baidu.com/index.html";
console.log(getPostfix(url)); // => "html"
