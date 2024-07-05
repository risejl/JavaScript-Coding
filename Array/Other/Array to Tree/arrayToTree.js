/**
 * @param {Array<{id: number, name: string, parentId: number | null}>} flatArray - The flat array of objects, each representing a node with id, name, and parentId properties.
 * @param {number|null} [parentId=null] - The parent ID to start building the tree from. Initially null to start from root nodes.
 * @returns {Array<{id: number, name: string, children: Array}>} - The hierarchical tree structure.
 */
const arrayToTree = function(flatArray, parentId = null) {
  const tree = [];
  
  flatArray.forEach(item => {
    if (item.parentId === parentId) {
      const children = arrayToTree(flatArray, item.id);
      const node = {
        id: item.id,
        name: item.name,
        children: children
      };
      tree.push(node);
    }
  });

  return tree;
};
