// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeMinValue = (root) => {
  if(root === null) return Infinity;
  let leftValues = treeMinValue(root.left)
  let rightValues = treeMinValue(root.right)
  return Math.min(root.val,leftValues,rightValues)
};


module.exports = {
  treeMinValue,
};

