// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const pathFinder = (root, target) => {
  if(root === null) return null;
  if(root.val === target) return [root.val]
  
  let leftSide = pathFinder(root.left,target)
  if(leftSide !== null) return [root.val,...leftSide]
  
  let rightSide = pathFinder(root.right,target)
  if(rightSide !== null) return [root.val,...rightSide]
  
  return null
};
​
module.exports = {
  pathFinder,
};
​