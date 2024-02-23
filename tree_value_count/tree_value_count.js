// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeValueCount = (root, target) => {
  if(root === null) return 0;
  let count = root.val === target ? 1 : 0;
  return count + treeValueCount(root.left,target) + treeValueCount(root.right,target)
};
​
module.exports = {
  treeValueCount,
};
​