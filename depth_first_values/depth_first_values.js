// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const depthFirstValues = (root) => {
  if(root === null) return [];
  return [root.val, ...depthFirstValues(root.left),...depthFirstValues(root.right)]
};
​
module.exports = {
  depthFirstValues,
};
​