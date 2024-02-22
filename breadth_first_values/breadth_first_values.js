// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const breadthFirstValues = (root) => {
  if(root === null) return []
  let result = [];
  let queue = [root]
  while(queue.length > 0){
    let node = queue.shift();
    result.push(node.val)
    
    if(node.left !== null) queue.push(node.left)
    if(node.right !== null) queue.push(node.right)
  }
  return result;
};
​
module.exports = {
  breadthFirstValues,
};
​