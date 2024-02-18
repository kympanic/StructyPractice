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
  
  let results = []
  let queue = [root]
  while(queue.length > 0){
    let current = queue.shift();
    results.push(current.val)
    
    if(current.left !== null) queue.push(current.left)
    if(current.right !== null) queue.push(current.right)
  }
  return results
};
​
module.exports = {
  breadthFirstValues,
};
​