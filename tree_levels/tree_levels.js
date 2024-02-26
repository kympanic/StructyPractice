// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeLevels = (root)=> {
  let levels = [];
  fillLevels(root,levels,0)
  
  return levels;
}
​
const fillLevels = (root,levels, levelNum)=> {
  if(root === null) return [];
  
  if(levels.length === levelNum){
    levels.push([root.val])
  }else{
    levels[levelNum].push(root.val)
  }
  
  
  fillLevels(root.left,levels,levelNum + 1)
  fillLevels(root.right,levels,levelNum + 1)
  
}
​
// const treeLevels = (root) => {
//   if(root === null) return [];
//   let levels = [];
//   let stack = [ { node:root, levelNum: 0} ];
//   while(stack.length > 0){
//     const { node, levelNum} = stack.pop();
    
//     if(levels.length === levelNum){
//       levels.push([node.val])
//     }else{
//       levels[levelNum].push(node.val)
//     }
    
//     if(node.right !== null) stack.push({node:node.right, levelNum: levelNum + 1})
//     if(node.left !== null) stack.push({node:node.left, levelNum: levelNum + 1})
    
//   }
//   return levels;
// };
​
module.exports = {
  treeLevels,
};
​