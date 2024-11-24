/**
 * @param {string[][]} message
 * @return {string}
 */

function decode(message) {
  if (!message.length || !message[0].length) {
    return "";
  }

  let result = "";
  let row = 0;
  let col = 0;
  let goingDown = true;
  const rows = message.length;
  const cols = message[0].length;

  while (col < cols) {
    result += message[row][col];

    if (goingDown) {
      // Moving down-right
      if (row + 1 >= rows || col + 1 >= cols) {
        goingDown = false;
        row--;
        col++;
        continue;
      }
      row++;
      col++;
    } else {
      // Moving up-right
      if (row - 1 < 0 || col + 1 >= cols) {
        goingDown = true;
        row++;
        col++;
        continue;
      }
      row--;
      col++;
    }
  }

  return result;
}

// Usage example
const message = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decode(message)); // => IROCLED
