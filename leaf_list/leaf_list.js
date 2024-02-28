
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const leafList = (root) => {
  if(root === null) return []
  let stack = [root]
  let leaves = [];
  while(stack.length > 0){
    let current = stack.pop();
    if(current.left === null && current.right === null) leaves.push(current.val)
    
    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)
  }
  return leaves
};
​
module.exports = {
  leafList,
};
​
​