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
  let match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right,target)
};
​
module.exports = {
  treeValueCount,
};
​
      currentStreak = 1;