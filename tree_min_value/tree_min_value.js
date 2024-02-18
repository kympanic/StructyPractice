// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeMinValue = (root) => {
  if(root === null) return Infinity;
  let smallestLeftValue = treeMinValue(root.left)
  let smallestRightValue = treeMinValue(root.right)
  return Math.min(root.val,smallestLeftValue,smallestRightValue)
};
​
module.exports = {
  treeMinValue,
};
​
  const rightValues = depthFirstValues(root.right)