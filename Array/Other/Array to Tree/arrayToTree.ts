interface FlatNode {
  id: number;
  name: string;
  parentId: number | null;
}

interface TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}

const arrayToTree = function(flatArray: FlatNode[], parentId: number | null = null): TreeNode[] {
  const tree: TreeNode[] = [];
  
  flatArray.forEach(item => {
    if (item.parentId === parentId) {
      const children = arrayToTree(flatArray, item.id);
      const node: TreeNode = {
        id: item.id,
        name: item.name,
        children: children
      };
      tree.push(node);
    }
  });

  return tree;
};
