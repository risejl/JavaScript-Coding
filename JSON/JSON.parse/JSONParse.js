// Solution 1
const json = '{"a":"1", "b":2}';
const obj = eval("(" + json + ")");
console.log(obj);

// Solution 2
const rx_one = /^[\],:{}\s]*$/;
const rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
const rx_three =
  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const rx_four = /(?:^|:|,)(?:\s*\[)+/g;

if (
  rx_one.test(
    json.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
  )
) {
  const obj = eval("(" + json + ")");
}
