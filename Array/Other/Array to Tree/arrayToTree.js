/**
 * @param {Array} arr
 * @return {Array}
 */

// Time: O(n) | Space: O(n)
function arrToTree(arr) {
  const tree = [];
  const map = new Map();

  arr.forEach((item) => {
    map.set(item.id, {
      id: item.id,
      name: item.name,
      children: [],
    });
  });

  arr.forEach((item) => {
    if (item.parentId == null) {
      tree.push(map.get(item.id));
    } else {
      map.get(item.parentId).children.push(map.get(item.id));
    }
  });

  return tree;
}

// Usage example
const flatArray = [
  { id: 1, name: "Node 1", parentId: null },
  // { id: 1, name: "Node 1" },
  { id: 2, name: "Node 1.1", parentId: 1 },
  { id: 3, name: "Node 1.2", parentId: 1 },
  { id: 4, name: "Node 1.1.1", parentId: 2 },
  { id: 5, name: "Node 2", parentId: null },
  // { id: 5, name: "Node 2" },
  { id: 6, name: "Node 2.1", parentId: 5 },
  { id: 7, name: "Node 2.2", parentId: 5 },
];

const tree = arrToTree(flatArray);

console.log(tree); // => [{ id: 1, name: 'Node 1', children: [ [Object], [Object] ] }, { id: 5, name: 'Node 2', children: [ [Object], [Object] ] }]
