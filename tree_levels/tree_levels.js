
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeLevels = (root) => {
  if(root === null) return [];
  let levels = [];
  let stack = [{node:root, levelNum: 0}]
  while(stack.length > 0){
    let {node, levelNum} = stack.pop();
    
    if(levels.length === levelNum){
      levels.push([node.val])
    }else{
      levels[levelNum].push(node.val)
    }
​
    if(node.right !== null) stack.push({node:node.right, levelNum: levelNum +1})
    if(node.left !== null) stack.push({node:node.left, levelNum: levelNum + 1})
    
  }
  return levels;
};
​
module.exports = {
  treeLevels,
};
​