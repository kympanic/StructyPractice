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
  let count = 0;
  let stack = [root]
  while(stack.length > 0){
    let current = stack.pop();
    if(current.val === target) count +=1
    
    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)
  }
  return count
};
​
module.exports = {
  treeValueCount,
};
​