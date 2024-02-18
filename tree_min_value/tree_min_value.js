// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeMinValue = (root) => {
  let queue = [root]
  let min = Infinity;
  while(queue.length > 0){
    let node = queue.shift();
    if(node.val < min) min = node.val;
    if(node.left !== null)queue.push(node.left)
    if(node.right !== null)queue.push(node.right)
  }
  return min;
};
​
module.exports = {
  treeMinValue,
};
​
  const rightValues = depthFirstValues(root.right)