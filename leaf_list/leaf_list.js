// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const leafList = (root) => {
  if(root === null) return [];
  let stack = [root]
  let leaves = []
  while(stack.length > 0){
    let node = stack.pop();
    if(node.left === null && node.right === null) leaves.push(node.val)
    
    if(node.right !== null) stack.push(node.right)
    if(node.left !== null) stack.push(node.left)
  }
  return leaves;
};
​
module.exports = {
  leafList,
};
​
    avgs.push(avg(level))