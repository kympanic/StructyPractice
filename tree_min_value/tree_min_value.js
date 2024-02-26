// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeMinValue = (root) => {
  let min = Infinity;
  let stack = [root];
  while(stack.length > 0){
    let current = stack.pop();
    if(current.val < min){
      min = current.val
    }
    
    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)
  }
  
  return min;
};
​
module.exports = {
  treeMinValue,
};
​