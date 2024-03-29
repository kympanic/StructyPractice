// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const bottomRightValue = (root) => {
  let queue = [root]
  let current = null;
  while(queue.length){
    current = queue.shift()
    
    if(current.left !== null) queue.push(current.left)
    if(current.right !== null) queue.push(current.right)
  }
  return current.val
};
​
module.exports = {
  bottomRightValue,
};
​
  if(node === null) return -1;