// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const breadthFirstValues = (root) => {
  if(root === null) return [];
  let queue = [root]
  let results = [];
  while(queue.length){
    let node = queue.shift();
    results.push(node.val)
    if(node.left !== null) queue.push(node.left)
    if(node.right !== null) queue.push(node.right)
  }
  
  return results;
};
​
module.exports = {
  breadthFirstValues,
};
​