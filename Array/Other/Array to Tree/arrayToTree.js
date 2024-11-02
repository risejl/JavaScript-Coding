/**
 * @param {Array} arr
 * @return {Array}
 */

function arrToTree(arr) {
  const tree = [];
  const hashmap = new Map();

  // create nodes and store references
  arr.forEach((item) => {
    hashmap[item.id] = {
      id: item.id,
      name: item.name,
      children: [],
    };
  });

  // build the tree
  arr.forEach((item) => {
    if (item.parentId === null) {
      tree.push(hashmap[item.id]);
    } else {
      hashmap[item.parentId].children.push(hashmap[item.id]);
    }
  });

  return tree;
}

// Usage example
const flatArray = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 1.1", parentId: 1 },
  { id: 3, name: "Node 1.2", parentId: 1 },
  { id: 4, name: "Node 1.1.1", parentId: 2 },
  { id: 5, name: "Node 2", parentId: null },
  { id: 6, name: "Node 2.1", parentId: 5 },
  { id: 7, name: "Node 2.2", parentId: 5 },
];

const tree = arrToTree(flatArray);

console.log(tree); // => [{ id: 1, name: 'Node 1', children: [ [Object], [Object] ] }, { id: 5, name: 'Node 2', children: [ [Object], [Object] ] }]
