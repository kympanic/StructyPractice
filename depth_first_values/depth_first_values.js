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
  
  let values = []
  let stack = [root];
  while(stack.length > 0){
    let current = stack.pop();
    values.push(current.val)
    
    if(current.right !== null)
      stack.push(current.right)
    
    if(current.left !== null)
      stack.push(current.left)
   } 
  
  return values;
};
​
module.exports = {
  depthFirstValues,
};
​