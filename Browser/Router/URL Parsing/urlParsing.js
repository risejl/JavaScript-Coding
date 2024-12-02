// Solution 1: `URLSearchParams`
const urlObj = new URL("https://example.com?query=value&sort=desc&page=2");
const searchParams = new URLSearchParams(urlObj.search);

// Usage example
console.log("query:", searchParams.get("query")); // => query: value
console.log("sort:", searchParams.get("sort")); // => sort: desc

// Solution 2: `.split()`
function getParams(url) {
  const result = [];

  if (url.includes("?")) {
    const str = url.split("?")[1];
    const paramArr = str.split("&");

    paramArr.forEach((item) => {
      const [key, value] = item.split("=");
      result[key] = decodeURIComponent(value);
    });
  }

  return result;
}

// Solution 3: regex
const url = "https://www.example.com/?id=12345&name=John";
const regexParam = /(?:[?&])(\w+)=([^?&]+)/g;
const params = {};
let match;

while ((match = regexParam.exec(url)) !== null) {
  params[match[1]] = match[2];
}

// Usage example
const URL = "https://www.example.com/?id=12345&name=John";
console.log(getParams(URL)); // => [ id: '12345', name: 'John' ]
