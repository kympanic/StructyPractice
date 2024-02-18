// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeSum = (root) => {
  // if(root === null) return 0;
  // let sum = 0;
  // let stack = [root]
  // while(stack.length){
  //   let current = stack.pop();
  //   sum += current.val
  //   if(current.right !== null)stack.push(current.right)
  //   if(current.left !== null)stack.push(current.left)
  // }
  // return sum
  if(root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right)
};
​
module.exports = {
  treeSum,
};
​
    