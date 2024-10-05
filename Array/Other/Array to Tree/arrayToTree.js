/**
 * @param {Array<{id: number, name: string, parentId: number | null}>} flatArray - The flat array of objects, each representing a node with id, name, and parentId properties.
 * @param {number|null} [parentId=null] - The parent ID to start building the tree from. Initially null to start from root nodes.
 * @returns {Array<{id: number, name: string, children: Array}>} - The hierarchical tree structure.
 */

function arrToTree(flatArr, parentId = null) {
  const tree = [];

  flatArr.forEach((item) => {
    if (item.parentId === parentId) {
      const children = arrToTree(flatArr, item.id);
      const node = {
        id: item.id,
        name: item.name,
        children: children,
      };

      tree.push(node);
    }
  });

  return tree;
}

/*
const flatArray = [
    { id: 1, name: 'Node 1', parentId: null },
    { id: 2, name: 'Node 1.1', parentId: 1 },
    { id: 3, name: 'Node 1.2', parentId: 1 },
    { id: 4, name: 'Node 1.1.1', parentId: 2 },
    { id: 5, name: 'Node 2', parentId: null },
    { id: 6, name: 'Node 2.1', parentId: 5 },
    { id: 7, name: 'Node 2.2', parentId: 5 }
];

const tree = arrToTree(flatArray);

console.log(tree); // [{ id: 1, name: 'Node 1', children: [ [Object], [Object] ] }, { id: 5, name: 'Node 2', children: [ [Object], [Object] ] }]
*/