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
  let stack = [root]
  let results = [];
  while(stack.length){
    let current = stack.pop();
    results.push(current.val)
    
    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)
  
  }
  return results;
};
​
module.exports = {
  depthFirstValues,
};
​