// camel case to snake case
function toKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return '_' + i.toLowerCase();
  });

  if (temp[0] === '_') {
    temp = temp.slice(1);
  }

  return temp;
}

// console.log(toKebabCase("testMethod"));
// "test_method"


// snake case to camel case
function toCamelCase(str) {
  return str.replace(/_\w/g, function (i) {
    return i.slice(1).toUpperCase();
  });
}

console.log(toCamelCase("test_method"));