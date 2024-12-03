/**
 * @param {Array} collection
 * @param {Function} iteratee
 * @return {Object}
 */

function keyBy(collection, iteratee) {
  return collection.reduce((result, item) => {
    const key = iteratee(item);
    result[key] = item;

    return result;
  }, {});
}

// Example usage
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Using keyBy to group users by their names
const groupedByName = keyBy(users, (user) => user.name);
console.log(groupedByName);
/*
Output:
{
  Alice: { id: 1, name: 'Alice' },
  Bob: { id: 2, name: 'Bob' },
  Charlie: { id: 3, name: 'Charlie' }
}
*/

// Using keyBy to group users by their IDs
const groupedById = keyBy(users, (user) => user.id);
console.log(groupedById);
/*
Output:
{
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Charlie' }
}
*/
