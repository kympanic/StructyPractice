// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeIncludes = (root, target) => {
  if(root === null) return false;
  if(root.val === target) return true;
  return treeIncludes(root.left,target) || treeIncludes(root.right,target)
};
​
module.exports = {
  treeIncludes,
};
​