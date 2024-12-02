/**
 * @param {Date} date1
 * @param {Date} date2
 * @return {number}
 */

function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const difference = d2 - d1;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return days;
}

// Example usage:
const date1 = "2023-01-01";
const date2 = "2023-12-31";
const daysDifference = daysBetweenDates(date1, date2);
console.log(`Number of days between ${date1} and ${date2}: ${daysDifference}`); // => Number of days between 2023-01-01 and 2023-12-31: 364
