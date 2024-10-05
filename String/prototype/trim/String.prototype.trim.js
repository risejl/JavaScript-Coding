/**
* @param {strint} str
* @return {string}
*/

String.prototype.myTrim = function () {
  const whitespace = ' \n\r\t\f\v\u00A0\u2008\u2029';
  let start = 0;
  let end = this.length - 1;

  while (start <= end && whitespace.indexOf(this[start]) !== -1) {
    start += 1;
  }

  while (end >= start && whitespace.indexOf(this[end]) !== -1) {
    end -= 1;
  }

  return this.slice(start, end + 1);
}

/*
const str = "  Hello, World!  ";
console.log(str.trim()); // Outputs: "Hello, World!"

const str2 = "\n\t  Trimmed  \r\n";
console.log(str2.trim()); // Outputs: "Trimmed"
*/