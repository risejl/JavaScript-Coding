/**
 * @param {number} timestamp
 * @return {string}
 */

function formatTimestamp(timestamp) {
  // if the timestamp is Unix millseconds or there no need to * 1000
  const date = new Date(timestamp * 1000);
  const pad = (num) => String(num).padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Usage example
console.log(formatTimestamp(1655185405)); // => 2022-06-14 13:43:25

function formatTimestampLocale(timestamp, locale = "en-US") {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

console.log(formatTimestampLocale(1655185405)); // Example output: 06/14/2022, 03:50:05

function formatDate(date) {
  const timestamp = new Date(date);

  // solution 1
  return timestamp.getTime();

  // solution 2
  return timestamp.valueOf();

  // solution 3
  return Date.parse(date);
}

console.log(formatDate("2022-06-14 13:43:25")); // => 1655185405000
