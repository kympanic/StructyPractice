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
  let result = [];
  let stack = [root]
  while(stack.length > 0){
    let node = stack.pop();
    result.push(node.val);
    
    if(node.right !== null) stack.push(node.right)
    if(node.left !== null) stack.push(node.left)
  }
  return result
};
​
module.exports = {
  depthFirstValues,
};
​
  }