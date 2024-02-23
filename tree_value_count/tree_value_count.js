// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeValueCount = (root, target) => {
  if(root === null) return 0
  let count = 0;
  let stack = [root]
  while(stack.length > 0){
    let node = stack.pop()
    if(node.val === target) count += 1;
    
    if(node.right !== null) stack.push(node.right)
    if(node.left !== null) stack.push(node.left)
  }
  return count
};
​
module.exports = {
  treeValueCount,
};
​