/**
 * @param {Array} tree
 * @param {number} parentId
 * @return {Array}
 */

// Time: O(n) | Space: O(h)
function treeToArr(tree, parentId = null) {
  const arr = [];

  tree.forEach((node) => {
    const { id, name } = node;
    arr.push({ id, name, parentId });

    // recursive
    if (node.children && node.children.length > 0) {
      arr.push(...treeToArr(node.children, id));
    }
  });

  return arr;
}

// Usage example
const tree = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
        children: [
          {
            id: 4,
            name: "Node 1.1.1",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "Node 1.2",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: "Node 2",
    children: [
      {
        id: 6,
        name: "Node 2.1",
        children: [],
      },
      {
        id: 7,
        name: "Node 2.2",
        children: [],
      },
    ],
  },
];
const flatArray = treeToArr(tree);
console.log(flatArray);
/*
[
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 1.1', parentId: 1 },
  { id: 4, name: 'Node 1.1.1', parentId: 2 },
  { id: 3, name: 'Node 1.2', parentId: 1 },
  { id: 5, name: 'Node 2', parentId: null },
  { id: 6, name: 'Node 2.1', parentId: 5 },
  { id: 7, name: 'Node 2.2', parentId: 5 }
]
*/
